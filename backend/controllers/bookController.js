const Book = require("../models/Book");
const { Parser } = require("json2csv");

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, genre, publication_date, isbn } = req.body;

  try {
    const newBook = await Book.create({
      title,
      author,
      genre,
      publication_date,
      isbn,
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error });
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    console.log("Fetching books from database...");
    const books = await Book.findAll();
    console.log("Books fetched:", books);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publication_date, isbn } = req.body;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update the book with new data
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.publication_date = publication_date;
    book.isbn = isbn;

    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await book.destroy();
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};

// Export books as CSV
exports.exportBooksAsCSV = async (req, res) => {
  try {
    const books = await Book.findAll(); // Fetch all books
    const jsonBooks = books.map((book) => book.toJSON()); // Convert to plain JS objects

    if (jsonBooks.length === 0) {
      return res.status(404).send("No books found to export.");
    }

    // Define the fields/columns for the CSV file
    const fields = [
      "id",
      "title",
      "author",
      "genre",
      "publication_date",
      "isbn",
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(jsonBooks); // Convert JSON to CSV

    // Set response headers for CSV file download
    res.header("Content-Type", "text/csv");
    res.attachment("books.csv");
    res.send(csv); // Send the CSV content
  } catch (error) {
    res.status(500).json({ message: "Error exporting books as CSV", error });
  }
};

// Export books as JSON
exports.exportBooksAsJSON = async (req, res) => {
  try {
    const books = await Book.findAll(); // Fetch all books
    if (books.length === 0) {
      return res.status(404).send("No books found to export.");
    }

    res.header("Content-Type", "application/json");
    res.attachment("books.json");
    res.send(JSON.stringify(books, null, 2)); // Pretty-print JSON with 2 spaces indentation
  } catch (error) {
    res.status(500).json({ message: "Error exporting books as JSON", error });
  }
};

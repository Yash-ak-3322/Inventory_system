# Book Inventory Management System

The Book Inventory Management System is a web-based application that allows users to manage an inventory of books. The system provides functionality for adding new books, viewing and filtering the list of books, editing or deleting book details, and exporting the data in CSV or JSON formats. The backend is built using Node.js with PostgreSQL as the database, and the frontend is developed using React with Material-UI for a modern, responsive design.

## Features
1. **Add a Book**: Users can add new books to the inventory by filling out a form with details such as title, author, genre, publication date, and ISBN.
2. **View Books**: The system displays the list of all books in the inventory in a tabular format.
3. **Edit and Delete Books**: Users can update or remove books from the inventory using buttons within the table.
4. **Export Data**: Users can download the list of books as CSV or JSON files.
5. **Responsive UI**: The system features a clean, user-friendly layout with a responsive design, making it accessible on various screen sizes.

## How to Use the System
**Database User**: `admin_user`  
**Password**: `pass123`

### 1. Adding a New Book
- Navigate to the "Add a New Book" section.
- Fill in the required fields such as Title, Author, Genre, Publication Date, and ISBN.
- Click the "Add Book" button to save the new book to the inventory.

### 2. Viewing the Book List
- The list of books is displayed in a table format in the "Book List" section.
- Columns include Title, Author, Genre, Publication Date, and ISBN.
- The book list updates dynamically after adding, editing, or deleting a book.

### 3. Editing or Deleting a Book
- Each book in the list has an Edit and Delete button.
  - **Edit**: Opens a dialog where the user can update the book details. Click Save after making changes.
  - **Delete**: Removes the book from the list. This action cannot be undone.

### 4. Exporting Books
- There are buttons for exporting the book list as CSV or JSON in the "Export" section.
  - **CSV Export**: Downloads a file with the book data in CSV format, which can be opened in spreadsheet applications.
  - **JSON Export**: Downloads a file with the book data in JSON format, suitable for use in other systems.

### 5. API Endpoints (for developers)
- `GET /api/books`: Fetch all books in the inventory.
- `POST /api/books`: Add a new book.
- `PUT /api/books/:id`: Update an existing book.
- `DELETE /api/books/:id`: Delete a book.
- `GET /api/books/export/csv`: Export all books as a CSV file.
- `GET /api/books/export/json`: Export all books as a JSON file.

## Design Decisions
1. **React with Material-UI**  
   We used React for the frontend to provide a dynamic, interactive user experience, and Material-UI for its responsive and modern design components. Material-UI's pre-built components (e.g., tables, forms, buttons) significantly reduced development time while maintaining a clean and polished interface.

2. **Node.js and PostgreSQL**  
   - Node.js was chosen for the backend because of its non-blocking, event-driven architecture, making it ideal for handling multiple API requests efficiently.
   - PostgreSQL was selected as the database for its reliability and support for relational data, which fits well with the structure of book inventory systems.

3. **CSV and JSON Export**  
   The export functionality was implemented using `json2csv` to generate CSV files and native `JSON.stringify` to export data as JSON. This was done to ensure compatibility with spreadsheet tools like Excel (for CSV) and other systems that use JSON for data interchange.

## Challenges Faced
1. **Database Synchronization**: Initial issues with database schema permissions were encountered when trying to create and sync tables in PostgreSQL. This was resolved by ensuring that the proper user permissions were granted to the database schema.

2. **Dynamic Form Validation**: Implementing form validation for ISBN and required fields presented some challenges. However, we solved this by adding custom validation logic in the frontend using React's state management and by ensuring that the backend also validated the inputs before inserting them into the database.

3. **Handling Large Data Exports**: Exporting large datasets in CSV format was challenging, especially ensuring that the CSV was formatted properly with correct headers. We resolved this by using the `json2csv` library, which allowed us to easily format and export the data.

## Conclusion
The Book Inventory Management System is a robust and easy-to-use solution for managing books. It provides all essential CRUD operations, an intuitive user interface, and export options to suit various user needs. The combination of React, Node.js, and PostgreSQL ensures a scalable and performant application suitable for both small and large datasets.

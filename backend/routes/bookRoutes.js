const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// CRUD routes
router.post("/books", bookController.addBook);
router.get("/books", bookController.getBooks);
router.get("/books/:id", bookController.getBookById);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

// Export routes
router.get("/books/export/csv", bookController.exportBooksAsCSV);
router.get("/books/export/json", bookController.exportBooksAsJSON);

module.exports = router;

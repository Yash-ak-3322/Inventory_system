import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

// Add a new book
export const addBook = (book) => {
  return axios.post(API_URL, book);
};

// Get all books
export const getBooks = () => {
  return axios.get(API_URL);
};

// Get a book by ID
export const getBookById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update a book by ID
export const updateBook = (id, book) => {
  return axios.put(`${API_URL}/${id}`, book);
};

// Delete a book by ID
export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Export books (CSV or JSON)
export const exportBooks = (format) => {
  return axios.get(`${API_URL}/export?format=${format}`, {
    responseType: "blob",
  });
};

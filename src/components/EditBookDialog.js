import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { updateBook } from "../services/bookService";

const EditBookDialog = ({ open, onClose, book }) => {
  const [updatedBook, setUpdatedBook] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    publication_date: book.publication_date,
    isbn: book.isbn,
  });

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateBook(book.id, updatedBook);
      onClose(); // Close the dialog after saving
    } catch (error) {
      alert("Error updating book");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={updatedBook.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Author"
              name="author"
              value={updatedBook.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Genre"
              name="genre"
              value={updatedBook.genre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Publication Date"
              type="date"
              name="publication_date"
              value={updatedBook.publication_date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="ISBN"
              name="isbn"
              value={updatedBook.isbn}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBookDialog;

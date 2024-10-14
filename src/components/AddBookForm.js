import React, { useState } from "react";
import { addBook } from "../services/bookService";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const AddBookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publication_date: "",
    isbn: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook(book);
      alert("Book added successfully!");
      setBook({
        title: "",
        author: "",
        genre: "",
        publication_date: "",
        isbn: "",
      });
    } catch (error) {
      alert("Error adding book");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 3, maxWidth: 500, mx: "auto", boxShadow: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Add a New Book
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Genre"
            name="genre"
            value={book.genre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Publication Date"
            type="date"
            name="publication_date"
            value={book.publication_date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ISBN"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Book
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddBookForm;

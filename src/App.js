import React from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import ExportButton from "./components/ExportButton";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom sx={{ mt: 4 }}>
        Book Inventory Management System
      </Typography>
      <AddBookForm />
      <BookList />
      <ExportButton />
    </Container>
  );
};

export default App;

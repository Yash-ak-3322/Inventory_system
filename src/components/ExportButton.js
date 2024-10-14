import React from "react";
import { Button, Box } from "@mui/material";

const ExportButton = () => {
  const exportBooksData = async (format) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/export/${format}`,
        {
          method: "GET",
        }
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `books.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert("Error exporting books");
    }
  };

  return (
    <Box sx={{ mt: 3, textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ mr: 2 }}
        onClick={() => exportBooksData("csv")}
      >
        Export as CSV
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => exportBooksData("json")}
      >
        Export as JSON
      </Button>
    </Box>
  );
};

export default ExportButton;

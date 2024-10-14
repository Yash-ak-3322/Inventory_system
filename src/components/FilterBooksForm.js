import React, { useState } from "react";

const FilterBooksForm = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filter Books</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={filters.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={filters.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={filters.genre}
        onChange={handleChange}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterBooksForm;

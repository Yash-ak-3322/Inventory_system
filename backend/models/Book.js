const { DataTypes } = require("sequelize");
const sequelize = require("../database");

// Define the Book model
const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    publication_date: {
      type: DataTypes.DATE,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Inventory",
    timestamps: false,
  }
);

module.exports = Book;

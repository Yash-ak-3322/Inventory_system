const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes");
const sequelize = require("./database");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", bookRoutes);

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the PostgreSQL database.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;

const { Sequelize } = require("sequelize");

// PostgreSQL connection using Sequelize
const sequelize = new Sequelize("book_inventory", "admin_user", "pass123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

const app = require("./app");

// Sync the database and start the server
const sequelize = require("./database");

sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });

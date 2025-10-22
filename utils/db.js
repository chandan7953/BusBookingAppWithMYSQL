const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("busbookingapp", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected successfully");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
}

connectDB();

module.exports = sequelize;

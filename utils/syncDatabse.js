const sequelize = require("./db");
const User = require("../models/User");
const Bus = require("../models/Bus");
const Booking = require("../models/Booking");
const Payment = require("../models/Payment");

async function syncDatabase() {
  try {
    await sequelize.sync(); // or { force: true } for reset
    console.log("All tables created successfully!");
  } catch (err) {
    console.error("Error syncing database:", err);
  } finally {
    await sequelize.close();
  }
}

module.exports = syncDatabase;

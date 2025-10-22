const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Booking = sequelize.define("Booking", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  seatNumber: { type: DataTypes.INTEGER },
});

module.exports = Booking;

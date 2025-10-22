const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Bus = sequelize.define("Bus", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  busNumber: { type: DataTypes.STRING(50), allowNull: false },
  totalSeats: { type: DataTypes.INTEGER },
  availableSeats: { type: DataTypes.INTEGER },
});

module.exports = Bus;

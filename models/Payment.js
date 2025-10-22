const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  amountPaid: { type: DataTypes.DECIMAL(10, 2) },
  paymentStatus: { type: DataTypes.STRING(50) },
});

module.exports = Payment;

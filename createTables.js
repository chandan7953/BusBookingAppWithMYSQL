const pool = require('./db.js');

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id INT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `);

    // Buses Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Buses (
        id INT PRIMARY KEY,
        busNumber VARCHAR(50),
        totalSeats INT,
        availableSeats INT
      );
    `);

    // Bookings Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Bookings (
        id INT PRIMARY KEY,
        seatNumber INT
      );
    `);

    // Payments Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Payments (
        id INT PRIMARY KEY,
        amountPaid DECIMAL(10,2),
        paymentStatus VARCHAR(50)
      );
    `);

    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
}

module.exports = createTables;

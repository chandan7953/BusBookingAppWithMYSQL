const db = require("../utils/db");

// Add a new bus
const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;

    if (!busNumber || !totalSeats || !availableSeats)
      return res.status(400).json({ message: "All fields are required" });

    await db.query(
      "INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)",
      [busNumber, totalSeats, availableSeats]
    );

    res.status(201).json({ message: "Bus added successfully" });
  } catch (err) {
    console.error("Error adding bus:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all buses with available seats > specified number
const getAvailableBuses = async (req, res) => {
  try {
    const { seats } = req.params;
    const [rows] = await db.query(
      "SELECT * FROM Buses WHERE availableSeats > ?",
      [seats]
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching buses:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addBus, getAvailableBuses };

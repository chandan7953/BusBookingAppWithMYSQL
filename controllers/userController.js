const db = require("../utils/db");

// Add a new user
const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email)
      return res.status(400).json({ message: "Name and email are required" });

    await db.query("INSERT INTO Users (name, email) VALUES (?, ?)", [name, email]);
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Users");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addUser, getAllUsers };

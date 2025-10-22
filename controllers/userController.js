const User = require("../models/User");


const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email)
      return res.status(400).json({ message: "Name and email are required" });

    await User.create({ name, email }); 

    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.status(200).json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addUser, getAllUsers };

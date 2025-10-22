const Bus = require("../models/Bus");

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;

    if (!busNumber || !totalSeats || !availableSeats)
      return res.status(400).json({ message: "All fields are required" });

    await Bus.create({ busNumber, totalSeats, availableSeats });

    res.status(201).json({ message: "Bus added successfully" });
  } catch (err) {
    console.error("Error adding bus:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAvailableBuses = async (req, res) => {
  try {
    const { seats } = req.params;
    const buses = await Bus.findAll({
      where: { availableSeats: { [Op.gt]: seats } },
    });
    res.status(200).json(buses);
  } catch (err) {
    console.error("Error fetching buses:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

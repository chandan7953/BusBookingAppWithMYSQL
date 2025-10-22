const express = require("express");
const userRoutes = require("./routers/userRoutes");
const busRoutes = require("./routers/busRoutes");
const syncDatabase = require("./utils/syncDatabse"); // ✅ make sure filename is correct

const app = express();
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/", busRoutes);

// Async server startup
const startServer = async () => {
  try {
    // 1️⃣ Sync the database
    await syncDatabase();
    console.log("Database synced successfully.");

    // 2️⃣ Start the Express server
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit the app if DB sync fails
  }
};

// Call the startup function
startServer();

const express = require("express");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/", busRoutes);

const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const createTables = require('./createTables.js');

const app = express();
const PORT = 3000;

app.use(express.json());

// Optional route to trigger table creation
app.get('/create-tables', async (req, res) => {
  try {
    await createTables();
    res.send("Tables created successfully.");
  } catch (err) {
    res.status(500).send("Error creating tables.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

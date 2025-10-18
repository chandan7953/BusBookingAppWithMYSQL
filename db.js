const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'BusBookingApp',
  waitForConnections: true,
  connectionLimit: 10, // max simultaneous connections
  queueLimit: 0
});

module.exports = pool;

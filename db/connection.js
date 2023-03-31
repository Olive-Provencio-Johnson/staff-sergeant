const mysql = require('mysql2');
require('dotenv').config();

// Connect to the database 
const db = mysql.createConnection(
    {
      host: '127.0.01',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employee_db database.`)
  );

  module.exports = db;
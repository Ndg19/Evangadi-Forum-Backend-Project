const mysql = require("mysql2");
require("dotenv").config();
const dbConnection = mysql.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10
});

module.exports = dbConnection.promise();

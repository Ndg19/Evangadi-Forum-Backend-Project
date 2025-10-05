import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = mysql.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionLimit: 10
});

export default dbConnection.promise();

const mysql = require("mysql2");
require("dotenv").config();
const dbConnection = mysql.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: 3307,
  connectionLimit: 10
});
// db.execute("select 'test' ", (err, result) => {
//   // console.log("execute - function");
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
//   // console.log("end - function");
// });

module.exports = dbConnection.promise();

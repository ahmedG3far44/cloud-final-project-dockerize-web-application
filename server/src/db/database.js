const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config();

const myDatabase = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

myDatabase.connect((error) => {
  error
    ? console.log("db connection field !!!!")
    : console.log("db connection successfully done!");
});

module.exports = myDatabase;

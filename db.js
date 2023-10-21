const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "35.221.205.131",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_DATABASE || "cat",
});

connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed");
    console.log(err);
  }
  console.log("~~~~~~~~Database Connection Successfully~~~~~~~~");
});

module.exports = connection;

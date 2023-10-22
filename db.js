const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "35.221.205.131",
  port: 3306,
  user: "root",
  password: "12345",
  database: "cat",
});

const pool = mysql.createPool({
  connectionLimit: 10, // 最大连接数
  host: "35.221.205.131",
  port: 3306,
  user: "root",
  password: "12345",
  database: "cat",
});

connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed");
    console.log(err);
  }
  console.log("~~~~~~~~Database Connection Successfully~~~~~~~~");
});

module.exports = connection;

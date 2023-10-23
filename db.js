const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: "bfbd86d6ff241e",
  port: 3306,
  password: "919f044c",
  database: "heroku_26c953979d7734c",
  database: "us-cdbr-east-06.cleardb.net",
});

connection.connect((err) => {
  if (err) {
    console.error("Database Connection Failed");
    console.log(err);
  }
  console.log("~~~~~~~~Database Connection Successfully~~~~~~~~");
});

module.exports = connection;

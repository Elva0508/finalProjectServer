const mysql = require("mysql2");

const connection = mysql.createConnection({
  extra: {
    socketPath: "/cloudsql/numeric-marker-402719:asia-east1:final-project",
  },
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

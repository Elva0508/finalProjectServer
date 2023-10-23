const mysql = require("mysql2");

const createUnixSocketPool = async (config) => {
  return mysql.createPool({
    user: "root", // e.g. 'my-db-user'
    password: "12345", // e.g. 'my-db-password'
    database: "cat", // e.g. 'my-database'
    socketPath: "/cloudsql/numeric-marker-402719:asia-east1:final-project", // e.g. '/cloudsql/project:region:instance'
    // Specify additional properties here.
  });
};

module.exports = createUnixSocketPool;

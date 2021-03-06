// Sets up connection to MySQL
const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASS,
        database: "burgers_db"
    });
};

// Makes connection
connection.connect();

// Export connection for use in ORM
module.exports = connection;
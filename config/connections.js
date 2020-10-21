// Sets up connection to MySQL
require("dotenv").config();
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "G0disD3ad!",
        database: "burgers_db"
    });
};

// Makes connection
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId)
});

// Export connection for use in ORM
module.exports = connection;
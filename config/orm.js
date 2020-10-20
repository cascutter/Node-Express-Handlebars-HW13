// Importing connection.js
const connection = require("../config/connections.js");

// Methods to retrieve data and store data in burgers_db
let orm = {
    // Selects all data from burgers table
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Inserts data to burgers table
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + " SET ?";
        connection.query(queryString, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Updates data in burger table
    updateOne: function(table, condition, id, cb) {
        let queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(queryString, id, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// Export ORM object
module.exports = orm;
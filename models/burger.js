// Import ORM
const orm = require("../config/orm.js");

let burger = {
    selecAll: function(cb) {
        orm.selecAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne("burgers", value, cb, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, id, cb) {
        orm.updateOne("burgers", condition, id, cb, function(res) {
            cb(res);
        });
    }
};

// Export database functions for burgers_controller.js
module.exports = burger
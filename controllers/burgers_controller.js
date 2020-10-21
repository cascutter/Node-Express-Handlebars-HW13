const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Route creation and logic set up

// Get all data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log("hbsObject inside of routes: ", hbsObject);
        res.render("index", hbsObject);
    });
});

// Insert new burger data
// post a new burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        res.json(result);
    });
});

// Set burger "devoured" boolean to true
router.put("/api/burgers/devoured/:id", function(req, res) {
    const condition = `id = ${req.params.id};`;
    const boolean = req.body.devoured;

    burger.updateOne(boolean, condition, function(result) {
        if (result.changedRows === 0) {
            //if no rows were changed, the ID must not exist so 404
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

// Export routes for server.js
module.exports = router;
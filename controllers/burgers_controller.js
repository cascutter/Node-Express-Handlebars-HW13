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
        console.log(hbsObject);
        res.render("index". hbsObject);
    });
});

// Insert new burger data
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id:result.insertId })
    });
});

// Set burger "devoured" boolean to true
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js
module.exports = router;

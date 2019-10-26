 
// Dependencies
var express = require("express");
// Import the model to use its db functions for burger.js
var burger = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
// Create routes and set up logic where required.
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var allBurgers = {
            burger: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });

// Add new burger to the db.
router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        var allBurgers = {
            burger: result
        };
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        console.log(allBurgers);
    });
});
});
// Set burger devoured status to true.
router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Delete burger from db.
router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id; 
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
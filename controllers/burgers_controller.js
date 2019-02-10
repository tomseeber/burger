var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerObject = {
        burger: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
    // res.send("Laura the Barbarian Conquerer");
  });
  
  router.post("/api/burger", function(req, res) {
    burger.insertOne(
    //   [
    //   "burger_name", "devoured"
    // ], 
    [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      console.log(res.json({ id: result.insertId }));
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
     devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;

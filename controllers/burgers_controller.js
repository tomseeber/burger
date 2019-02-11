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
    
      req.body.burger_name, function(result) {
      // Send back the ID of the new burger
      console.log(res.json({ burger_name: result.burger_name }));
    });
  });
  
  router.put("/api/burger/:burger_name", function(req, res) {
    // var condition = "id = " + req.params.id;
    // var condition = "burger_name =" +req.params.burger_name;
  
    console.log(req.body, "req.body");
  
    burger.updateOne(
     req.body.burger_name, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;

var connection = require("./connection.js");

var orm = {
    selectAll: function(table="burgers", cb) {
        var queryString = `SELECT * FROM ${table};`
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
            cb(result);
        });
    },
    insertOne: function(vals, cb, table="burgers", cols=["burger_name", "devoured"]) {
      var array = [];
      console.log(vals, "vals");
      array.push(vals);
      console.log(array, "array");
      // vals.join('');
      console.log(array.length, "array length");
      if (array.length === 1) {
        array.push(false);
        console.log(array, "array");
      }
      vals = `"${array[0]}", ${array[1]}`
      var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${vals}) ;`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

      updateOne: function(vals, cb, table="burgers", cols=["burger_name", "devoured"]) {
      var array = [];
      console.log(vals, "vals");
      array.push(vals);
      console.log(array, "array");
      // vals.join('');
      console.log(array.length, "array length");
        var queryString = `UPDATE ${table} SET devoured = true WHERE burger_name = "${array[0]}";`;
          console.log(queryString);
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        },
}


module.exports = orm; 
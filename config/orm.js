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
      console.log(vals.length);
      if (vals.length === 1) {
        // console.log('vals.length is 1')
        vals.push(false);
      }
      vals = `"${vals[0]}", ${vals[1]}`
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
        var queryString = `UPDATE ${table} SET devoured = true WHERE  burger_name = "${vals[0]}";`;
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
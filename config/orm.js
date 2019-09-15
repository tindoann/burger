var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    // Shows all the burgers
    selectAll: function (table, cb) {

    },

    updateOne: function (table, col, val, cb) {

    }, 

    updateOne: function () {

    }
  }




    connection.query(query, function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );

module.exports = orm;

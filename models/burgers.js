
// IMport orm into burger
const orm = require('../config/orm.js');

// Call the ORM function using burger specific input for the ORM
let burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(objColVals, condition, cb) {
    orm.insertOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', condition, function(res) {
      cb(res);
    });
  }, 

  deleteOne: function(condition, cb) {
    orm.deleteOne('burgers', condition, function(res) {
      cb(res); 
    }); 
  }
}; 

// Export the database function for the controller (burgerController.js)
module.exports = burger;
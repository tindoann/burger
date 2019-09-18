const orm = require('../config/orm.js');

let burger = {
  selectAll: function(cb) {
    orm.selectAll('burger', function (res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(objColVals, condition, cb) {
    orm.insertOne('burger', objColVals, condition, function(res) {
      cb(res);
    });
  },

  updateOne: function(condition, cb) {
    orm.updateOne('burger', condition, function(res) {
      cb(res);
    });
  }
};

// Export the database function for the controller (burgerController.js)
module.exports = burger;
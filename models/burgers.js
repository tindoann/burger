const orm = require('../config/orm.js'); 

let burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res); 
    }); 
  }, 

// The variables cols and vals are arrays
insertOne: function(objColVals, condiiton, cb) {
  orm.insertOne('burgers', objColVals, condition, function(res) {
    cb(res); 
  }); 
}, 

updateOne: function(condition, cb) {
  orm.updateOne('burgers', condition, function(res) {
    cb(res); 
  }); 
  }
}; 

// Export the database function for the controller (burgerController.js)
module.export = burgers; 
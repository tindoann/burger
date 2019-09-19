// Controller code acts as a liaison between the Model and the View, 
// receiving user input and deciding what to do with it. It’s the brains of the application

// Dependencies 
const express = require('express');
const router = express.Router();

// Import the model (burgers) to use its database functions. 
const burger = require('../models/burger.js');

// Create all our get, put, and post routes and set up logic within those routes where required. 

router.get('/', function (req, res) {

  //The root will show all the burgers
  burger.selectAll(function(data) {
    // Store the data we receive as an object to our index 
    let burgerObj = {
      burger: data
    };
    // Display content on the page
    console.log(burgerObj);
    res.render('index', burgerObj);
  });
});

// Puts and Delete reques are similarly constructed
router.put('/api/burgers/:id', function (req, res) {
  let condition = 'id = ' + req.params.id;
  console.log('condition', condition);

  burger.updateOne({
    'devoured': req.body.devoured},
    condition, function(result) {
      if (result.changeRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});

// Post request that adds a new burger with a create method
router.post('/api/burgers', function (req, res) {
  burger.insertOne(
    ['burger_name', devourted], [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new burger
      res.json({
        id: result.insertId});
    });
});

// Deletes the burger 
router.delete('api/burgers/:id', function(req, res) {
  let condition = 'id = ' + req.params.id; 
  console.log('condition', condition); 

  burger.deleteOne(condition, function(result) {
    if (result.changeRows === 0) {
      return res.status(404).end(); 
    } else {
      res.status(200).end(); 
    }
  }); 
}); 

// E\oxport routes for server.js to use
module.exports = router; 

var express = require('express');
var router = express.Router();
var User = require('../models/user');


// create a new user
var newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});



/* GET users listing. */
router.get('/', function(req, res) {
  // save the user
  User.find({}, function(err, users) {
    if (err) throw err;
    res.send(JSON.stringify(users));
    // object of all the users
    console.log(users);
  });
});

module.exports = router;

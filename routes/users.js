var express = require('express');
var router = express.Router();
var mutler = require('multer');
var upload = mutler({dest:'./uploads'});
var User = require('../models/users');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});


router.get('/register', function(req, res, next) {
  res.render('register');
});
//- because i can
router.get('/', function(req, res, next) {
  res.send('YOU SHALL NOT PASS');
});

router.post('/register', function(req, res, next) {
  
  
  var name = req.body.name; 
  var password = req.body.password;
  var email = req.body.email; 

  var errors = req.validationErrors();

  if (errors){
    res.render('register')
  } else{
    var newUser = new User ({
      name: name,
      email: email,
      password: password
    });

    User.createUser(newUser,function(err, user){
      if (err) throw err
      console.log(user);
      
    });
    res.location('/');
    res.redirect('/');
    }
});





module.exports = router;

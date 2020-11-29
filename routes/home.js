// jshint esversion:10
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const localStorage = require('localStorage');

const app = express();

let User = require('../models/user.js');

// create application/json parser
let jsonParser = bodyParser.json();
router.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({
  extended: true
});
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json({
  type: 'application/*+json'
}));
app.use(bodyParser.json({
  type: 'application/*+json'
}));
router.use(bodyParser.text({
  type: 'text/html'
}));

// for 304
app.disable('etag');

router.get('/', function(req, res) {
  res.sendFile('../index.html', {
    'root': __dirname
  });
});

// user Login
router.post('/', (req, res) => {
  let username = req.body.username,
    password = req.body.password;

  User.findOne({
      where: {
        username: username,
        password: password
      }
   }).then(user => {
      res.cookie('username', username, {
                        expire: 1 / 24, // One hour
                        path: '/',
                        secure: false // <-- false here when served over HTTP
      });
      res.cookie('LoggedIn', true);
      res.cookie('userId', user.id, {
                        expire: 1 / 24, // One hour
                        path: '/',
                        secure: false // <-- false here when served over HTTP
      });
      localStorage.setItem('userId', user.id);
      res.redirect('/profile');
   }).catch(error => {
      console.log(error);
   });

});

module.exports = router;

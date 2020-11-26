// jshint esversion:10
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());

router.get('/', function(req, res) {
  res.sendFile('../index.html', {
    'root': __dirname
  });
});

// user Login
router.post('/', (req, res) => {
  let username = req.body.username,
    password = req.body.password;

  const user = User.findOne({
      where: {
        username: username,
        password: password
      }
   });
   if(!user) {
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
   }
   /* .then(user => {
      res.cookie('username', username);
      res.cookie('LoggedIn', true);
      res.redirect('/profile');
    })
    .catch((error) => {
      throw error;
   });*/
});

module.exports = router;

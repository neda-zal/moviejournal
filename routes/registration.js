// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

let User = require('../models/user.js');

router.get('/register', function(req, res) {
    res.sendFile(path.resolve('./registration/register.html'));
});

router.post('/register', (req, res) => {
  	User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.first_name,
      surname: req.body.last_name
  }).then(user => {
  	res.redirect('/');
  });
});

module.exports = router;

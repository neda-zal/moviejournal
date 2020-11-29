// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');
const localStorage = require('localStorage');

let User = require('../models/user.js');

router.get('/profile', function(req, res) {
   User.findOne({
       where: {
         id: localStorage.getItem('userId')
       }
    }).then(user => {
      res.render('profilemain', {layout: 'profile', data: user.dataValues});
   }).catch(error => {
      console.log(error);
   });
});

router.get('/logout', function(req, res) {
   res.clearCookie('username');
   res.clearCookie('LoggedIn');
   res.clearCookie('userId');
   res.redirect('/');
});

router.post('/profile', function(req, res) {
   User.update({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
   }, {
      returning: true,
      where: {
         id: localStorage.getItem('userId')
      }
   })
   .then(user => {
      res.redirect('back');
   })
   .catch(error => {
      console.log(error);
   });

});

module.exports = router;

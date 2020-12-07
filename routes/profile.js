// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');
const localStorage = require('localStorage');
const fetch = require('node-fetch');

let User = require('../models/user.js');
let List = require('../models/list.js');
let Watchlist = require('../models/watchlist.js');
let Review = require('../models/reviews.js');

let apiBaseURL = 'https://api.themoviedb.org/3/movie/';
let apiKey = "?api_key=177171d8e6052aa2e12394d9149a17aa";

router.get('/profile', function(req, res) {
   User.findOne({
      where: {
         id: localStorage.getItem('userId')
      }
   }).then(user => {
      Watchlist.findAll({
            where: {
               userid: parseInt(localStorage.getItem('userId'))
            }
         }).then(movies => {
            Review.findAll({
                  where: {
                     userid: parseInt(localStorage.getItem('userId'))
                  }
               }).then(reviews => {
                  res.render('profilemain', {
                     layout: 'profile',
                     data: user.dataValues,
                     movies: movies,
                     reviews: reviews
                  });
               }).catch(err => {
                  throw err;
               });

         })
         .catch(err => {
            throw err;
         });
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

router.post('/newlist', function(req, res) {
   let iduser = parseInt(localStorage.getItem('userId'));
   List.create({
         userid: iduser,
         listname: req.body.newlist
      }).then(user => {
         res.redirect('/profile');
      })
      .catch(err => {
         throw err;
      });

});

router.post('/leavereview', function(req, res) {
   let iduser = parseInt(localStorage.getItem('userId'));
   Review.create({
         userid: iduser,
         movietitle: req.body.movietitle,
         poster: req.body.poster,
         releaseDate: req.body.releaseDate,
         overview: req.body.overview,
         vote: req.body.vote,
         rating: parseInt(req.body.rating),
         comment: req.body.review
      }).then(review => {
         res.redirect('back');
      })
      .catch(err => {
         throw err;
      });




});

module.exports = router;

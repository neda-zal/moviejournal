// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');
const localStorage = require('localStorage');
const Watchlist = require('../models/watchlist.js');

router.get('/upcomingmovies', function(req, res) {
   res.sendFile(path.resolve('./upcoming/upcomingmovies.html'));
});

router.post('/addtowatchlist', function(req, res) {
   console.log(req.body);
   let iduser = parseInt(localStorage.getItem('userId'));
   Watchlist.create({
         userid: iduser,
         movietitle: req.body.movietitle,
         poster: req.body.poster,
         releaseDate: req.body.releaseDate,
         overview: req.body.overview,
         vote: req.body.rating
      }).then(movie => {
         res.redirect('back');
      })
      .catch(err => {
         throw err;
      });
});

module.exports = router;

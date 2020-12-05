// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');

let apiBaseURL = 'https://api.themoviedb.org/3/';
let apiKey = "177171d8e6052aa2e12394d9149a17aa";
const topRatedURL = apiBaseURL + 'movie/top_rated?api_key=' + apiKey;

let array = [];

router.get('/toprated', function(req, res) {

    Promise.all([
      fetch(topRatedURL + '&page=1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=2', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=3', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=4', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=5', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=6', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=7', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=8', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=9', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json()),
      fetch(topRatedURL + '&page=10', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(data => data.json())
    ])
      .then((data) => {
        let all = [];
        for(let j = 0; j < 10; j++) {
           for(let i = 0; i < data[j].results.length; i++) {
             all.push(data[j].results[i]);
           }
        }
        res.render('topratedmain', {layout: 'toprated', data: all});
    })
    .catch((error) => {
        console.log(error);
      });
});

module.exports = router;

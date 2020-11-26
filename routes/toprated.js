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
        for(let i = 0; i < data[0].results.length; i++) {
          all.push(data[0].results[i]);
        }
        for(let i = 0; i < data[1].results.length; i++) {
          all.push(data[1].results[i]);
        }
        for(let i = 0; i < data[2].results.length; i++) {
          all.push(data[2].results[i]);
        }
        for(let i = 0; i < data[3].results.length; i++) {
          all.push(data[3].results[i]);
        }
        for(let i = 0; i < data[4].results.length; i++) {
          all.push(data[4].results[i]);
        }
        for(let i = 0; i < data[5].results.length; i++) {
          all.push(data[5].results[i]);
        }
        for(let i = 0; i < data[6].results.length; i++) {
          all.push(data[6].results[i]);
        }
        for(let i = 0; i < data[7].results.length; i++) {
          all.push(data[7].results[i]);
        }
        for(let i = 0; i < data[8].results.length; i++) {
          all.push(data[8].results[i]);
        }
        for(let i = 0; i < data[9].results.length; i++) {
          all.push(data[9].results[i]);
        }
        res.render('topratedmain', {layout: 'toprated', data: all});
    })
    .catch((error) => {
        console.log(error);
      });
});

module.exports = router;

// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');

// for search
router.get('/searchresults', (req, res) => {
   let search = req.query.search;
   let url = `http://www.omdbapi.com/?apikey=2c6e7a77&s=${search}`;

    request(url, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            let parsedData = JSON.parse(body);
            res.render('searchresults', {layout: 'searchresults', data: parsedData.Search});
        }
        else if(search === "" ) {
          res.render('error', {layout: 'results'});
        }
        else {
          res.render('error', {layout: 'results'});
        }
      });
});

module.exports = router;

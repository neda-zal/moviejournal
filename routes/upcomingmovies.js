// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/upcomingmovies', function(req, res) {
    res.sendFile(path.resolve('./upcoming/upcomingmovies.html'));
});

module.exports = router;

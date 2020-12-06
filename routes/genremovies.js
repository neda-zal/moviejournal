// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/genremovies', function(req, res) {
    res.sendFile(path.resolve('./genre/genremovies.html'));
});

module.exports = router;

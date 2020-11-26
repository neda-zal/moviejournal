// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/genre', function(req, res) {
    res.sendFile(path.resolve('./genre/genre.html'));
});

module.exports = router;

// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/upcoming', function(req, res) {
    res.sendFile(path.resolve('./upcoming/upcoming.html'));
});

module.exports = router;

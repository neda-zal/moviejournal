// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/profile', function(req, res) {
    res.sendFile(path.resolve('./profile/profile.html'));
});

router.get('/logout', function(req, res) {
        res.clearCookie('username');
        res.clearCookie('LoggedIn');
        res.redirect('/');
});

module.exports = router;

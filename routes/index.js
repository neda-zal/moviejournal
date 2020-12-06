// jshint esversion:10
const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();

// for 304
app.disable('etag');

router.get('/home', function(req, res) {
  res.sendFile(path.resolve('./home/home.html'));
});

module.exports = router;

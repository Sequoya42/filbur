'use strict';

const express = require('express'),
  path = require('path');

let router = express.Router();

router.use('/api', require('./drawings'));

router.use('/api/secretStuff', require('./pass'));

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
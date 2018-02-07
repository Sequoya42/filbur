const express = require('express'),
  router = express.Router(),
  pass = require('../controllers/pass');

router.route('/pass').post(pass.ok);

module.exports = router;

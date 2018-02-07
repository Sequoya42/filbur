const express = require('express'),
  router = express.Router(),
  drawings = require('../controllers/drawings');

router
  .route('/drawings')
  .get(drawings.fetch)
  .post(drawings.add)
  .delete(drawings.del)
  .put(drawings.modif);

module.exports = router;

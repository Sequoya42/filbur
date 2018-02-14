const express = require('express'),
  router = express.Router(),
  drawings = require('../controllers/drawings');

router
  .route('/drawings')
  .get(drawings.fetch)
  .post(drawings.verify, drawings.add)
  .delete(drawings.verify, drawings.del)
  .put(drawings.verify, drawings.modif);

router.route('/verifyToken')
  .get(drawings.verify);

module.exports = router;
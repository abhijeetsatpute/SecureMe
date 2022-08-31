const express = require('express');

const router = express.Router();

const fileOpsController = require('../controllers/fileOp');

router.get('/enc/:fileName', fileOpsController.getEnc);
router.get('/dec/:fileName', fileOpsController.getDec);
router.get('/del/:fileName', fileOpsController.getDel);

module.exports = router;
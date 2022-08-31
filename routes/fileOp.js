const express = require('express');

const router = express.Router();

const fileOpsController = require('../controllers/fileOp');

router.post('/enc', fileOpsController.getEnc);
router.post('/dec', fileOpsController.getDec);
router.post('/del', fileOpsController.getDel);

module.exports = router;
const express = require('express');

const router = express.Router();

router.post('/upload', (req, res, next) => {
    res.redirect('/');
})


module.exports = router;
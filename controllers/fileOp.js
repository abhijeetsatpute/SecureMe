const fs = require('fs');
const path = require('path');

exports.getEnc = (req, res, next) => {
    const fileName = req.params.fileName;
    console.log(fileName);
    res.send(fileName);
}

exports.getDec = (req, res, next) => {
    const fileName = req.params.fileName;
    res.send(fileName);
}

exports.getDel = (req, res, next) => {
    const fileName = req.params.fileName;
    res.send(fileName);
}
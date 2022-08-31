const fs = require('fs');
const path = require('path');

const {deleteFile} = require('../utils/file');

const FileCrypt = require("file-aes-crypt");

exports.getEnc = async (req, res, next) => {
    const fileName = req.params.fileName;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    const storePath = path.join('./public', `./uploads/${fileName}-enc`);
    try {
        const fc = new FileCrypt("fage");
        let result = await fc.encrypt(FilePath, storePath);
        console.log("encrypt ok");
        deleteFile(FilePath);
        // result = await fc.decrypt("./tmp/package-aes.json", "./temp/package2.json");
        // console.log("decrypt ok");
      } catch (e) {
        console.log(e);
      }
    res.redirect('/');
}

exports.getDec = async(req, res, next) => {
    const fileName = req.params.fileName;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    const storePath = path.join('./public', `./uploads/${fileName}-dec`);
    try {
        const fc = new FileCrypt("fage");
        let result = await fc.decrypt(FilePath, storePath);
        console.log("decrypt ok");
        deleteFile(FilePath);
      } catch (e) {
        console.log(e);
      }
    res.redirect('/');
}

exports.getDel = (req, res, next) => {
    const fileName = req.params.fileName;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    deleteFile(FilePath);
    res.redirect('/');
}
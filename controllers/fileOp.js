const fs = require('fs');
const path = require('path');

const {deleteFile} = require('../utils/file');

const FileCrypt = require("file-aes-crypt");

exports.getEnc = async (req, res, next) => {
    const fileName = req.body.fileName;
    const encPwd = req.body.encPwd;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    const storePath = path.join('./public', `./uploads/${fileName.replace('-dec', '')}-enc`);
    try {
        if(!fileName.endsWith('-enc')){
            
            const fc = new FileCrypt(encPwd);
            let result = await fc.encrypt(FilePath, storePath);
            console.log("encrypt ok");
            deleteFile(FilePath);
            return res.redirect('/');
        }
        console.log('File is already encrypted');
        res.redirect('/');
      } catch (e) {
        console.log(e);
      }
}

exports.getDec = async(req, res, next) => {
    const fileName = req.body.fileName;
    const decPwd = req.body.decPwd;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    const storePath = path.join('./public', `./uploads/${fileName.replace('-enc','')}-dec.pdf`);
    try {
        const fc = new FileCrypt(decPwd);
        let result = await fc.decrypt(FilePath, storePath);
        console.log("decrypt ok");
        deleteFile(FilePath);
      } catch (e) {
        console.log(e);
      }
    res.redirect('/');
}

exports.getDel = (req, res, next) => {
    const fileName = req.body.fileName;
    const FilePath = path.join('./public', `./uploads/${fileName}`);
    deleteFile(FilePath);
    res.redirect('/');
}
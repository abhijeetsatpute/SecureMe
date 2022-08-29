const fs = require('fs');
const path = require('path');

exports.getHome = (req, res, next) => {
    fs.readdir(path.join(__dirname, '../public/uploads'), function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        res.render('index', {
            files: files
        })
    });
}
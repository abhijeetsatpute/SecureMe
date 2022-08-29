const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, 'dec' + '-' + file.originalname);
    }
});

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({storage : fileStorage}).single('file'));

app.get('/', (req, res, next) => {
    fs.readdir(path.join(__dirname, './public/uploads'), function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        res.render('index', {
            files: files
        })
    });
})

app.post('/upload', (req, res, next) => {
    console.log(req.file);
})

app.listen(80, ()=> {
    console.log('✨ App is listening on port 80');
});
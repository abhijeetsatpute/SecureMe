const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const fileOpRoutes = require('./routes/fileOp');
const homeRoutes = require('./routes/home');
const uploadRoutes = require('./routes/upload');

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

app.use(fileOpRoutes);
app.use(homeRoutes);
app.use(uploadRoutes);

app.listen(process.env.PORT || 80, ()=> {
    console.log('✨ App is listening on port 80', this.address().port);
});
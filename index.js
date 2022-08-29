const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(80, ()=> {
    console.log('✨ App is listening on port 80');
});
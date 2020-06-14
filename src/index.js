// import node modules
const express = require('express');
const viewengine = require('ejs-mate');
const path = require('path');

// initialization
const app = express();

// db
require('./database');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', viewengine);
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

// statics files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`))
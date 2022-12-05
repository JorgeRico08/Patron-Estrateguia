const express = require('express');
const morgan = require('morgan');
const { format } = require('timeago.js');

const path = require('path');

// intializations
const app = express();
require('./config/database');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


// Global variables
app.use((req, res, next) => {
    app.locals.format = format;
    next();
});

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});

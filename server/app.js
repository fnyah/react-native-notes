var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
let mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var fetchFromDb = require('./routes/getnote');
var sendToDb = require('./routes/sendnote');
var deleteFromDb = require('./routes/deletenote');

var app = express();
app.use(cors()); // Use this after the variable declaration

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getnote', fetchFromDb);
app.use('/sendNote', sendToDb);
app.use('/deletenote', deleteFromDb); 


let noteDatabase = process.env.NOTE_DATABASE; 
let mongooseServer = process.env.MONGOOSE_SERVER;
mongoose.connect(`mongodb://${mongooseServer}/${noteDatabase}`)
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.error('Database connection error')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

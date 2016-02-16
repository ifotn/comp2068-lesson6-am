var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
// add mongoose for mongodb interaction
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
// add the articles route
var articles = require('./routes/articles');

var app = express();

// db connection
var db = mongoose.connection;

// show an error if connection fails
db.on('error', console.error.bind(console,  'DB Error: '));

=======
// add mongoose
var mongoose = require('mongoose');

// check connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error: '));
>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
db.once('open', function(callback) {
  console.log('Connected to mongodb');
});

<<<<<<< HEAD
// connect
mongoose.connect('mongodb://localhost/test');

=======
// connect with mongoose
// LOCAL
mongoose.connect('mongodb://localhost/test');

// live - mongolab


var routes = require('./routes/index');
var users = require('./routes/users');
// add articles
var articles = require('./routes/articles');

var app = express();

>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
<<<<<<< HEAD
// map requests at /articles to use the routes/articles.js file
app.use('/articles', articles);

=======
app.use('/articles', articles);





>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

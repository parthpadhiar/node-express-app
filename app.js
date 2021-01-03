var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require("ejs");

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user.routes')
var adminRouter = require('./routes/admin.routes')

var app = express();

app.set("view engine", "ejs");

app.use(logger('dev'));
app.use('/uploads',express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use('/', indexRouter);
app.use(userRouter);
app.use(adminRouter)

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(500).json(err);
  res.send(err);
});

module.exports = app;

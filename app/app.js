var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* #nota: Importar session  */
const session = require('express-session');

/* test */

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servicesRouter = require('./routes/services');
var mailRouter = require('./routes/mail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.enable('trust proxy')

/* #nota: Crear middleware de session AQUI */
app.use(session({
  secret: 'myApp',
  resave: false,
  saveUninitialized: true
}));

/* #nota: Crear middleware de locals AQUI */
app.use(function(req, res, next) {
  /* Logica */

  if (req.session.langES != undefined) {
      res.locals.langES = req.session.langES;
  }
  return next();
});

/* #nota: Crear middleware de cookies AQUI */
/* app.use(function(req, res, next) {
if (req.cookies.langES == 'ES') {
    req.session.langES = true;
    return next();
    
} else {
  return next();
}

}); */


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/services', servicesRouter);
app.use('/mail', mailRouter);

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

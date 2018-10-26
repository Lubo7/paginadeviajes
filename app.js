var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Session = require('express-session');
const Flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//configure view partials
let hbs = require('hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
let hbsUtils = require('hbs-utils')(hbs);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/vendors',express.static(`${__dirname}/public/vendors`));


app.use(Session({
    secret: 'travelapp',
    name: 'coockietravel',
    resave: true,
    saveUninitialized: true
}));

app.use(Flash());


app.use('/', indexRouter);

//Gestión de la sesión
app.use(session({
   // Clave con la que se va a firmar el ID de las cookies
   secret: 'clavesecreta',
   // Nombre de la cookie
   name: 'super-secret-cookie-name',
   // Si se debe reguardar el objeto completo o no en cada petición.
   resave: true,
   // Si la sesión se debe guardar al crearla aunque no la modifiquemos.
   saveUninitialized: true
}));

app.use('/users', usersRouter);

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

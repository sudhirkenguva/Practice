let createError = require('http-errors');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let adminModel = require("./db/models").adminModel;
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let bcrypt = require("bcrypt");
let cors = require("cors");
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// BodyParser Middleware
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
var corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
// db connection
let dbConnection = require('./db/db');

const cookieExpirationDate = new Date();
const cookieExpirationDays = 365;
cookieExpirationDate.setDate(cookieExpirationDate.getDate() + cookieExpirationDays);

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
  cookie: {
    httpOnly: true,
    expires: cookieExpirationDate // use expires instead of maxAge
}
}));

// passport setup
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
// app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  console.log("serializeUser called ...........",user);
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  console.log("deserializeUser called ...........",id);
  adminModel.findById(id, function(err, user) {
    cb(err, user);
  });
});

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log(username, password, "username, password in new localstrategy");
       adminModel.findOne({
          username: username
        }, async (err, user)=>{
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          
          let result = await bcrypt.compare(password,user.password);
            if(result == true) {
              return done(null, user);
            } else {
              return done(null, false, {message: 'Invalid password'});
            }
        });
    }
  ));

  // ============================================
  // app.use((req, res, next)=> {
  //   res.setHeader('Access-Control-Allow-Credentials',true);
  //   next();
  // });
app.use('/', indexRouter);
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

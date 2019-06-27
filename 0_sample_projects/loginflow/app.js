var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var app = express();

// mongoose setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String
});
const UserDetails = mongoose.model('usercredentials', UserDetail, 'usercredentials');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport setup: 
passport.use(new localStrategy(function (username, password, done) {
    UserDetails.findOne({ username: username }, (err, userDetails) => {
        if (err) {
            return done(err);
        }
        if (!userDetails) {
            return done(null, false);
        }
        if (userDetails.password != password) {
            return done(null, false)
        }
        return done(null, userDetails);
    });
}));

app.use(passport.initialize());

app.get("/success", (req, res) => {
    res.send("Welcome!!! " + req.query.username);
});

app.get("/error", (req, res) => {
    res.send("error in logging in!");
});

app.post('/localAuth', passport.authenticate('local',{failureMessage:true, failureRedirect:'/error', session:false }), (req, res) => {
    res.redirect('/success?username='+req.user.username);
});


app.use("/", routes);
app.use("/users", users);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

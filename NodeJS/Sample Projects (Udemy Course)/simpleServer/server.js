const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// set the view engine and folder for views
app.set('views',path.join(__dirname+'/views'));
app.set('view engine', 'jade');

// set the location for static assets (css, fonts, images etc)
app.use(express.static(path.join(__dirname+'/public')));

app.listen(3000);
console.log('Server is listening on port 3000');

app.get('/',function(req,res){
    res.render('index',{title:'Welcome'});
});

app.get('/about',function(req,res){
    res.render('about');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.post('/contact/send',function(req,res){
    console.log('Test');
});
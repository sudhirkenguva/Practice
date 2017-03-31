let express = require('express'),
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser'),
    mongoClient = require('mongodb').MongoClient;

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));



app.post('/save_data', (req, res) => {
    let title, year, imdb;
    title = req.body.title;
    year = req.body.year;
    imdb = req.body.imdb;
    mongoClient.connect('mongodb://localhost:27017/video', (req, db) => {
        db.collection('movies').insertOne({ title: title, year: year, imdb: imdb }, (err, res) => {
            res.render('test', { status: res })
        })
    });
});

app.use((req, res) => {
    res.render("movielist");
});
app.listen(1234, () => {
    console.log('app is listening at port 1234');
});
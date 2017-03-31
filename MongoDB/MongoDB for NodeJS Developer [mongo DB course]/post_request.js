let express = require('express'),
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    let fruits = ['Mango', 'Guava', 'Apple', 'Grape', 'Cherry']
    res.render('fruit-list', { fruits: fruits })
});


app.post('/favorite_fruit', (req, res, next) => {
    let fruit = req.body.fruit
    if (fruit !== undefined) {
        res.send('Wow, You like ' + fruit)
    } else {
        next('Please select a fruit')
    }
});

// Error Handler
app.use((req, res) => {
    res.render('error-template', { error: res });
})

let server = app.listen(4000, () => {
    console.log('App is listening @ ' + server.address().port);
})
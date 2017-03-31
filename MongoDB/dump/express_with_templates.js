let express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine("html", engines.nunjucks)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('test', { 'name': 'Sudhir' })
})

app.use((req, res) => {
    res.render('test', { 'name': 'Unknown' })
})

let server = app.listen(1234, () => {
    console.log('Server is listening on port no: 1234')
})
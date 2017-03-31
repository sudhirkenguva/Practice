let express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/:name', (req, res) => {
    let name = req.params.name;
    let getVar1 = req.query.getVar1 || 'Not Found';
    let getVar2 = req.query.getVar2 || 'Not Found';
    res.render('params_and_getVars', { name: name, getVar1: getVar1, getVar2: getVar2 });
});

// for unhandled url
app.use((req, res) => {
    res.sendStatus(404);
})

// server creation
app.listen(1234, () => {
    console.log('server is listening @ port: 1234');
})
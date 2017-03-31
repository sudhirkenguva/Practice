let express = require('express'),
    app = express(),
    // fires for url / (base url)
    app.get('/', (req, res) => {
        res.send('Welcome to express app')
    })

// fires for any umatched url
app.use((req, res) => {
    res.send(req.params)
})

// It returns a http server instance
let server = app.listen(1234, () => {
    let port = server.address().port
    console.log('Server listening on port number ', port)
})
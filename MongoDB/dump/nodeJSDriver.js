let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let url = "mongodb://localhost:27017/video"

MongoClient.connect(url, (err, db) => {
    assert.equal(null, err)
    console.log('Successfully connected to server')

    db.collection('movies').find().toArray((err, docs) => {
        docs.forEach((doc) => {
            console.log(doc.title, 'Released on', doc.year)
        })

        db.close()
    })
    console.log('Find method called')
})
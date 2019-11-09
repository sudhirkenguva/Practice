const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.on('connected',() => {
    console.log('MongoDB connection established');
    dbConnection.collection('users').createIndex({email:1},{unique:true});
    dbConnection.collection('depts').createIndex({name:1},{unique:true});
});

module.exports = dbConnection;
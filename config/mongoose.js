const mongoose = require('mongoose');

// connect
mongoose.connect('mongodb://localhost/codeial_development');

// setting up db

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open', function(){
    console.log('connecting to Database :: MongoDB');
});
module.exports=db;

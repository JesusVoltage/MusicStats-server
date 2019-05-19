const mongoose = require('mongoose');

const URI = 'mongodb://localhost/musicstats'; 

mongoose.connect(URI)
    .then(db => console.log('db conected'))
    .catch(err => console.log(err));

module.exports.mongoose;
const mongoose = require('mongoose');
const config = require('../config');
// Connection
mongoose.connect(config.db, {useMongoClient: true}, err => console.log(!err ? 'Connected to the database!' : 'Error connecting to MongoDB'));

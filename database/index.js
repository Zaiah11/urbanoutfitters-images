const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/images';

const db = mongoose.connect(mongoUri)

module.exports = db;
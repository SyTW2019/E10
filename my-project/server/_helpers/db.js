// const config = require('config.json')
const mongoose = require('mongoose')

// var fs = require('fs');
// var jason = fs.readFileSync('../config.j');
// const jsonBien = JSON.parse(jason);

mongoose.connect('mongodb://localhost/mevn-database', { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = {
    User: require('../registro/reg_model')
};
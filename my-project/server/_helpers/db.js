const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/base-sergio', { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = {
    User: require('../registro/reg_model')
};


// const config = require('config.json')
// var fs = require('fs');
// var jason = fs.readFileSync('../config.j');
// const jsonBien = JSON.parse(jason);
const mongoose = require('mongoose');
// const config = require('../config.json');

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = {
    User: require('../usuario/user_model')
};

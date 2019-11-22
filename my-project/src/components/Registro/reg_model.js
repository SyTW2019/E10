const mongoose = require('mongoose');
const { Schema } = mongoose;

const reg = new Schema({
    email: String,
    password: String,
    username: String,
    grado: String
});

module.exports = mongoose.model('reg', reg);
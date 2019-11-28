const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reg = new Schema({
    email: { type: String, unique: true, required: true },
    password: String,
    username: String,
    grado: String
});

Schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Registro', reg);
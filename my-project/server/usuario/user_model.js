const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reg = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    grado: { type: String, unique: true, required: true }
});

reg.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Registro', reg);
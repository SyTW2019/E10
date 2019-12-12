const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reg = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    grado: { type: String, required: true }
});

reg.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Registro', reg);
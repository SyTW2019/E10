const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grad = new Schema({
    grado: {
        cursos: {type: Number, required: true},
        nombre: {type: String, required: true}
    }
});

grad.set("toJson", {
    virtuals: true,
    versionKey: false,
});

module.exports = mongoose.model("Grados", grad);
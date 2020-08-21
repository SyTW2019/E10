const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reg = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    grado: { type: String, required: true },
    hash: { type: String, required: true },
});

reg.set("toJson", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    },
});

module.exports = mongoose.model("Registro", reg);

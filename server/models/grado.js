var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gradoSchema = new Schema({
    grado: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        numCurso: { type: Number, required: true }
    }
});

gradoSchema.set("toJson", {
    virtuals: true,
    versionKey: false
});

module.exports = mongoose.model("Grado", gradoSchema);
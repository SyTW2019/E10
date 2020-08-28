const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradoSchema = new Schema({
	grado: [
		{
			cursos: {type: Number, required: true},
			nombre: {type: String, required: true},
		},
	],
});

gradoSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
});

module.exports = mongoose.model("gradoschema", gradoSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	idSubject: {type: String, required: true},
	name: {type: String, required: true},
	date: [
		{
			type: String,
		},
	],
});

subjectSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
});

module.exports = mongoose.model("Asignatura", subjectSchema);

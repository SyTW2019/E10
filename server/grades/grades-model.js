const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
	name: {type: String, required: true, unique: true},
	idGrade: {type: String, required: true, unique: true},
	numCurso: {type: Number, required: true},
	courses: [
		{
			idCurso: {type: Number, required: true},
			subject: {
				idSubject: {type: String, unique: true},
				year: {type: Number, required: true},
				name: {type: String, required: true},
				date: [
					{
						type: String,
					},
				],
			},
		},
	],
});

gradeSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
});

module.exports = mongoose.model("Grados", gradeSchema);

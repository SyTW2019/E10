const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
	name: { type: String, required: true, unique: true },
	idGrade: { type: String, required: true, unique: true },
	numCurso: { type: Number, required: true },
	// courses: {
	// 	idCurso: Number },
	// 	subject: [subjects]
	// }],
});

gradeSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
});

module.exports = mongoose.model("Grados", gradeSchema);

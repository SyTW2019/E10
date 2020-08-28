const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Grade = require("../grades/grades-model");

const gradeSchema = new Schema({
	name: String,
	idGrade: Number,
	numCurso: Number,
	// courses: [Course],
});

gradeSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
});

module.exports = mongoose.model("Grados", gradeSchema);

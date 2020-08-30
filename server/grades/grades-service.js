const db = require("../_helpers/db");
const Grade = db.Grade;
const subjService = require("../subjects/subject-services");

module.exports = {
	getAllGrados,
	create,
	update,
	delete: _delete,
	deleteAsign
};

async function getAllGrados() {
	return await Grade.find();
}

async function create(param) {
	if (await Grade.findOne({name: param.name})) {
		console.log("GRADE NAME REPETIDO");
	}

	const grade = new Grade(param);
	await grade.save();
}

async function update(param) {
	console.log(param);
	await Grade.update(
		{"idGrade": param.idGrade},
		{
			$push: {courses: {"idCurso": param.courseSelected, "subject": {"idSubject": param.idSubject, "year": param.year, "name": param.name, "date": param.date}}}
		});
}

async function _delete(id) {
	await Grade.deleteOne({"idGrade": id});
}

async function deleteAsign(id) {
	await Grade.deleteOne({"courses.subject.idSubject": id});
}

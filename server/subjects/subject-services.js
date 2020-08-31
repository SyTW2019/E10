const db = require("../_helpers/db");
const gradesModel = require("../grades/grades-model");
const Subject = db.Subject;

module.exports = {
	create,
	getAll,
	getByIdGrade,
};

async function create(param) {
	if (await Subject.findOne({idSubject: param.idSubject})) {
		throw "Id de asignatura repetido";
	}

	delete param.dateaux;

	const subj = new Subject(param);
	await subj.save();
}

async function getAll() {
	return await Subject.find();
}
async function getByIdGrade(param) {
	return await Subject.find({idGrade: param});
}

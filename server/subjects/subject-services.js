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
		console.log("IDSUBJECT REPETIDO");
	}

	delete param.dateaux;

	console.log("SUBJECT_SERVICE: ", param);

	const subj = new Subject(param);
	await subj.save();

	console.log("MOSTRAMOS COLLECTION: ", await Subject.find());
}

async function getAll() {
	return await Subject.find();
}
async function getByIdGrade(param) {
	return await Subject.find({"idGrade": param});
}

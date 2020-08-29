const db = require("../_helpers/db");
const Grade = db.Grade;

module.exports = {
	getAllGrados,
	create,
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

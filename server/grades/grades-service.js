const db = require("../_helpers/db");
const Grade = db.Grade;

module.exports = {
	getAllGrados,
	create
};

async function getAllGrados() {
	return await Grade.find();
}

async function create(params) {
	if (await Grade.findOne({name: params.name})) {
		console.log("Sergio OLA");
	}

	delete params.curso;

	const grade = new Grade(param);
	await grade.save();
}
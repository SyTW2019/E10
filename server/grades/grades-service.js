const db = require("../_helpers/db");
const Grade = db.Grade;

module.exports = {
	getAllGrados,
};

async function getAllGrados() {
	return await Grade.find();
}

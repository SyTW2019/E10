const db = require("../helpers/db");
const Grado = db.Grado;

module.exports = {
	getAll,
};

async function getAll() {
	console.log("ESTAMOS AQUI");
	return await Grado.find();
}

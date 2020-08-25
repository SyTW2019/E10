const mongoose = require("mongoose");
const config = require("../config.json");
const env = require("node-env-file");
env("./.env");

mongoose
	.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
	.then((db) => console.log("DB conectada en " + config.connectionString))
	.catch((err) => console.error(err));

function cambiarCol(ruta) {
	mongoose.connection.useDb(ruta);
	console.log("Coleccion cambiada a " + ruta);
}

module.exports = {
	cambiarCol,
	User: require("../users/user-model"),
	Grad: require("../grades/grades-model"),
};

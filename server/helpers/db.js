const mongoose = require("mongoose");
const env = require("node-env-file");
env("./.env");

mongoose
	.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
	.then(() => console.log("DB conectada en " + process.env.DB_CONNECTION))
	.catch((err) => console.error(err));

module.exports = {
	mongoose,
	User: require("../users/user-model"),
	Grado: require("../grades/grades-model"),
};

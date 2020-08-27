const mongoose = require("mongoose");
const env = require("node-env-file");
env("./.env");

mongoose.Promise = global.Promise;
mongoose
	.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
	.then(() => console.log("DB conectada en " + process.env.DB_CONNECTION))
	.catch((err) => console.error(err));

module.exports = {
	User: require("../models/user-model"),
	Grado: require("../models/grades-model")
};

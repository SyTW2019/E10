const mongoose = require("mongoose");
const config = require("../config.json")

mongoose
    .connect(config.connectionString, { useNewUrlParser: true })
    .then((db) => console.log("DB conectada en " + config.connectionString))
    .catch((err) => console.error(err));

module.exports = {
	User: require("../users/user-model"),
};

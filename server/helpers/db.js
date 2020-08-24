const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/test", {
		useNewUrlParser: true,
	})
	.then((db) => console.log("DB conectada"))
	.catch((err) => console.error(err));

module.exports = {
	User: require("../users/user-model"),
};

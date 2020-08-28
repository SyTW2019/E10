const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {type: String, required: true},
	name: {type: String, required: true},
	// grado: {type: String, required: true},
	hash: {type: String, required: true},
});

userSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.hash;
	},
});

<<<<<<< HEAD:server/users/user-model.js
module.exports = mongoose.model("Usuarios", userSchema);
=======
module.exports = mongoose.model("userschema", userSchema);
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d:server/models/user-model.js

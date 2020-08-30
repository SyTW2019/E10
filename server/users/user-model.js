const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	isAdmin: {type: Boolean, required: true},
	password: {type: String, required: true},
	name: {type: String, required: true},
	hash: {type: String, required: true},
	universidad: {type: String, required: true},
	calendar: [
		{
			name: String,
			date: Date,
		},
	],
});

userSchema.set("toJson", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.hash;
	},
});

module.exports = mongoose.model("Usuarios", userSchema);

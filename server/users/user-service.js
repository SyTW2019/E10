const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const db = require("../helpers/db");
const User = require("./user-model");

module.exports = {
	authenticate,
	contact,
	getAll,
	getById,
	create,
	update,
	delete: _delete,
};

async function contact({mail, name, issue, msg}) {
	db.cambiarCol("user");
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "empep.business@gmail.com",
			pass: "proyectazo",
		},
	});

	const mailOptions = {
		from: "empep.business@gmail.com",
		to: "empep.business@gmail.com",
		subject: issue,
		text: `Nombre: ${name}\nMail: ${mail}\nMensaje: ${msg}`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email enviado: " + info.response);
			const resp = true;
			return resp;
		}
	});
}

async function authenticate({username, password}) {
	db.cambiarCol("user");
	const user = await User.findOne({
		name: `${username}`,
	});
	if (user && bcrypt.compareSync(password, user.hash)) {
		const userWithoutHash = user.toObject();
		delete userWithoutHash.hash;
		const token = jwt.sign({sub: user._id}, config.secret);
		return {
			userWithoutHash,
			token,
		};
	}
}

async function getAll() {
	db.cambiarCol("user");
	return await User.find().select("-hash");
}

async function getById(id) {
	db.cambiarCol("user");
	return await User.findById(id).select("-hash");
}

//AQUI ESTA EL ERROR
async function create(userParam) {
	db.cambiarCol("user");
	//Validación
	if (
		await User.findOne({
			name: userParam.name,
		})
	) {
		console.log('El nombre de usuario "' + userParam.name + '" está cogido');
	}

	if (userParam.password) {
		userParam.hash = bcrypt.hashSync(userParam.password, 10);
	}

	const user = new User(userParam);
	await user.save();
}

async function update(id, userParam) {
	db.cambiarCol("user");
	const user = await User.findById(id);

	// Validación
	if (!user) throw "Usuario no encontrado";
	if (
		user.username !== userParam.username &&
		(await User.findOne({
			username: userParam.username,
		}))
	) {
		throw 'El usuario "' + userParam.username + '" está cogido';
	}

	if (userParam.password) {
		userParam.hash = bcrypt.hashSync(userParam.password, 10);
	}

	Object.assign(user, userParam);

	await user.save();
}

async function _delete(id) {
	db.cambiarCol("user");
	await User.findByIdAndRemove(id);
}

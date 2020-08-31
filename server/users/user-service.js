const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const db = require("../_helpers/db");
const User = db.User;

module.exports = {
	authenticate,
	contact,
	getAll,
	getById,
	create,
	update,
	addCalendar,
	delete: _delete,
};

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "empep.business@gmail.com",
		pass: "proyectazo",
	},
});

async function contact({mail, name, issue, msg}) {
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
	const user = await User.findOne({
		name: `${username}`,
	});
	if (user && bcrypt.compareSync(password, user.hash)) {
		const userWithoutHash = user.toObject();
		delete userWithoutHash.hash;
		const token = jwt.sign({sub: user._id}, process.env.SECRET);
		return {
			userWithoutHash,
			token,
		};
	}
}

async function getAll() {
	return await User.find().select("-hash");
}

async function getById(id) {
	return await User.findById(id).select("-hash");
}

async function create(userParam) {
	console.log(userParam);
	if (await User.findOne({name: userParam.name})) {
		throw "Usuario no disponible";
	}
	if (await User.findOne({email: userParam.email})) {
		throw "Email ya registrado";
	}

	if (userParam.password) {
		userParam.hash = bcrypt.hashSync(userParam.password, 10);
	}

	const user = new User(userParam);
	await user.save();
	// .then(() => {
	// const mailOptions = {
	// 	from: "empep.business@gmail.com",
	// 	to: userParam.email,
	// 	subject: "Confirmación de registro",
	// 	text: "Perfecto, tu usuario se ha registrado con éxito!",
	// };

	// transporter.sendMail(mailOptions, function (error, info) {
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log("Email enviado: " + info.response);
	// 		const resp = true;
	// 		return resp;
	// 	}
	// });
	// });
}

async function update(id, userParam) {
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

async function addCalendar(param) {
	const userNew = param.userWithoutHash;
	const user = await User.findById(param.userWithoutHash._id);

	if(!user) {
		throw "Usuario no encontrado"
	}

	console.log(userNew, user);
	Object.assign(user.calendar, userNew.calendar);
	await user.save();
}

async function _delete(id) {
	await User.deleteOne({email: id});
}

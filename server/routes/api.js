var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

// Models
var Usuario = require("../models/usuario");
var Grado = require("../models/grado");

// Usuarios
// Autenticar
router.post("/iniciosesion", async function (req, res, next) {
	await Usuario.findOne({name: `${req.body.username}`}, function (err, user) {
		if (user && bcrypt.compareSync(req.body.password, user.hash)) {
			var userWithoutHash = user.toObject();
			delete userWithoutHash.hash;

			var token = jwt.sign({sub: user._id}, process.env.SECRET);

			console.log("if");
            var user = {userWithoutHash, token};
            return res.json(user);
		} else {
			console.log("else");
			return res.status(400).json({message: "Usuario o contraseña incorrecta"});
		}
	});
});

// Registrar
router.post("/registro", async function (req, res, next) {
	if (await Usuario.findOne({name: req.body.name})) {
		console.log("El nombre de usuario ya existe.");
	}

	if (req.body.password) {
		req.body.hash = bcrypt.hashSync(req.body.password, 10);
	}

	const user = new Usuario(req.body);
    await user.save();
    
    return res.json();
});

// Get all
router.get("/", async function (req, res, next) {
	res.json();
	return await Usuario.find().select("-hash");
});

// Get by Id
router.get("/:id", async function (req, res, next) {
	res.json();
	return await Usuario.findById(req.params.id);
});

// Get current
router.get("/current", async function (req, res, next) {
	res.json();
	return await Usuario.findById(req.user.sub);
});

// Contacto
router.post("/contacto", function (req, res, next) {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "empep.business@gmail.com",
			pass: "proyectazo",
		},
	});

	var mailOptions = {
		from: "empep.business@gmail.com",
		to: "empep.business@gmail.com",
		subject: req.body.issue,
		text: `Nombre: ${req.body.name}\nMail: ${req.body.mail}\nMensaje: ${req.body.msg}`,
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
});

// Grado
// router.get("/grado", async function(req, res, next) {
//     await Grado.
// });

module.exports = router;

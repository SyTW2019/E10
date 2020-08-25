const express = require("express");
const routerGrado = express.Router();
const gradeService = require("./grades-service");

routerGrado.post("/grado", hola);

module.exports = routerGrado;

function getGrado(req, res, next) {

	gradeService
		.getAll()
		.then(() => res.json())
		.catch((err) => next(err));
}

function hola(){
	console.log("HOLA");
}

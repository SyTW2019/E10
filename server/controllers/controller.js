const express = require("express");
const router = express.Router();
const userService = require("../services/user-service");
const gradeService = require("../services/grades-service");

// Users
router.post("/iniciosesion", authenticate);
router.post("/registro", register);
router.post("/contacto", contact);
router.get("/", getAll);
router.get("/current", getCurrent);
<<<<<<< HEAD:server/users/user-control.js
router.get("/getUserById/:id", getById);
router.put("/putUserById/:id", update);
router.delete("/deleteUserById/:id");
=======
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id");

//Grado
// router.get("/grado", getGrado);

module.exports = router;
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d:server/controllers/controller.js

// USERS
function contact(req, res, next) {
	userService
		.contact(req.body)
		.then(() => res.json({}))
		.catch((err) => next(err));
}

function authenticate(req, res, next) {
	userService
		.authenticate(req.body)
		.then((user) =>
			user
				? res.json(user)
				: res.status(400).json({
						message: "Usuario o contraseña incorrecta ",
				  })
		)
		.catch((err) => next(err));
}

function register(req, res, next) {
	userService
		.create(req.body)
		.then(() => res.json({}))
		.catch((err) => next(err));
}

function getAll(req, res, next) {
	userService
		.getAll()
		.then(() => res)
		.catch((err) => next(err));
}

function getCurrent(req, res, next) {
	userService
		.getById(req.user.sub)
		.then((user) => (user ? res.json(user) : res.sendStatus(404)))
		.catch((err) => next(err));
}

function getById(req, res, next) {
	userService
		.getById(req.params.id)
		.then((user) => (user ? res.json(user) : res.sendStatus(404)))
		.catch((err) => next(err));
}

function update(req, res, next) {
	userService
		.update(req.params.id, req.body)
		.then(() => res.json({}))
		.catch((err) => next(err));
}

function _delete(req, res, next) {
	userService
		.delete(req.params.id)
		.then(() => res.json({}))
		.catch((err) => next(err));
}

<<<<<<< HEAD:server/users/user-control.js
module.exports = router;
=======
// GRADO
function getGrado(req, res, next) {}
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d:server/controllers/controller.js

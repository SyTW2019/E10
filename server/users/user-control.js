const express = require("express");
const router = express.Router();
const userService = require("./user-service");

router.post("/iniciosesion", authenticate);
router.post("/registro", register);
router.post("/contacto", contact);
router.get("/getAllById", getAll);
router.get("/current", getCurrent);
router.get("/getUserById/:id", getById);
router.put("/putUserById/:id", update);
router.delete("/deleteUserById/:id");

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

module.exports = router;

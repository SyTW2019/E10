var expressJwt = require("express-jwt");
var Usuario = require("../models/usuario");
var env = require("node-env-file");
env("./.env");

module.exports = jwt;

function jwt() {
	var secret = process.env.SECRET;
	return expressJwt({
		secret,
		algorithms: ["HS256"],
		isRevoked,
	}).unless({
		path: [
			//Rutas publicas a las que se puede acceder sin necesidad de un jwt
			"/api/registro",
			"/api/",
			"/api/iniciosesion",
			"/api/contacto",
			"/api/grado",
		],
	});
}

async function isRevoked(req, payload, done) {
	var user = await Usuario.findById(payload.sub);

	if (!user) {
		return done(null, true);
	}

	done();
}

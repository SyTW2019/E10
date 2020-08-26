const expressJwt = require("express-jwt");
const config = require("../config.json");
const userService = require("../services/user-service");
const env = require("node-env-file");
env("./.env");

module.exports = jwt;

function jwt() {
	const secret = process.env.SECRET;
	return expressJwt({
		secret,
		algorithms: ["HS256"],
		isRevoked,
	}).unless({
		path: [
			//Rutas publicas a las que se puede acceder sin necesidad de un jwt
			"/registro",
			"/",
			"/iniciosesion",
			"/contacto",
			"/grado",
		],
	});
}

async function isRevoked(req, payload, done) {
	const user = await userService.getById(payload.sub);

	if (!user) {
		return done(null, true);
	}

	done();
}

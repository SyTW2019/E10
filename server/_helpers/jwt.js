const expressJwt = require("express-jwt");
<<<<<<< HEAD:server/_helpers/jwt.js
const userService = require("../users/user-service");
=======
const userService = require("../services/user-service");
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d:server/helpers/jwt.js
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

const expressJwt = require("express-jwt");
const userService = require("../users/user-service");
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
			"/api/iniciosesion",
			"/api/registro",
			"/api/contacto",
			"peril",
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

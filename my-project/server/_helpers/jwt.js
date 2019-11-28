const expressJwt = require('express-jwt');
const config = require('config.json')
const userService = require('../components/Registro')

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '../../src/components/Home',
            '../../src/component/Registro',
            '../../src/componentes/InicioSesion'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};
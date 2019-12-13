const expressJwt = require('express-jwt');
const userService = require('../usuario/user_service');
const config = require('../config.json');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/registro',
            '/',
            '/iniciosesion'
        ]
    });
};

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

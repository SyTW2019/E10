const expressJwt = require('express-jwt');
const userService = require('../usuario/user_service');

module.exports = jwt;

function jwt() {
    const secret = "Cadena privada que debe ser segura";
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



// const config = require('config.json')
// var fs = require('fs');
// var jason = fs.readFileSync('config.json');
// const jsonBien = JSON.parse(jason);

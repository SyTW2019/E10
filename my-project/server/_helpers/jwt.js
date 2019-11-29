const expressJwt = require('express-jwt');
// const config = require('config.json')
const userService = require('../registro/reg_service');

// var fs = require('fs');
// var jason = fs.readFileSync('config.json');
// const jsonBien = JSON.parse(jason);


module.exports = jwt;

function jwt() {
    const secret = "Estamos mal pero poco a poco se ve la luz y vamos a mejor. ANIMO SEÑORES";
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '../../src/components/Home',
            '../../src/components/Registro',
            '../../src/components/InicioSesion'
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
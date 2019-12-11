// require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// morgan para mostrar por consola las peticiones
app.use(morgan('dev'));

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/registro', require('./usuario/user_controller'));
app.use('/', require('./usuario/user_controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
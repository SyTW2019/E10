// Midlewares
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Helpers
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

// Controllers
const controller = require("./controllers/controller");

// .env
const env = require("node-env-file");
env("./.env");

// Configurando variable express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan("dev"));

app.use(jwt());

app.use(errorHandler);

// Router
app.use("/registro", controller);
app.use("/", controller);
app.use("/inciosesion", controller);
app.use("/contacto", controller);
app.use("/grado", function () {
	console.log("HOLA");
});

app.listen(process.env.PORT, function () {
	console.log("Server listening on port " + process.env.PORT);
});

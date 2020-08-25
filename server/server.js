const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const morgan = require("morgan");
const userControl = require("./users/user-controller");
const env = require("node-env-file");
env("./.env");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// mostrar por consola las peticiones
app.use(morgan("dev"));

app.use(jwt());

app.use("/registro", userControl);
app.use("/", userControl);
app.use("/inciosesion", userControl);
app.use("/contacto", userControl);

app.use(errorHandler);

app.listen(process.env.PORT, function () {
	console.log("Server listening on port " + process.env.PORT);
});

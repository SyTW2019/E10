// Midlewares
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Helpers
<<<<<<< HEAD
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");

// Controllers
const userController = require("./users/user-control");
const gradeController = require("./grades/grades-control");

=======
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

// Controllers
const controller = require("./controllers/controller");

>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
// .env
const env = require("node-env-file");
env("./.env");

<<<<<<< HEAD
// App
=======
// Configurando variable express
>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

app.use(morgan("dev"));

app.use(jwt());

app.use(errorHandler);

// Router
<<<<<<< HEAD
app.use("/registro", userController);
app.use("/", userController);
app.use("/iniciosesion", userController);
app.use("/contacto", userController);

app.use("/grados", gradeController);

// Inicio del servidor
=======
app.use("/registro", controller);
app.use("/", controller);
app.use("/inciosesion", controller);
app.use("/contacto", controller);
app.use("/grado", function () {
	console.log("HOLA");
});

>>>>>>> 2887275ce2a5bc92f7ce4ba224358849b503fe9d
app.listen(process.env.PORT, function () {
	console.log("Server listening on port " + process.env.PORT);
});

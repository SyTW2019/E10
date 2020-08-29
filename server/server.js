// Midlewares
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Helpers
const jwt = require("./_helpers/jwt");
const errorHandler = require("./_helpers/error-handler");

// Controllers
const userController = require("./users/user-control");
const gradeController = require("./grades/grades-control");

// .env
const env = require("node-env-file");
env("./.env");

// App
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

app.use(morgan("dev"));

app.use(jwt());

app.use(errorHandler);

// Router
// app.use("/registro", userController);
app.use("/", userController, gradeController);
// app.use("/)
// app.use("/iniciosesion", userController);
// app.use("/contacto", userController);

//REVISAR ESTO
// app.use("/grados", gradeController);
// app.use("/centigrados", gradeController);

// Inicio del servidor
app.listen(process.env.PORT, function () {
	console.log("Server listening on port " + process.env.PORT);
});

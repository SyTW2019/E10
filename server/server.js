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
const subjectController = require("./subjects/subject-control");

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
app.use("/api", userController, gradeController, subjectController);

// Inicio del servidor
app.listen(process.env.PORT, function () {
	console.log("Server listening on port " + process.env.PORT);
});

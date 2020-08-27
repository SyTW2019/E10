var env = require("node-env-file");
env("./.env");

// Middlewares
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
var jwt = require("./_helpers/jwt");
var errorHandler = require("./_helpers/error-handler");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
	.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
	.then(() => console.log("DB conectada en " + process.env.DB_CONNECTION))
	.catch((err) => console.error(err));

var apiRouter = require("./routes/api");

var app = express();

app.use(cors({ origin: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(jwt());
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "./public")));
app.use("/api", apiRouter);

app.listen(process.env.PORT, function () {
	console.log("Servidor escuchando en el puerto " + process.env.PORT);
});

module.exports = app;

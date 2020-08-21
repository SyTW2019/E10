const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// mostrar por consola las peticiones
app.use(morgan("dev"));

app.use(jwt());

app.use("/registro", require("./users/user-controller"));
app.use("/", require("./users/user-controller"));
app.use("/inciosesion", require("./users/user-controller"));

app.use(errorHandler);

const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
    console.log("Server listening on port " + port);
});

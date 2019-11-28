const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/registro', require('../src/_router/registro'));

// Static files
app.use(express.static(__dirname + '/_static'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log()
    console.log('Server on port', app.get('port'));
});

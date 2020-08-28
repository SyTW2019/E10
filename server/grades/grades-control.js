const gradeService = require("../grades/grades-service");
const express = require("express");
const router = express.Router();

router.get("/grado", getGrado); 

module.exports = router;

function getGrado(req, res, next) {
    console.log("HOLA");
    gradeService
        .getAllGrados()
        .then(() => res.json())
        .catch((err) => next(err));
}
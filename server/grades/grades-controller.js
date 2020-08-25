const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");
const config = require("../config.json");

router.get("/grados", getGrados);

module.exports = router;

function getGrados(req, res, next){
    gradeService
        .getAll()
        .then(() => res.json())
        .catch((err) => next(err)); 
}
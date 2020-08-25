const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");
const db = require("../helpers/db");

router.get("/grados", getGrados);

module.exports = router;

function getGrados(req, res, next) {
	
	gradeService
		.getAll()
		.then(() => res.json())
		.then(() => response)
		.catch((err) => next(err));
}

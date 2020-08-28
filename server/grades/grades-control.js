const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");

router.get("/getGrados", getGrados);

function getGrados(req, res, next) {
	console.log("HOLA");
	gradeService
		.getAllGrados()
		.then(() => res.json())
		.catch((err) => next(err));
}

module.exports = router;

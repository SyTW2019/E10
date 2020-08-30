const express = require("express");
const router = express.Router();
const subjectService = require("./subject-services");

router.get("/getAllSubj", getAll);
router.put("/addAsigns", addAsigns);

module.exports = router;

function addAsigns(req, res, next) {
	subjectService
		.create(req.body)
		.then(() => res.json())
		.catch((err) => next(err));
}

function getAll(req, res, next) {
	subjectService
		.getAll()
		.then(() => res.json())
		.catch((err) => next(err));
}

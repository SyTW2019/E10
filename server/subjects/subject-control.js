const express = require("express");
const router = express.Router();
const subjectService = require("./subject-services");

router.post("/addAsigns", addAsigns);

module.exports = router;

function addAsigns(req, res, next) {
	console.log("SUBJECT_CONTROL: ", req.body);
	subjectService
		.create(req.body)
		.then(() => res.json())
		.catch((err) => next(err));
}

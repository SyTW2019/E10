const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");

router.get("/getGrados", getGrados);
router.post("/addGrados", addGrados);
router.put("/updateGrade", updateGrados);

function getGrados(req, res, next) {
	gradeService
		.getAllGrados()
		.then((grades) => res.json(grades))
		.catch((err) => next(err));
}

function addGrados(req, res, next) {
	gradeService
		.create(req.body)
		.then(() => res.json())
		.catch((err) => next(err));
}

function updateGrados(req, res, next) {
	gradeService
		.update(req.body)
		.then(() => res.json())
		.catch((err) => next(err));
}

module.exports = router;

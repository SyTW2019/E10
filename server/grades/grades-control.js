const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");

router.get("/getGrados", getGrados);
router.post("/addGrados", addGrados);
router.put("/updateGrade", updateGrados);
router.delete("/delGrados/:id", _delete);
router.delete("/delAsigns/:id", deleteAsign);

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

function _delete(req, res, next) {
	gradeService
		.delete(req.params.id)
		.then(() => res.json())
		.catch((err) => next(err));
}

function deleteAsign(req, res, next) {
	gradeService
		.deleteAsign(req.params.id)
		.then(() => res.json())
		.catch((err) => next(err));
}

module.exports = router;

const express = require("express");
const router = express.Router();
const gradeService = require("./grades-service");

//REVISAR ESTO
router.get("/getGrados", getGrados);
router.post("/addGrados", addGrados);

function getGrados(req, res, next) {
	console.log("GETGRADOS");
	gradeService
		.getAllGrados()
		.then((grades) => res.json(grades))
		// .then((grades) => {console.log("RESPUESTA", grades); console.log(res.json(grades))})
		// .then((grades) => console.log(res.json(grades)))
		// .then(() =>	console.log(res.send()))
		// .then((res) => {console.log(res.); res;})
		.catch((err) => next(err));
}

function addGrados(req, res, next) {
	console.log("EY");
	gradeService
		.create(req.body)
		.then(() => res.json())
		.catch((err) => next(err));
}

module.exports = router;

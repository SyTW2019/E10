const config = require("../config.json");
const db = require("../helpers/db")
const Grade = require("./grades-model");
    
module.exports = {
    getAll,
}

async function getAll() {
	db.cambiarCol("grados");
    console.log("ESTAMOS AQUI");

    return await Grade.find();
}
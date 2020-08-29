import {calendarService} from "../services/calendar_service";
import {router} from "../helpers/router";

const gradeSelected = new String(null);
const grades = new Array();

const state = gradeSelected ? {grades, gradeSelected} : {grades: [], gradeSelected};

const actions = {
	// Parte para realizar las consultas del calendario
	async getGrados({dispatch, commit}, param) {
		calendarService.getGradosCursos().then((params) => {
			// console.log("ESTAMOS EN LA LLAMADA", params);
			commit("getGradesSuccess", params);
		});
	},
};

const mutations = {
	getGradesSuccess(state, grados) {
		grados.map((item) => {
			state.grades.push(item);
		});
		state.gradeSelected = true;
		console.log("CAMBIANDO ESTADO: ", state);
	},
};

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
};

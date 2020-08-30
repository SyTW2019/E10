import {calendarService} from "../services/calendar_service";
import {router} from "../helpers/router";

const idGrade = new String();
const grades = new Array();

const state = idGrade ? {grades, idGrade} : {grades: [], idGrade: ""};

const actions = {
	// Parte para realizar las consultas del calendario
	async getGrados({dispatch, commit}, param) {
		calendarService.getGradosCursos().then((params) => {
			commit("getGradesSuccess", params);
		});
	},
};

const mutations = {
	getGradesSuccess(state, grados) {
		grados.map((item) => {
			state.grades.push(item);
		});
		state.idGrade = null;
		// console.log("CAMBIANDO ESTADO: ", state);
	},
};

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
};

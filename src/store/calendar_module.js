import {calendarService} from "../services/calendar_service";
import {router} from "../helpers/router";

const idGrade = new String();
const grades = new Array();

const state = idGrade ? {grades, idGrade} : {grades: [], idGrade: ""};

const actions = {
	// Parte para realizar las consultas del calendario
	getGrados({dispatch, commit}, param) {
		calendarService.getGradosCursos().then((params) => {
			commit("getGradesSuccess", params);
		});
	},
};

const mutations = {
	getGradesSuccess(state, grados) {
		grados.map((item) => {
			if (!state.grades.find((aux) => aux.idGrade === item.idGrade)) {
				console.log("hola");
				state.grades.push(item);
			}
		});

		state.grades.map((aux) => {
			console.log(aux);
		});
		state.idGrade = null;
	},
};

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
};

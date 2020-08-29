import {calendarService} from "../services/calendar_service";
import {router} from "../helpers/router";

const gradeSelected = null;
const grades = [];
const numCursos = new Number(null);
const state = gradeSelected ? {grades, gradeSelected, numCursos} : {grades: [], gradeSelected, numCursos: null}

// state {
// 	grades: [
// 		{ gradeId, gradeName, numCursos, cursos: [{}]}
// 	],
// 	gradeSelected: gradeId,
// 	numCursos: numCursos,
// }

const actions = {
	// Parte para realizar las consultas del calendario
	getGradosCursos({dispatch, commit}, param) {
		calendarService.getGradosCursos()
			.then((params) => {
				console.log("ESTAMOS EN LA LLAMADA", params);
				commit("getGradesSuccess", params);
		});
	},
	getAsignaturas({dispatch, commit}, param) {
		return calendarService.getAsignaturas();
	},
	getExamenes({dispatch, commit}, param) {
		return calendarService.getExamenes();
	},
};

const mutations = {
	getGradesSuccess(state, grados){
		console.log("ESTO ES PARAMS", grados);
		state.grades = grados;
		state.gradeSelected = true;
		state.numCursos = 5;
		console.log(state);
	}
}

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
	grades, 
	// state
};

import { calendarService } from "../services/calendar_service";
import { router } from "../helpers/router";

const gradeSelected = new String(null);
const grades = new Array();
const numCursos = new Number(null); 

const state = gradeSelected
	? { grades, gradeSelected, numCursos }
	: { grades: [], gradeSelected, numCursos: null };


// state {
// 	grades: [
// 		{ gradeId, gradeName, numCursos, cursos: [{}]}
// 	],
// 	gradeSelected: gradeId,
// 	numCursos: numCursos,
// }

const actions = {
	// Parte para realizar las consultas del calendario
	async getGrados({ dispatch, commit }, param) {
		calendarService.getGradosCursos().then((params) => {
			// console.log("ESTAMOS EN LA LLAMADA", params);
			commit("getGradesSuccess", params);
		});
	},
	getAsignaturas({ dispatch, commit }, param) {
		return calendarService.getAsignaturas();
	},
	getExamenes({ dispatch, commit }, param) {
		return calendarService.getExamenes();
	},
};

const mutations = {
	getGradesSuccess(state, grados) {
		// console.log("ESTO ES PARAMS", grados);
		grados.map((item) => {
			state.grades.push(item);
		});
		state.gradeSelected = true;
		state.numCursos = 5;
		console.log("CAMBIANDO ESTADO: ", state);
		// console.log(state);
	},
};

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
};

import { calendarService } from "../services/calendar_service";
import { router } from "../helpers/router";

const actions = {
	// Parte para realizar las consultas del calendario
	getGradosCursos({ dispatch, commit }, param) {
		return calendarService.getGradosCursos();
	},
	getAsignaturas({ dispatch, commit }, param) {
		return calendarService.getAsignaturas();
	},
	getExamenes({ dispatch, commit }, param) {
		return calendarService.getExamenes();
	},
};

export const calendar = {
	namespaced: true,
	actions,
};

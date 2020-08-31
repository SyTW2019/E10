import {adminService} from "../services/admin_service";
import {router} from "../helpers/router";

const refresh = false;

const state = false ? {refresh} : {refresh: false};

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({dispatch, commit}, param) {
		adminService.addGrados(param).then(alert("Grado añadido."));
	},
	addAsigns({dispatch, commit}, param) {
		adminService.addAsigns(param).then(alert("Asignatura añadido."));
	},
	addUsers({dispatch, commit}, param) {
		adminService.addUsers(param).then(alert("Usuario añadido."));
	},
	delGrados({dispatch, commit}, param) {
		adminService.delGrados(param).then(alert("Grado eliminado."));
	},
	delAsigns({dispatch, commit}, param) {
		adminService.delAsigns(param).then(alert("Asignatura elminada."));
	},
	delUsers({dispatch, commit}, param) {
		adminService.delUsers(param).then(alert("Usuario eliminado."));
	},
};

const mutations = {
	needRefresh(state) {
		if (state.refresh) {
			state.refresh = false;
		} else {
			state.refresh = true;
		}
	},
};

export const admin = {
	namespaced: true,
	actions,
	state,
	mutations,
};

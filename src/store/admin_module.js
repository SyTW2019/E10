import {adminService} from "../services/admin_service";
import {router} from "../helpers/router";

const refresh = false;

const state = false ? {refresh} : {refresh: false};

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({dispatch, commit}, param) {
		adminService.addGrados(param).then(
			alert("Peticion enviada.")
			// (grade) => {
			// 	alert("Grado añadido.");
			// },
			// (error) => {
			// 	alert("Error al añadir grado");
			);
	},
	addAsigns({dispatch, commit}, param) {
		adminService.addAsigns(param).then(alert("Peticion enviada."));
	},
	addUsers({dispatch, commit}, param) {
		adminService.addUsers(param).then(alert("Peticion enviada."));
	},
	delGrados({dispatch, commit}, param) {
		adminService.delGrados(param).then(alert("Peticion enviada."));
	},
	delAsigns({dispatch, commit}, param) {
		adminService.delAsigns(param).then(alert("Peticion enviada."));
	},
	delUsers({dispatch, commit}, param) {
		adminService.delUsers(param).then(alert("Peticion enviada."));
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

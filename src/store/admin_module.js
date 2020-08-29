import {adminService} from "../services/admin_service";
import {router} from "../helpers/router";

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({dispatch, commit}, param) {
		return adminService.addGrados(param);
	},
	addAsigns({dispatch, commit}, param) {
		console.log("ADMIN_MODULE: ", param);
		return adminService.addAsigns(param);
	},
	addExams({dispatch, commit}, param) {
		return adminService.addExams();
	},
};

export const admin = {
	namespaced: true,
	actions,
};

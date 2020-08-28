import {adminService} from "../services/admin_service";
import {router} from "../helpers/router";

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({dispatch, commit}, param) {
		return adminService.addGrados();
	},
};

export const calendar = {
	namespaced: true,
	actions,
};

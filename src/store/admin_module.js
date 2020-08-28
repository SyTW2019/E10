import { adminService } from "../services/admin_service";
import { router } from "../helpers/router";

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({ dispatch, commit }, param) {
		return adminService.addGrados();
	},
	addAsigns({ dispatch, commit }, param) {
		return adminService.addAsigns();
	},
	addExams({ dispatch, commit }, param) {
		return adminService.addExams();
	},
};

export const admin = {
	namespaced: true,
	actions,
};

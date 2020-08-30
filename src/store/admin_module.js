import {adminService} from "../services/admin_service";
import {router} from "../helpers/router";

const refresh = false;

const state = false ? {refresh} : {refresh: false};

const actions = {
	// Parte para realizar las consultas del calendario
	addGrados({dispatch, commit}, param) {
		adminService.addGrados(param)
			;
	},
	addAsigns({dispatch, commit}, param) {
		adminService.addAsigns(param);
	},
	addUsers({dispatch, commit}, param) {
		adminService.addUsers(param);
	},
	delGrados({dispatch, commit}, param) {
		adminService.delGrados(param);
	},
	delAsigns({dispatch, commit}, param) {
		adminService.delAsigns(param);
	},
	delUsers({dispatch, commit}, param) {
		adminService.delUsers(param);
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

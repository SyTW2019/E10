// The vuex account module is in charge of the account section of the centralised state store. It contains actions
//  for registering a new user, logging in and logging out of the tutorial application, and contains mutations for
//  each of the lower level state changes involved for each account action.

// The initial logged in state of the user is set by checking if the user is saved in local storage, which keeps
// the user logged in if the browser is refreshed and between browser sessions.

import {userService} from "../services/user_service";
import {router} from "../helpers/router";

const user = JSON.parse(localStorage.getItem("user"));
const state = user ? {status: {loggedIn: true}, user} : {status: {}, user: null};

const actions = {
	login({dispatch, commit}, {email, password}) {
		commit("loginRequest", {email});

		userService.login(email, password).then(
			(user) => {
				commit("loginSuccess", user);
				router.push("/perfil");
			},
			(error) => {
				commit("loginFailure", error);
				dispatch("alert/error", error, {root: true});
			}
		);
	},
	logout({commit}) {
		userService.logout();
		commit("logout");
	},
	register({dispatch, commit}, user) {
		commit("registerRequest", user);

		userService.register(user).then(
			(user) => {
				commit("registerSuccess", user);
				router.push("/iniciosesion");
				setTimeout(() => {
					// display success message after route change completes
					dispatch("alert/success", "Registration successful", {
						root: true,
					});
				});
			},
			(error) => {
				commit("registerFailure", error);
				dispatch("alert/error", error, {
					root: true,
				});
			}
		);
	},
	contact({dispatch, commit}, param) {
		userService.contact(param);
		router.push("/");
	},
	setCalendar({dispatch, commit}, param) {
		param.asignaturas.map((item) => {
			const auxJson = {
				name: item.name,
				date: item.fechas,
			};
			commit("addFecha", auxJson);
		});

		userService.addCalendar(user);
		alert("Se ha creado un calendario.");
		router.push("/perfil");
	},
	clearCalendar({dispatch, commit}) {
		userService.deleteCalendar(user);
		commit("clearCalendar", user);
	},
};

const mutations = {
	loginRequest(state, user) {
		state.status = {loggingIn: true};
		state.user = user;
	},
	loginSuccess(state, user) {
		state.status = {loggedIn: true};
		state.user = user;
	},
	loginFailure(state) {
		state.status = {};
		state.user = null;
	},
	logout(state) {
		state.status = {};
		state.user = null;
	},
	registerRequest(state, user) {
		state.status = {registering: true};
	},
	registerSuccess(state, user) {
		state.status = {};
	},
	registerFailure(state, error) {
		state.status = {};
	},
	addFecha(state, param) {
		state.user.userWithoutHash.calendar.push(param);
	},
	clearCalendar(state, user) {
		state.user.userWithoutHash.calendar = [];
	},
};

export const account = {
	namespaced: true,
	state,
	actions,
	mutations,
};

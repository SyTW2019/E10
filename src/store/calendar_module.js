import {calendarService} from "../services/calendar_service";
import {router} from "../helpers/router";
import { STATES } from "mongoose";

const idGrade = new String();
const grades = new Array();

const state = idGrade ? {grades, idGrade} : {grades: [], idGrade: ""};

const actions = {
	// Parte para realizar las consultas del calendario
	getGrados({dispatch, commit}, param) {
		calendarService.getGradosCursos().then((params) => {
			commit("getGradesSuccess", params);
		});
	},
};

const mutations = {
	getGradesSuccess(state, grados) {
		
		grados.map((item) => {
			if (!state.grades.find((aux) => aux.idGrade === item.idGrade)) {
				state.grades.push(item);
			}
			else{
				item.courses.map((item2) => {
					if(!state.grades.courses.find((aux2) => aux2.idSubject === item.idSubject)) {
						state.grades.courses.push(item2);
					}
						
				})
			}
		});
		
		state.idGrade = null;
	},
};

export const calendar = {
	namespaced: true,
	actions,
	state,
	mutations,
};

// This is the main vuex store file that configures the store with all of the above vuex modules.

import Vue from "vue";
import Vuex from "vuex";

import {alert} from "./alert_module";
import {account} from "./account_module";
import {users} from "./users_module";
import {calendar} from "./calendar_module";
import {admin} from "./admin_module";

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		alert,
		account,
		calendar,
		users,
		admin
	},
});

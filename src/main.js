// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import * as VeeValidate from "vee-validate";
import { router } from "./helpers/router";
import { store } from "./store";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

new Vue({
	el: "#app",
	router,
	store,
	components: { App },
	template: "<App/>",
	render: (h) => h(App),
});

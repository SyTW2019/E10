/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./_router";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
<<<<<<< HEAD
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
=======
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
>>>>>>> 90b8c3d9cb70af4b32a14cb9fa428bb0f66b74dc
});

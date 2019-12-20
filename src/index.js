// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './_helpers/router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import { store } from './_store';

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});

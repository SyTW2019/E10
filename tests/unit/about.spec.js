import AboutUs from "@/components/AboutUs/AboutUs"
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import account from '@/store/account_module'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

test('Correctly loads', () => {
    // render the component
    const wrapper = shallowMount(AboutUs, {localVue})
  
    expect(wrapper.find(".txt").exists()).toBe(true)
})
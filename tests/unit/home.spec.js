import Home from "@/components/Home/Home"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import VueRouter from 'vue-router'
import BootstrapVue, { BButton } from 'bootstrap-vue'
import Vuex from 'vuex'
import account from '@/store/account_module'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

test('Correctly loads', () => {
    const wrapper = shallowMount(Home, {localVue})
  
    expect(wrapper.find('.container').exists()).toBe(true)
})
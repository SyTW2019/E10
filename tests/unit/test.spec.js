import AboutUs from "@/components/AboutUs/AboutUs"
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
const localVue = createLocalVue();

import BootstrapVue from 'bootstrap-vue'
localVue.use(BootstrapVue);

test('Test prueba', () => {
    const wrapper = mount(AboutUs, {localVue})
    console.log(wrapper)
})
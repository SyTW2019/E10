import { mount } from '@vue/test-utils'
import Registro from './components/Registro/Registro.vue'

describe('Registro.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = "no entiendo nada de lo que hago";
    const wrapper = mount(Registro, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

import Contacto from "@/components/Contacto/Contacto"
import { mount, createLocalVue } from "@vue/test-utils"
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import account from '@/store/account_module'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

// describe('Contacto.vue', () => {
//     let actions 
//     let store

//     beforeEach(() => {
//         actions = {
//             actionClick: jest.fn(),
//             actionInput: jest.fn()
//         }
//         store = new Vuex.Store({
//             modules : {
//                 account: {
//                     state,
//                     actions
//                 }
//             }
//         })
//     })

//     it('calls store action "actionClick" when button is clicked', () =>{
//         const wrapper = mount(Contacto, { store, localVue, router })
//         wrapper.find('button').trigger('click')
//         expect(actions.actionClick).toHaveBeenCalled()
//     })
// })

test('Sets email', async () => {
    const wrapper = mount(Contacto, {localVue, router})
    const input = wrapper.find('#input-1')
  
    await input.setValue('my@mail.com')
  
    expect(input.element.value).toBe('my@mail.com')
  })

  test('Sets name', async () => {
    const wrapper = mount(Contacto, {localVue, router})
    const input = wrapper.find('#input-2')
  
    await input.setValue('Name')
  
    expect(input.element.value).toBe('Name')
  })

  test('Sets summary', async () => {
    const wrapper = mount(Contacto, {localVue, router})
    const input = wrapper.find('#input-3')
  
    await input.setValue('Summary')
  
    expect(input.element.value).toBe('Summary')
  })

  test('Sets message', async () => {
    const wrapper = mount(Contacto, {localVue, router})
    const input = wrapper.find('#input-4')
  
    await input.setValue('Message')
  
    expect(input.element.value).toBe('Message')
  })



import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('@/components/Registro/Registro.vue')
    },
    {
      path: '/iniciosesion',
      name: 'iniciosesion',
      component: () => import('@/components/InicioSesion/InicioSesion.vue')
    }
  ]
})

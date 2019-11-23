<<<<<<< HEAD
=======
/* eslint-disable */

>>>>>>> 90b8c3d9cb70af4b32a14cb9fa428bb0f66b74dc
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
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
=======
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: () => import('@/components/HelloWorld.vue')
        },
        {
            path: '/authentication',
            name: 'authentication',
            component: () => import('@/components/Authentication.vue')
        }
    ]
>>>>>>> 90b8c3d9cb70af4b32a14cb9fa428bb0f66b74dc
})

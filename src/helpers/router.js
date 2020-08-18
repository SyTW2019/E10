// The vue router defines all of the routes for the application, and contains a function that runs before
// each route change to prevent unauthenticated users from accessing restricted routes.

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../components/Home/Home.vue"),
		},
		{
			path: "/registro",
			name: "registro",
			component: () => import("../components/Registro/Registro.vue"),
		},
		{
			path: "/iniciosesion",
			name: "iniciosesion",
			component: () => import("../components/InicioSesion/InicioSesion.vue"),
		},
		{
			path: "/calendario",
			name: "calendario",
			component: () => import("../components/Calendario/Calendario.vue"),
		},
		{
			path: "/perfil",
			name: "perfil",
			component: () => import("../components/Perfil/Perfil.vue"),
		},
		{ path: "*", redirect: "/" },
	],
});

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ["/perfil", "/calendario", "/iniciosesion", "/registro", "/"];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem("user");

	if (authRequired && !loggedIn) {
		return next("/iniciosesion");
	}

	next();
});

<template>
	<div id="app">
		<div class="container">
			<b-navbar id="barra_nav" sticky toggleable="lg" type="dark">
				<b-navbar-brand id="logo">
					<router-link to="/">
						<b-img
							:src="require('./assets/logo.png')"
							width="150%"
							rounded
							class="d-inline-block align-top"
							alt="Responsive image"
						></b-img>
					</router-link>
				</b-navbar-brand>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav v-if="account.status.loggedIn">
						<b-nav-item to="/foro">Foro</b-nav-item>
						<b-nav-item to="/calendario">Calendario</b-nav-item>
						<b-nav-item to="/perfil">Perfil</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav v-else>
						<b-nav-item disabled to="/foro">Foro</b-nav-item>
						<b-nav-item disabled to="/calendario">Calendario</b-nav-item>
						<b-nav-item disabled to="/perfil">Perfil</b-nav-item>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown text="Otros" is-nav>
							<b-dropdown-item to="/aboutus">Sobre nosotros</b-dropdown-item>
							<b-dropdown-item to="/ayuda">Ayuda</b-dropdown-item>
							<b-dropdown-item to="/contacto">Contacto</b-dropdown-item>
						</b-nav-item-dropdown>
						<b-nav-item-dropdown text="Lang" right>
							<b-dropdown-item href="#">ES</b-dropdown-item>
							<b-dropdown-item disabled href="#">EN</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown right v-if="account.status.loggedIn">
							<!-- Using 'button-content' slot -->
							<template v-slot:button-content>
								{{ account.user.userWithoutHash.name }}
							</template>
							<b-dropdown-item to="/calendario">Calendario</b-dropdown-item>
							<b-dropdown-item to="/perfil">Perfil de usuario</b-dropdown-item>
							<!-- <b-dropdown-item to="/admin" v-show="isAdmin()">
								Panel de administrador
							</b-dropdown-item> -->
							<b-dropdown-item :click="fuera()" to="/iniciosesion">
								Logout
							</b-dropdown-item>
						</b-nav-item-dropdown>
						<b-nav-item-dropdown right v-else>
							<!-- Using 'button-content' slot -->
							<template v-slot:button-content>Cuenta</template>
							<b-dropdown-item to="/registro">Registrarse</b-dropdown-item>
							<b-dropdown-item to="/iniciosesion">Iniciar sesión</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
			<div>
				<br />
				<router-view />
			</div>
			<!-- Footer -->
			<mdb-footer color="indigo" class="font-small pt-0" id="futer">
				<mdb-container>
					<mdb-row class="pt-5 mb-3 text-center d-flex justify-content-center">
						<mdb-col md="2" class="b-3">
							<h6 class="title font-weight-bold">
								<a>
									<router-link to="/aboutus">
										Sobre nosotros
									</router-link>
								</a>
							</h6>
						</mdb-col>
						<mdb-col md="2" class="b-3">
							<h6 class="title font-weight-bold">
								<a>
									<router-link to="/ayuda">
										Ayuda
									</router-link>
								</a>
							</h6>
						</mdb-col>
						<mdb-col md="2" class="b-3">
							<h6 class="title font-weight-bold">
								<a>
									<router-link to="/contacto">
										Contacto
									</router-link>
								</a>
							</h6>
						</mdb-col>
					</mdb-row>
					<hr class="rgba-white-light" style="margin: 1%;" />
					<mdb-row class="text-center justify-content-center mb-md-0 mb-4">
						<mdb-col md="8" class="mt-5">
							<p style="lineheight: '1.7rem';">
								Proyecto de la asignatura Sistemas y Tecnologías Web. Cursos
								2019/2020. <br />
								<strong>Grado de Ingeniería Informática</strong>.
							</p>
						</mdb-col>
					</mdb-row>
				</mdb-container>
				<div class="footer-copyright text-center py-3">
					<mdb-container fluid>
						&copy; 2020 Copyright:
						<a>
							<router-link to="/">
								Estamos mal pero estaremos peor
							</router-link>
						</a>
					</mdb-container>
				</div>
			</mdb-footer>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import {mdbFooter, mdbContainer, mdbRow, mdbCol} from "mdbvue";

export default {
	name: "App",
	computed: {
		...mapState({
			alert: (state) => state.alert,
			users: (state) => state.users.all,
			account: (state) => state.account,
		}),
	},
	methods: {
		...mapActions({
			clearAlert: "alert/clear",
		}),

		...mapActions("account", ["logout"]),
		fuera() {
			this.logout();
		},
		isAdmin() {
			const is = true;
			if (is) {
				return true;
			} else {
				return false;
			}
		},
	},
	watch: {
		$route(to, from) {
			// clear alert on location change
			this.clearAlert();
		},
	},
	components: {
		mdbFooter,
		mdbContainer,
		mdbRow,
		mdbCol,
	},
};
</script>

<style scoped>
#app {
	font-family: "Montserrat";
	font-weight: 500;
	text-align: center;
	background-color: rgb(92, 6, 139, 0.08);
}
#logo {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;
	background-color: white;
}
#barra_nav {
	background-color: rgb(92, 6, 139);
}
#futer {
	background-color: rgb(92, 6, 139, 0.2);
	border: 3px solid #5c068b;
}
</style>

<template>
	<div class="auth">
		<b-container>
			<b-row class="justify-content-around">
				<b-col sm="8" class="formularios1">
					<!-- Formulario de registro -->
					<h3>Inicio de sesión</h3>
					<b-form @submit.prevent="handleSubmit" @reset="onReset" v-if="show">
						<b-form-group
							id="input-group-login-1"
							label="Usuario:"
							label-for="input-nombre-log"
						>
							<b-form-input
								name="email"
								id="input-nombre-log"
								v-model="user.email"
								required
								placeholder="Introduce tu email aquí"
								class="form-control"
							></b-form-input>
						</b-form-group>
						<b-form-group
							id="input-group-login-2"
							label="Contraseña:"
							label-for="input-login-pw"
						>
							<b-form-input
								name="password"
								id="input-login-pw"
								v-model="user.password"
								type="password"
								required
								placeholder="Introduce tu contraseña"
							></b-form-input>
						</b-form-group>
						<b-button type="submit" variant="primary"> Enviar </b-button>
						<b-button type="reset" variant="danger"> Limpiar </b-button>
						<router-link to="/" class="btn btn-link"> Cancelar </router-link>
					</b-form>
				</b-col>
			</b-row>
			<b-button to="/registro" size="lg" class="boton">Registro</b-button>
			<b-button to="/" size="lg" class="boton">Volver a inicio</b-button>
		</b-container>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
	name: "InicioSesion",
	data() {
		return {
			user: {
				email: "",
				password: "",
				rememberme: null,
			},
			show: true,
		};
	},
	computed: {
		...mapState("account", ["status"]),
	},
	created() {
		// reset login status
		this.logout();
	},
	methods: {
		...mapActions("account", ["login", "logout"]),
		handleSubmit(e) {
			const email = this.user.email;
			const password = this.user.password;
			this.login({email, password});
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.name = "";
			this.form.password = "";
			this.form.checked = null;
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formularios1 {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: rgb(92, 6, 139, 0.1);

	padding-bottom: 15px;
	padding-top: 15px;
}
.boton {
	background-color: rgb(92, 6, 139, 0.8);
	margin: 10px;
	z-index: 1;
	filter: alpha(opacity=85);
	-moz-opacity: 100;
	opacity: 100;
}

.boton:hover {
	opacity: 0.85;
}
</style>

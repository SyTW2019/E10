<template>
	<b-container>
		<h2>Contacto</h2>
		<b-row class="justify-content-around">
			<b-col sm="8" class="formulario">
				<!-- Formulario de registro -->
				<h3>Formulario de contacto</h3>
				<b-form @submit.prevent="handleSubmit" @reset.prevent="onReset" v-if="show">
					<!-- <b-form action="mailto:auxiliarDarthVader@gmail.com" method="post" @reset.prevent="onReset" v-if="show"> -->
					<b-form-group
						id="input-group-1"
						label="Correo electrónico:"
						label-for="input-1"
						description="Será el correo donde nos pongamos en contacto."
					>
						<b-form-input
							id="input-1"
							v-model="form.email"
							type="email"
							required
							placeholder="Introduce el email"
							name="Email"
						></b-form-input>
					</b-form-group>

					<b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
						<b-form-input
							id="input-2"
							v-model="form.nombre"
							required
							placeholder="Nombre"
							name="Nombre"
						></b-form-input>
					</b-form-group>

					<b-form-group
						id="input-group-3"
						label="Asunto:"
						label-for="input-3"
						description="Enuncia brevemente el motivo de tu consulta."
					>
						<b-form-input
							id="input-3"
							v-model="form.asunto"
							required
							placeholder="Asunto"
							name="Asunto"
						></b-form-input>
					</b-form-group>

					<b-form-group id="input-group-4" label="Mensaje:" label-for="input-4">
						<b-form-textarea
							id="input-4"
							v-model="form.mensaje"
							placeholder="Introduce aquí tú mensaje..."
							name="Mensaje"
							required
							rows="3"
							max-rows="6"
						></b-form-textarea>
					</b-form-group>

					<b-button type="submit" variant="primary"> Enviar </b-button>
					<b-button type="reset" variant="danger"> Limpiar </b-button>
					<router-link to="/" class="btn btn-link"> Cancelar </router-link>
				</b-form>
			</b-col>
		</b-row>
		<b-button to="/" size="lg" class="boton">Volver a inicio</b-button>
	</b-container>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
	name: "Contacto",
	data() {
		return {
			form: {
				email: "",
				nombre: "",
				asunto: "",
				mensaje: "",
			},
			submitted: false,
			show: true,
		};
	},
	methods: {
		...mapActions("account", ["contact"]),
		handleSubmit(evt) {
			this.submitted = true;
			if (this.submitted) {
				const JSONmsg = {
					mail: this.form.email,
					name: this.form.nombre,
					issue: this.form.asunto,
					msg: this.form.mensaje,
				};
				this.contact(JSONmsg);
			}
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.email = "";
			this.form.nombre = "";
			this.form.asunto = "";
			this.form.mensaje = "";
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
.formulario {
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
	margin-top: 10px;
	z-index: 1;
	filter: alpha(opacity=85);
	-moz-opacity: 100;
	opacity: 100;
}

.boton:hover {
	opacity: 0.85;
}
</style>

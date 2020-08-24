<template>
	<b-container>
		<b-row class="justify-content-around">
			<b-col sm="8" class="formulario">
				<!-- Formulario de registro -->
				<h3>Formulario de contacto</h3>
				<b-form
					@submit="handleSubmit"
					@reset="onReset"
					v-if="show"
					action="https://formspree.io/mvownypj"
					method="POST"
				>
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

					<b-button type="submit" variant="primary">
						Enviar
					</b-button>
					<b-button type="reset" variant="danger">
						Limpiar
					</b-button>
					<router-link to="/" class="btn btn-link">
						Cancelar
					</router-link>
				</b-form>
				<b-card class="mt-3" header="Form Data Result">
					<pre class="m-0">{{ form }}</pre>
				</b-card>
			</b-col>
		</b-row>
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
		handleSubmit(evt) {
			//evt.preventDefault();
			this.submitted = true;
			//alert(JSON.stringify(this.form));

			if (this.submitted) {
				const _mail = this.form.email;
				const _name = this.form.nombre;
				const _issue = this.form.aunto;
				const _msg = this.form.mensaje;
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
</style>

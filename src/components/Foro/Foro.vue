<template>
	<b-container>
		<h2>Foro</h2>
		<P>
			Cada asignatura tiene su propio foro donde puedes comentar tus opiniones con el resto de
			alumnos de esa misma asignatura
		</P>
		<b-row class="borde" align-v="center" cols="2" v-if="!show3">
			<b-col :methods="funcGradosCursos()" v-if="show1">
				<b-container class="borde">
					<!-- Formulario de obtencion de grado + curso -->
					<b-row class="justify-content-around">
						<b-col md="10" class="calendario">
							<h5>
								Selecciona un grado y curso para acceder a las asignaturas
								disponibles
							</h5>
							<b-form @submit.prevent="handleSubmit1" @reset.prevent="onReset1">
								<b-form-group label="Grado">
									<b-form-select
										v-model="grado.selected_grado"
										:options="grado.options_grado"
									></b-form-select>
								</b-form-group>
								<b-form-group label="Curso" class="justify-content-around">
									<b-form-select
										v-model="curso.selected_curso"
										:options="curso.options_curso"
										multiple
										:select-size="4"
										aria-describedby="select-help-block"
									></b-form-select>
									<b-form-text id="select-help-block">
										Para seleccionar múltiples opciones presione "Ctrl + Click"
										en la opción a elegir.
									</b-form-text>
									<div
										class="mt-3"
										v-if="
											curso.selected_curso.length > 0 && grado.selected_grado
										"
									>
										<strong>Seleccionado:</strong>
										<b-list-group class="justify-content-center" horizontal>
											<b-list-group-item class="vista_curso">
												{{ grado.selected_grado }}
											</b-list-group-item>
											<b-list-group-item
												class="vista_curso"
												v-for="item in curso.selected_curso"
											>
												{{ item }}
											</b-list-group-item>
										</b-list-group>
									</div>
								</b-form-group>
								<b-form-group>
									<b-button
										type="submit"
										variant="primary"
										class="btn btn-primary"
									>
										Obtener Asignaturas
									</b-button>
									<b-button type="reset" variant="danger">Limpiar</b-button>
									<router-link to="/" class="btn btn-link">Cancelar</router-link>
								</b-form-group>
							</b-form>
						</b-col>
					</b-row>
				</b-container>
			</b-col>
			<b-col v-if="show2">
				<b-container class="borde">
					<!-- Formulario de obtencion de las asignaturas -->
					<b-row class="justify-content-around">
						<b-col md="10" class="calendario">
							<h5>
								Escoje una asignatura para acceder al foro de la misma y compartir
								tu opinión
							</h5>
							<b-form @submit.prevent="handleSubmit2" @reset.prevent="onReset2">
								<b-form-group label="Asignaturas" class="justify-content-around">
									<b-form-select
										v-model="asignaturas.selected_asignaturas"
										:options="asignaturas.options_asignaturas"
									></b-form-select>
									<div v-if="asignaturas.selected_asignaturas">
										<strong>Seleccionado:</strong>
										<b-list-group class="justify-content-center" horizontal>
											<b-list-group-item class="vista_curso">
												{{ asignaturas.selected_asignaturas }}
											</b-list-group-item>
										</b-list-group>
									</div>
								</b-form-group>
								<b-form-group>
									<b-button
										type="submit"
										variant="primary"
										class="btn btn-primary"
									>
										Obtener foro
									</b-button>
									<b-button type="reset" variant="danger">Limpiar</b-button>
									<router-link to="/" class="btn btn-link">Cancelar</router-link>
								</b-form-group>
							</b-form>
						</b-col>
					</b-row>
				</b-container>
			</b-col>
		</b-row>
		<b-row class="borde" cols="1" v-if="show3">
			<b-col>
				<h4>
					Foro de <strong>"{{ asignaturas.selected_asignaturas }}"</strong>
				</h4>
				<b-pagination
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					aria-controls="my-table"
					align="center"
					pills
				></b-pagination>
				<p class="mt-3">Pág. actual: {{ currentPage }}</p>

				<b-table
					id="my-table"
					:items="mensajes"
					:per-page="perPage"
					:current-page="currentPage"
					striped
					hover
					foot-clone
					:fields="fields"
				></b-table>

				<p class="mt-3">Pág. actual: {{ currentPage }}</p>
				<b-pagination
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					aria-controls="my-table"
					align="center"
					pills
				></b-pagination>
			</b-col>
			<b-col>
				<b-row align-h="start">
					<b-col md="auto" offset-md="1">
						<p>Mensaje:</p>
					</b-col>
				</b-row>
				<b-form id="formMsg">
					<b-row align-h="start">
						<b-col md="10" offset-md="1">
							<b-form-textarea
								v-model="texto"
								placeholder="Introduce aquí tu mensaje..."
								rows="2"
								max-rows="4"
								aria-describedby="select-help-block"
							></b-form-textarea>
							<b-form-text id="select-help-block">
								Tu mensaje se publicará junto con tu nombre de usuario y tu correo
								electrónico.
							</b-form-text>
							<br />
						</b-col>
					</b-row>
					<b-row align-h="end">
						<b-col md="auto">
							<b-button variant="primary" @click.prevent="publicarMensaje()">
								Publicar
							</b-button>
							<b-button variant="danger" @click.prevent="onReset3()">
								Limpiar
							</b-button>
							<router-link to="/" class="btn btn-link">Cancelar</router-link>
						</b-col>
					</b-row>
				</b-form>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
	name: "Foro",
	data() {
		return {
			texto: "",
			perPage: 10,
			currentPage: 1,
			mensajes: [
				{
					nick_name: "Fred",
					mail: "fred@fred.fred",
					msg: "jajaj",
				},
				{
					nick_name: "goku",
					mail: "fred@fred.fred",
					msg:
						"hola muy buenas a todos aqui willyrex comentandohola muy buenas a todos aqui willyrex comentandohola muy buenas a todos aqui willyrex comentandohola muy buenas a todos aqui willyrex comentando",
				},
				{
					nick_name: "vegeta",
					mail: "fred@fred.fred",
					msg: "hola muy buenas a todos aqui willyrex comentando",
				},
				{
					nick_name: "krilin",
					mail: "fred@fred.fredsuperfred",
					msg: "hola muy buenas a todos aqui willyrex comentando",
				},
			],
			fields: [
				{key: "nick_name", label: "Nombre", tdClass: "nickcol"},
				{key: "mail", label: "Correo", tdClass: "mailcol"},
				{key: "msg", label: "Mensaje", tdClass: "msgcol"},
			],
			grado: {
				selected_grado: null,
				options_grado: [
					{
						value: null,
						text: "Escoja un grado",
					},
					{
						value: "GII",
						text: "Grado en Ingeniería Informática",
					},
					{
						value: "GM",
						text: "Grado en Magisterio",
					},
				],
			},
			curso: {
				selected_curso: [],
				options_curso: [
					{value: "1", text: "1"},
					{value: "2", text: "2"},
				],
			},
			asignaturas: {
				selected_asignaturas: null, // Array reference
				options_asignaturas: [
					{value: null, text: "Seleccione una asignatura"},
					{value: "A", text: "A"},
					{value: "B", text: "B"},
				],
			},
			show1: true,
			show2: false,
			show3: false,
		};
	},
	computed: {
		rows() {
			return this.mensajes.length;
		},
	},
	methods: {
		handleSubmit1(evt) {
			this.funcAsignaturas();
			this.show2 = true;
		},
		onReset1(evt) {
			// Reset our form values
			this.grado.selected_grado = null;
			this.curso.selected_curso = [];
			// Trick to reset/clear native browser form validation state
			this.show1 = false;
			this.show2 = false;
			this.$nextTick(() => {
				this.show1 = true;
			});
		},
		handleSubmit2(evt) {
			this.funcForos();
			this.show3 = true;
			this.show1 = false;
			this.show2 = false;
		},
		onReset2(evt) {
			// Reset our form values
			this.asignaturas.selected_asignaturas = null;
			// Trick to reset/clear native browser form validation state
			this.show2 = false;
			this.onReset1();
		},
		onReset3(evt) {
			// Reset our form values
			this.texto = "";
			// Trick to reset/clear native browser form validation state
			this.show3 = false;
			this.onReset2();
		},
		//publicar el mensaje
		publicarMensaje() {
			if (this.texto.length > 0) {
				console.log(this.texto);
			}

			//publicar mensaje

			this.texto = "";
		},
		//parte de manejo de consultas
		funcGradosCursos() {},
		funcAsignaturas() {},
		funcForos() {},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.borde {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: rgb(92, 6, 139, 0.1);

	padding-bottom: 15px;
	padding-top: 15px;
}

.table {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: white;

	padding-bottom: 15px;
	padding-top: 15px;
}
.nickcol {
	width: 100px;
}
.mailcol {
	width: 100px;
}
.msgcol {
	max-width: 500px;
}
</style>

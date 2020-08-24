<template>
	<b-container>
		<b-row class="justify-content-around">
			<h2>Calendario</h2>
		</b-row>
		<!-- Formulario de obtencion de grado + curso -->
		<b-row class="justify-content-around">
			<b-col md="10" class="calendario">
				<h3>Selección de grado y curso</h3>
				<b-form @submit.prevent="handleSubmit1" @reset.prevent="onReset1" v-if="show">
					<b-form-group label="Grado">
						<b-form-select
							v-model="grado.selected_grado"
							:options="grado.options_grado"
						></b-form-select>
						<div class="mt-3" v-if="grado.selected_grado">
							<strong>Seleccionado:</strong>
							<b-list-group class="justify-content-center" horizontal>
								<b-list-group-item class="vista_curso">
									{{ grado.selected_grado }}
								</b-list-group-item>
							</b-list-group>
						</div>
					</b-form-group>
					<b-form-group label="Curso">
						<b-form-select
							v-model="curso.selected_curso"
							:options="curso.options_curso"
							multiple
							:select-size="4"
							aria-describedby="select-help-block"
						></b-form-select>
						<b-form-text id="select-help-block">
							Para seleccionar múltiples opciones presione "Ctrl + Click" en la opción
							a elegir.
						</b-form-text>
						<div class="mt-3" v-if="curso.selected_curso.length > 0">
							<strong>Seleccionado:</strong>
							<b-list-group class="justify-content-center" horizontal>
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
						<b-button type="submit" variant="primary" class="btn btn-primary">
							Obtener Asignaturas
						</b-button>
						<b-button type="reset" variant="danger">Limpiar</b-button>
						<router-link to="/" class="btn btn-link">Cancelar</router-link>
					</b-form-group>
				</b-form>
				<!-- //ESTO HABRA QUE QUITARLO -->
				<b-card class="mt-3" header="Resultado grado">
					<pre class="m-0">{{ grado.selected_grado }}</pre>
					<pre class="m-0">{{ curso.selected_curso }}</pre>
				</b-card>
			</b-col>
		</b-row>
		<br />
		<!-- Formulario de obtencion de las asignaturas -->
		<b-row class="justify-content-around" v-if="submitted_form_grado">
			<b-col md="10" class="calendario">
				<h3>Selección de asignaturas</h3>
				<b-form @submit.prevent="handleSubmit2" @reset.prevent="onReset2" v-if="show">
					<b-form-group label="Asignaturas">
						<b-form-select
							v-model="asignaturas.selected_asignaturas"
							:options="asignaturas.options_asignaturas"
							multiple
							:select-size="5"
							aria-describedby="select-help-block"
						></b-form-select>
						<b-form-text id="select-help-block">
							Para seleccionar múltiples opciones presione "Ctrl + Click" en la opción
							a elegir.
						</b-form-text>						
                        <div class="mt-3" v-if="asignaturas.selected_asignaturas.length > 0">
                            <strong>Seleccionado:</strong>
                            <b-list-group class="vista_exam">
                                <b-list-group-item class="zero" v-for="item in asignaturas.selected_asignaturas">
                                    {{ item }}
                                </b-list-group-item>
                            </b-list-group>
                        </div>
						</div>
					</b-form-group>
					<b-form-group>
						<b-button type="submit" variant="primary" class="btn btn-primary"
							>Obtener exámenes</b-button
						>
						<b-button type="reset" variant="danger">Limpiar</b-button>
						<router-link to="/" class="btn btn-link">Cancelar</router-link>
					</b-form-group>
				</b-form>
				<!-- //ESTO HABRA QUE QUITARLO -->
				<b-card class="mt-3" header="Resultado asignaturas">
					<pre class="m-0">{{ asignaturas.selected_asignaturas }}</pre>
				</b-card>
			</b-col>
		</b-row>
		<br />
		<!-- Formulario de obtencion de los exámenes -->
		<b-row class="justify-content-around" v-if="submitted_form_asignaturas">
			<b-col md="10" class="calendario">
				<h3>Selección de exámenes</h3>
				<b-form @submit.prevent="handleSubmit3" @reset.prevent="onReset3" v-if="show">
					<b-form-group label="Examenes">
						<b-form-select
							v-model="examenes.selected_examenes"
							:options="examenes.options_examenes"
							multiple
							:select-size="10"
							aria-describedby="select-help-block"
						></b-form-select>
						<b-form-text id="select-help-block">
							Para seleccionar múltiples opciones presione "Ctrl + Click" en la opción
							a elegir.
						</b-form-text>
						<div class="mt-3" v-if="examenes.selected_examenes.length > 0">
							Examenes:
							<b-list-group class="vista_exam">
								<b-list-group-item v-for="item in examenes.selected_examenes">
									{{ item.nombre + ", " + item.fecha + ", " + item.hora }}
								</b-list-group-item>
							</b-list-group>
						</div>
					</b-form-group>
					<b-form-group>
						<b-button type="submit" variant="primary" class="btn btn-primary">
							Obtener calendario
						</b-button>
						<b-button type="reset" variant="danger">Limpiar</b-button>
						<router-link to="/" class="btn btn-link">Cancelar</router-link>
					</b-form-group>
				</b-form>
				<!-- //ESTO HABRA QUE QUITARLO -->
				<b-card class="mt-3" header="Resultado de examenes">
					<pre class="m-0">{{ examenes.selected_examenes }}</pre>
				</b-card>
			</b-col>
		</b-row>
		<br />
		<b-row class="justify-content-around" v-if="submitted_form_examenes">
			<b-col md="10" class="calendario">
				<h3>Resultado</h3>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "Calendario",
	data() {
		return {
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
					{ value: "1", text: "1" },
					{ value: "2", text: "2" },
					{ value: "3", text: "3" },
					{ value: "4", text: "4" },
				],
			},
			asignaturas: {
				selected_asignaturas: [], // Array reference
				options_asignaturas: [
					{ value: "A", text: "A" },
					{ value: "B", text: "B" },
					{ value: "C", text: "C" },
					{ value: "D", text: "D" },
					{ value: "E", text: "E" },
					{ value: "G", text: "G" },
					{ value: "F", text: "F" },
				],
			},
			examenes: {
				selected_examenes: [], // Array reference
				options_examenes: [
					{
						value: {
							nombre: "calculo",
							fecha: "23/01/2020",
							hora: "9:30",
							aula: "1.5",
						},
						text: "CÁLCULO; Conv. Enero, Llam. 1, 23/01/2020 9:30, Aula 1.5",
					},
					{
						value: {
							nombre: "algebra",
							fecha: "25/01/2020",
							hora: "9:30",
							aula: "1.5",
						},
						text: "ÁLGEBRA; Conv. Enero, Llam. 1, 25/01/2020 9:30, Aula 1.5",
					},
					{
						value: {
							nombre: "fisica",
							fecha: "27/01/2020",
							hora: "9:30",
							aula: "1.5",
						},
						text: "FÍSICA; Conv. Enero, Llam. 1, 27/01/2020 9:30, Aula 1.5",
					},
				],
			},
			show: true,
			submitted_form_grado: false,
			submitted_form_asignaturas: false,
			submitted_form_examenes: false,
		};
	},
	methods: {
		handleSubmit1(evt) {
			this.submitted_form_grado = true;
			this.obtener_asignaturas();

			// const resultFormGrado = {
			// 	grado: this.grado.selected_grado,
			// 	curso: this.curso.selected_curso,
			// };
			// console.log(resultFormGrado);
		},
		onReset1(evt) {
			// Reset our form values
			this.submitted_form_grado = false;
            this.submitted_form_asignaturas = false;
            this.submitted_form_examenes = false;
			this.grado.selected_grado = null;
			this.curso.selected_curso = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
		handleSubmit2(evt) {
			this.submitted_form_asignaturas = true;

			// const resultFormAsignaturas = {
			// 	asignaturas: this.asignaturas.selected_asignaturas;
			// };
			// console.log(resultFormAsignaturas);
		},
		onReset2(evt) {
            // Reset our form values
            this.submitted_form_asignaturas = false;
            this.submitted_form_examenes = false;
			this.asignaturas.selected_asignaturas = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
		handleSubmit3(evt) {
			this.submitted_form_examenes = true;

			// const resultFormExamenes = {
			// 	asignaturas: this.examenes.selected_examenes;
			// };
			// console.log(resultFormExamenes);
		},
		onReset3(evt) {
			// Reset our form values
            this.submitted_form_examenes = false;
			this.examenes.selected_examenes = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
		obtener_asignaturas() {
			console.log("grado y curso listos");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	font-weight: normal;
}

.calendario {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: rgb(92, 6, 139, 0.1);

	padding-bottom: 15px;
	padding-top: 15px;
}

.vista_curso {
	display: inline-block;
}

.vista_exam {
	max-width: 500px;
	display: block;
	margin: auto;
}

.zero {
    padding: 0px;
}
</style>

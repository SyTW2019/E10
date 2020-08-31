<template>
	<b-container>
		<b-row class="justify-content-around">
			<h2>Calendario</h2>
		</b-row>
		{{ createOptionsGrades }}
		<!-- Formulario de obtencion de grado + curso -->
		<b-row class="justify-content-around">
			<b-col md="10" class="calendario">
				<h3>Selección de grado y curso</h3>
				<b-form @submit.prevent="createdOptionsAsignaturas" @reset.prevent="onReset1">
					<b-form-group label="Grado">
						<b-form-select
							v-model="grado.selected_grado"
							:options="grado.options_grado"
							@change="createOptionsCourses()"
						></b-form-select>
					</b-form-group>
					<b-form-group label="Curso" class="justify-content-around" v-if="showCourses">
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
					</b-form-group>
					<b-form-group>
						<b-button type="submit" variant="primary" class="btn btn-primary">
							Obtener Asignaturas
						</b-button>
						<b-button type="reset" variant="danger">Limpiar</b-button>
						<router-link to="/" class="btn btn-link">Cancelar</router-link>
					</b-form-group>
				</b-form>
			</b-col>
		</b-row>
		<br />
		<!-- Formulario de obtencion de las asignaturas -->
		<b-row class="justify-content-around" v-if="showAsigns">
			<b-col md="10" class="calendario">
				<h3>Selección de asignaturas</h3>
				<b-form @submit.prevent="createOptionsExamenes" @reset.prevent="onReset2">
					<b-form-group label="Asignaturas" class="justify-content-around">
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
					</b-form-group>
					<b-form-group>
						<b-button type="submit" variant="primary" class="btn btn-primary"
							>Obtener exámenes</b-button
						>
						<b-button type="reset" variant="danger">Limpiar</b-button>
						<router-link to="/" class="btn btn-link">Cancelar</router-link>
					</b-form-group>
				</b-form>
			</b-col>
		</b-row>
		<br />
		<!-- Formulario de obtencion de los exámenes -->
		<b-row class="justify-content-around" v-if="showExams">
			<b-col md="10" class="calendario">
				<h3>Selección de exámenes</h3>
				<b-form @submit.prevent="handleSubmit3" @reset.prevent="onReset3">
					<b-form-group label="Examenes">
						<b-form-select
							v-model="examenes.selected_examenes"
							:options="examenes.options_examenes"
							multiple
							:select-size="8"
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
		<b-row class="justify-content-around" v-if="submitted_form_examenes && show4">
			<b-col md="10" class="calendario">
				<h3>Resultado</h3>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import { mapState, mapActions, mapGetters } from "vuex";
	export default {
		name: "Calendario",
		data() {
			return {
				datos_calendar: [],
				grado: {
					selected_grado: null,
					options_grado: [
						{
							value: null,
							text: "Escoja un grado",
						},
					],
					numCurso: null,
					gradit: null
				},
				curso: {
					selected_curso: [],
					options_curso: [
						{
							value: null,
							text: "Escoja un curso",
						}
					],
				},
				asignaturas: {
					selected_asignaturas: [], // Array reference
					options_asignaturas: [
						{ value: null, text: "Escoja una asignatura" },
					],
				},
				examenes: {
					selected_examenes: [], // Array reference
					options_examenes: [
						{
							value: null,
							text: "Escoja una convocatoria",
						},
					],
				},
				show1: true,
				show2: false,
				show3: false,
				show4: false,
				submitted_form_grado: false,
				submitted_form_asignaturas: false,
				submitted_form_examenes: false,
				showCourses: false,
				showAsigns: false,
				showExams: false
			};
		},
		computed: {
			...mapState(["calendar"]),
			createOptionsGrades() {
				this.grado.options_grado = [{ text: "Escoja un grado", value: null }];
				this.calendar.grades.map((item) => {
					const jsonAux = {
						value: item.idGrade,
						text: item.name,
					};

					this.grado.options_grado.push(jsonAux);
				});
			},
		},
		methods: {
			...mapActions("calendar", ["getGrados"]),
			createOptionsCourses() {
				this.showCourses = true;
				this.grado.options_curso = [{ text: "Escoja un grado", value: null }];
				this.grado.numCurso = this.calendar.grades.find(
					(item) => item.idGrade === this.grado.selected_grado,
				).numCurso;

				for (var i = 1; i <= this.grado.numCurso; i++) {
					const jsonAux = {
						value: i,
						text: i,
					};
					this.curso.options_curso.push(jsonAux);
				}
			},
			createdOptionsAsignaturas() {
				this.gradit = this.calendar.grades.find((item) => 
					item.idGrade === this.grado.selected_grado);

				this.gradit.courses.map((item1) => {
					this.curso.selected_curso.map((item2) => {
						if (item1.idCurso === item2) {
							const auxJson = {
								value: item1.subject.idSubject,
								text: item1.subject.name,
							}
							this.asignaturas.options_asignaturas.push(auxJson);
						}
					})
				})

				this.showAsigns = true;
			},
			createOptionsExamenes() {
				this.examen = this.gradit.courses.find((item1) => {
					this.asignaturas.selected_asignaturas.map((item2) => {
						if( item1.subject.idSubject === item2) {
							item1.subject.date.map((item3) => {
								const auxJson = {
									value: item3,
									text: item1.subject.name + ": " + item3
								}
								this.examenes.options_examenes.push(auxJson);
							})
						} 
					})
				});

				this.showExams = true;
			},
			handleSubmit1(evt) {
				this.submitted_form_grado = true;
				this.handleAsigns();
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
				this.handleExams();
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
			handleAsigns() {},
			handleExams() {},
		},
		beforeMount() {
			this.getGrados();
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

	#password-help-block {
		color: black;
	}
</style>

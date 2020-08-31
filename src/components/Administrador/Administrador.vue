<template>
	<b-container v-show="is_admin">
		<h3>Panel de administrador</h3>
		<p>Nombre del admin: {{ nombreAdmin }}</p>
		<div role="tablist">
			<b-card no-body class="fondo">
				<b-card-header header-tag="header" class="fondo" role="tab">
					<b-button block v-b-toggle.accordion-1 class="boton2">
						AÑADIR O ELIMINAR USUARIOS
					</b-button>
				</b-card-header>
				<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
					<b-card-body>
						<b-container class="borde">
							<b-form @submit.prevent="addUser" @reset.prevent="onReset(1)">
								<b-form-group label="Añadir usuario:">
									<b-form-input
										name="name"
										v-model="users.newUser.name"
										placeholder="Username"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="mail"
										v-model="users.newUser.email"
										placeholder="Mail"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="password"
										v-model="users.newUser.password"
										placeholder="Contraseña"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="universidad"
										v-model="users.newUser.universidad"
										placeholder="Universidad"
										class="form-control"
									></b-form-input>
									<b-form-select
										name="isAdmin"
										v-model="users.newUser.isAdmin"
										:options="users.newUser.adminOpt"
										class="form-control"
									></b-form-select>
								</b-form-group>

								<b-button type="submit" variant="primary"> Añadir </b-button>
								<b-button type="reset" variant="danger"> Limpiar </b-button>
							</b-form>
						</b-container>
						<br />
						<b-container class="borde">
							<b-form @submit.prevent="delUser" @reset.prevent="onReset(2)">
								<b-form-group label="Eliminar usuario:">
									<b-form-input
										name="mail"
										v-model="users.oldUser.mail"
										placeholder="Mail"
										class="form-control"
									></b-form-input>
								</b-form-group>
								<b-button type="submit" variant="primary"> Eliminar </b-button>
								<b-button type="reset" variant="danger"> Limpiar </b-button>
							</b-form>
						</b-container>
					</b-card-body>
				</b-collapse>
			</b-card>
			<b-card no-body class="fondo">
				<b-card-header header-tag="header" class="fondo">
					<b-button block v-b-toggle.accordion-2 class="boton2">
						AÑADIR O ELIMINAR GRADO/ASIGNATURA/EXAMEN
					</b-button>
				</b-card-header>
				<b-collapse id="accordion-2" accordion="my-accordion">
					<b-card-body>
						<b-container>
							<b-container class="borde">
								<b-form @submit.prevent="addGrado" @reset.prevent="onReset(3)">
									<b-form-group label="Añadir grado:">
										<b-form-input
											name="idGrade"
											v-model="grados.newGrado.idGrade"
											placeholder="ID de Grado"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="name"
											v-model="grados.newGrado.name"
											placeholder="Nombre"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="curso"
											v-model="grados.newGrado.numCurso"
											placeholder="Numero de cursos"
											class="form-control"
										></b-form-input>
									</b-form-group>

									<b-button type="submit" variant="primary"> Añadir </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
							<br />
							<b-container class="borde">
								<b-form @submit.prevent="delGrado" @reset.prevent="onReset(4)">
									<b-form-group label="Eliminar grado:">
										<b-form-input
											name="gradoDelete"
											v-model="grados.oldGrado.idGrade"
											placeholder="Id del grado"
											class="form-control"
										></b-form-input>
									</b-form-group>

									<b-button type="submit" variant="primary"> Eliminar </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
							<br />
							<b-container class="borde">
								<b-form @submit.prevent="addAsign" @reset.prevent="onReset(5)">
									<b-form-group label="Añadir asignatura:">
										<b-form-select
											v-model="asigns.newAsign.idGrade"
											:options="asigns.newAsign.options_grades"
											@change="createOptionsCourses()"
										></b-form-select>
										<b-form-select
											v-model="asigns.newAsign.courseSelected"
											:options="asigns.newAsign.options_course"
											v-show="showCourses"
										></b-form-select>
										<b-form-input
											name="idSubject"
											v-model="asigns.newAsign.idSubject"
											placeholder="Id de asignatura"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="year"
											v-model="asigns.newAsign.year"
											placeholder="Año de comienzo de curso"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="name"
											v-model="asigns.newAsign.name"
											placeholder="Nombre de la asignatura"
											class="form-control"
										></b-form-input>
										<b-form @submit.prevent="pushDate()">
											<b-form-input
												label="Añadir llamamiento"
												name="dateaux"
												v-model="asigns.newAsign.dateaux"
												placeholder="Convocatorias. Formato: dd/mm/aaaaThh:mm:ss"
												class="form-control"
											></b-form-input>
											<b-button type="submit" variant="primary">
												Añadir llamamiento
											</b-button>
										</b-form>
									</b-form-group>

									<b-button type="submit" variant="primary"> Añadir </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
							<br />
							<b-container class="borde">
								<b-form @submit.prevent="delAsign" @reset.prevent="onReset(6)">
									<b-form-group label="Eliminar asignatura:">
										<b-form-input
											name="subject"
											v-model="asigns.oldAsign.idSubject"
											placeholder="Id Subject"
											class="form-control"
										></b-form-input>
									</b-form-group>

									<b-button type="submit" variant="primary"> Eliminar </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
						</b-container>
					</b-card-body>
				</b-collapse>
			</b-card>
			<b-card no-body class="fondo">
				<b-card-header header-tag="header" class="fondo" role="tab">
					<b-button block v-b-toggle.accordion-3 class="boton2"> FORO </b-button>
				</b-card-header>
				<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
					<b-card-body>
						<b-container class="borde">
							<b-form @submit.prevent="delMsg" @reset.prevent="onReset(9)">
								<b-form-group label="Borrar mensaje del foro:">
									<b-form-input
										name="id"
										v-model="foro.msg"
										placeholder="ID"
										class="form-control"
									></b-form-input>
								</b-form-group>

								<b-button type="submit" variant="primary"> Eliminar </b-button>
								<b-button type="reset" variant="danger"> Limpiar </b-button>
							</b-form>
						</b-container>
					</b-card-body>
				</b-collapse>
			</b-card>
		</div>
		<router-link to="/" class="btn btn-link"> Cancelar </router-link>
	</b-container>
</template>

<script>
	import { router } from "../../helpers/router";
	import { mapState, mapActions } from "vuex";
	export default {
		name: "Administrador",
		data() {
			return {
				nombreAdmin: "",
				is_admin: true,
				users: {
					newUser: {
						name: "",
						email: "",
						password: "",
						universidad: "",
						isAdmin: null,
						adminOpt: [
							{
								value: null,
								text: "Eliga si es administrador"
							},
							{
								value: false,
								text: "NO es administrador"
							},
							{
								value: true,
								text: "Es administrador"
							},
						]
					},
					oldUser: {
						mail: "",
					},
				},
				grados: {
					newGrado: {
						name: "",
						idGrade: "",
						numCurso: "",
					},
					oldGrado: {
						idGrade: "",
					},
				},
				asigns: {
					newAsign: {
						year: null,
						options_grades: [
							{
								value: null,
								text: "Escoja un grado",
							},
						],
						idGrade: null,
						options_course: [
							{
								value: null,
								text: "Escoja un curso",
							},
						],
						courseSelected: null,
						idSubject: "",
						name: "",
						date: [],
						dateaux: "",
					},
					oldAsign: {
						idSubject: "",
					},
				},
				foro: {
					msg: null,
				},
				showCourses: false,
			};
		},
		computed: {
			...mapState(["calendar"]),
			createOptionsGrades() {
				this.asigns.newAsign.options_grades = [{ text: "Escoja un grado", value: null }];
				this.calendar.grades.map((item) => {
					const jsonAux = {
						value: item.idGrade,
						text: item.name,
					};

					this.asigns.newAsign.options_grades.push(jsonAux);
				});
			},
		},
		methods: {
			...mapActions("admin", [
				"addGrados",
				"addAsigns",
				"delGrados",
				"addUsers",
				"delAsigns",
				"delUsers",
			]),
			...mapActions("calendar", ["getGrados"]),
			createOptionsCourses() {
				this.showCourses = true;
				this.asigns.newAsign.options_course = [{ text: "Escoja un curso", value: null }];
				this.asigns.newAsign.numCurso = this.calendar.grades.find(
					(item) => item.idGrade === this.asigns.newAsign.idGrade,
				).numCurso;
				for (var i = 1; i <= this.asigns.newAsign.numCurso; i++) {
					const jsonAux = {
						value: i,
						text: i,
					};
					this.asigns.newAsign.options_course.push(jsonAux);
				}
			},
			addUser(evt) {
				evt.preventDefault();
				
				this.addUsers(this.users.newUser);
			},
			delUser(evt) {
				evt.preventDefault();

				this.delUsers(this.users.oldUser.mail);
			},
			addGrado(evt) {
				evt.preventDefault();

				this.addGrados(this.grados.newGrado);
			},
			delGrado(evt) {
				evt.preventDefault();

				this.delGrados(this.grados.oldGrado.idGrade);
			},
			addAsign(evt) {
				evt.preventDefault();

				this.addAsigns(this.asigns.newAsign);
			},
			clearAsign() {
				this.asigns.newAsign.idSubject = "";
				this.asigns.newAsign.name = "";
				this.asigns.newAsign.date = [];
			},
			delAsign(evt) {
				evt.preventDefault();

				this.delAsigns(this.asigns.oldAsign.idSubject);
			},
			delMsg(evt) {
				evt.preventDefault();
			},
			onReset(num_form) {
				switch (num_form) {
					case 1:
						this.users.newUser.name = "";
						this.users.newUser.password = "";
						this.users.newUser.mail = "";
						this.users.newUser.grado = "";
						break;
					case 2:
						this.users.oldUser.mail = "";
						break;
					case 3:
						this.grados.newGrado.grado = "";
						this.grados.newGrado.nombre = "";
						this.grados.newGrado.curso.selected = null;
						break;
					case 4:
						this.grados.oldGrado.nombre = "";
						break;
					case 5:
						this.asigns.newAsign.idSubject = "";
						this.asigns.newAsign.name = "";
						this.asigns.newAsign.date = [];
						break;
					case 6:
						this.asigns.oldAsign.nombre = "";
						break;
					case 7:
						this.exams.newExam.nombre = "";
						this.exams.newExam.asign = "";
						this.exams.newExam.fecha = "";
						this.exams.newExam.hora = "";
						this.exams.newExam.convocatoria = "";
						break;
					case 8:
						this.exams.oldExam.nombre = "";
						this.exams.oldExam.fecha = "";
						break;
					case 9:
						this.foro.msg = null;
						break;

					default:
						break;
				}
			},

			pushDate() {
				this.asigns.newAsign.date.push(this.asigns.newAsign.dateaux);
				this.asigns.newAsign.dateaux = "";
			},
		},
		beforeMount() {
			this.getGrados();
		},
	};
</script>

<style scoped>
	.borde {
		border: 3px solid #5c068b;
		border-radius: 8px 8px 8px 8px;
		-moz-border-radius: 8px 8px 8px 8px;
		-webkit-border-radius: 8px 8px 8px 8px;

		background-color: rgba(92, 6, 139, 0.1);

		padding-bottom: 15px;
		padding-top: 15px;

		width: 70%;
	}

	.fondo {
		background-color: rgba(0, 0, 0, 0);
		border: none;
	}

	.boton2 {
		background-color: rgb(92, 6, 139, 0.5);
		margin-top: 10px;
		z-index: 1;
		filter: alpha(opacity=85);
		-moz-opacity: 100;
		opacity: 100;
	}

	.boton2:hover {
		opacity: 0.85;
	}
</style>

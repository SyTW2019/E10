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
										v-model="users.newUser.mail"
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
										name="grade"
										v-model="users.newUser.grado"
										placeholder="Grado"
										class="form-control"
									></b-form-input>
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
										<!-- <b-form-select
											name="curso"
											v-model="grados.newGrado.curso.selected"
											:options="grados.newGrado.curso.options"
											class="form-control"
										></b-form-select> -->
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
											name="nombre"
											v-model="grados.oldGrado.nombre"
											placeholder="Nombre"
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
										<b-form-input
											name="idsubject"
											v-model="asigns.newAsign.idSubject"
											placeholder="id"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="namesubject"
											v-model="asigns.newAsign.name"
											placeholder="nombre"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="fechasubject"
											v-model="asigns.newAsign.date_aux"
											placeholde
											r="fecha"
											class="form-control"
										></b-form-input>
										<b-button :click="pushDate()" variant="primary">
											Añadir
										</b-button>
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
											name="nombre"
											v-model="asigns.oldAsign.nombre"
											placeholder="Nombre"
											class="form-control"
										></b-form-input>
									</b-form-group>

									<b-button type="submit" variant="primary"> Eliminar </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
							<br />
							<b-container class="borde">
								<b-form @submit.prevent="addExam" @reset.prevent="onReset(7)">
									<b-form-group label="Añadir examen:">
										<b-form-input
											name="nombre"
											v-model="exams.newExam.nombre"
											placeholder="Nombre"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="asignatura"
											v-model="exams.newExam.asign"
											placeholder="Asignatura"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="fecha"
											v-model="exams.newExam.fecha"
											placeholder="Fecha"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="hora"
											v-model="exams.newExam.hora"
											placeholder="Hora"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="convocatoria"
											v-model="exams.newExam.convocatoria"
											placeholder="Convocatoria"
											class="form-control"
										></b-form-input>
									</b-form-group>

									<b-button type="submit" variant="primary"> Añadir </b-button>
									<b-button type="reset" variant="danger"> Limpiar </b-button>
								</b-form>
							</b-container>
							<br />
							<b-container class="borde">
								<b-form @submit.prevent="delExam" @reset.prevent="onReset(8)">
									<b-form-group label="Eliminar examen:">
										<b-form-input
											name="nombre"
											v-model="exams.oldExam.nombre"
											placeholder="Nombre"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="fecha"
											v-model="exams.oldExam.fecha"
											placeholder="Fecha"
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
				nombreAdmin: "PeterLanguila",
				is_admin: false,
				users: {
					newUser: {
						name: "",
						mail: "",
						password: "",
						grado: "",
					},
					oldUser: {
						mail: "",
					},
				},
				grados: {
					newGrado: {
						nombre: "",
						grado: "",
						// curso: {
						// 	selected: null,
						// 	options: [
						// 		{ value: null, text: "Numero de Cursos" },
						// 		{ value: "1", text: "1" },
						// 		{ value: "2", text: "2" },
						// 		{ value: "3", text: "3" },
						// 		{ value: "4", text: "4" },
						// 		{ value: "5", text: "5" },
						// 		{ value: "6", text: "6" },
						// ],
						// },
					},
					oldGrado: {
						nombre: "",
					},
				},
				asigns: {
					newAsign: {
						idSubject: "",
						name: "",
						date_aux: "",
						date: [],
					},
					oldAsign: {
						idsubject: "",
					},
				},
				exams: {
					newExam: {
						nombre: "",
						asign: "",
						fecha: "",
						hora: "",
						convocatoria: "",
					},
					oldExam: {
						nombre: "",
						fecha: "",
					},
				},
				foro: {
					msg: null,
				},
			};
		},
		methods: {
			addGrado(evt) {
				evt.preventDefault();

				const grades = this.addGrados(this.grados.newGrado);
				console.log(grades);
			},
			delGrado(evt) {
				evt.preventDefault();
				console.log("eliminar a " + this.grados.oldGrado.nombre);

				this.addGrados(this.grados.newGrado);
			},
			delGrado(evt) {
				evt.preventDefault();
				console.log("eliminar a " + this.grados.oldGrado.nombre);

				this.delGrados(this.grados.oldGrado);
			},
			addAsign(evt) {
				evt.preventDefault();
				console.log(
					"añadir " +
						this.asigns.newAsign.nombre +
						" grado " +
						this.asigns.newAsign.grado +
						" curso " +
						this.asigns.newAsign.curso,
				);

				this.addAsigns(this.asigns.newAsign);
			},
			delAsign(evt) {
				evt.preventDefault();
				console.log("eliminar a " + this.asigns.oldAsign.nombre);

				this.delAsigns(this.asigns.oldAsign);
			},
			addExam(evt) {
				evt.preventDefault();
				console.log(
					"añadir " +
						this.exams.newExam.nombre +
						" asign " +
						this.exams.newExam.asign +
						" fecha " +
						this.exams.newExam.fecha +
						" hora " +
						this.exams.newExam.hora +
						" convocatoria " +
						this.exams.newExam.convocatoria,
				);

				this.addExams(this.exams.newExam);
			},
			delExam(evt) {
				evt.preventDefault();
				console.log(
					"eliminar a " + this.exams.oldExam.nombre + " de " + this.exams.oldExam.fecha,
				);

				this.delExams(this.exams.oldExam);
			},
			delMsg(evt) {
				evt.preventDefault();
				console.log("eliminar el mensaje " + this.foro.msg);
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
						this.asigns.newAsign.grado = "";
						this.asigns.newAsign.nombre = "";
						this.asigns.newAsign.curso = "";
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
				this.asigns.newAsign.date.push(this.asigns.newAsign.date_aux);
				this.asigns.newAsign.date_aux = "";
			},
		},
		beforeMount() {
			//this.comprobarCredenciales();
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

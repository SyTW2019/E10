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
							<b-form @submit.prevent="addUser" @reset="onReset1">
								<b-form-group id="input-group-1" label="Añadir usuario:">
									<b-form-input
										name="name"
										id="input-nombre"
										v-model="users.newUser.name"
										placeholder="Username"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="mail"
										id="input-mail"
										v-model="users.newUser.mail"
										placeholder="Mail"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="password"
										id="input-pass"
										v-model="users.newUser.password"
										placeholder="Contraseña"
										class="form-control"
									></b-form-input>
									<b-form-input
										name="grade"
										id="input-grade"
										v-model="users.newUser.grado"
										placeholder="Grado"
										class="form-control"
									></b-form-input>
								</b-form-group>

								<b-button type="submit" variant="primary">
									Añadir
								</b-button>
								<b-button type="reset" variant="danger">
									Limpiar
								</b-button>
							</b-form>
						</b-container>
						<br />
						<b-container class="borde">
							<b-form @submit.prevent="delUser" @reset="onReset2">
								<b-form-group id="input-group-2" label="Eliminar usuario:">
									<b-form-input
										name="mail"
										id="input-mail-del"
										v-model="users.oldUser.mail"
										placeholder="Mail"
										class="form-control"
									></b-form-input>
								</b-form-group>

								<b-button type="submit" variant="primary">
									Eliminar
								</b-button>
								<b-button type="reset" variant="danger">
									Limpiar
								</b-button>
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
								<b-form @submit.prevent="addGrado" @reset="onReset3">
									<b-form-group label="Añadir grado:">
										<b-form-input
											name="grado"
											id="input-grado"
											v-model="grados.newGrado.grado"
											placeholder="Grado"
											class="form-control"
										></b-form-input>
										<b-form-input
											name="nombre"
											id="input-nombre"
											v-model="grados.newGrado.nombre"
											placeholder="Nombre"
											class="form-control"
										></b-form-input>
										<b-form-select
											name="curso"
											id="input-curso"
											v-model="grados.newGrado.curso.selected"
											:options="grados.newGrado.curso.options"
											class="form-control"
										></b-form-select>
									</b-form-group>

									<b-button type="submit" variant="primary">
										Añadir
									</b-button>
									<b-button type="reset" variant="danger">
										Limpiar
									</b-button>
								</b-form>
							</b-container>
						</b-container>
					</b-card-body>
				</b-collapse>
			</b-card>
		</div>
		<router-link to="/" class="btn btn-link">
			Cancelar
		</router-link>
	</b-container>
</template>

<script>
	import { router } from "../../helpers/router";
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
						curso: {
							selected: null,
							options: [
								{ value: null, text: "Curso" },
								{ value: "1", text: "1" },
								{ value: "2", text: "2" },
								{ value: "3", text: "3" },
								{ value: "4", text: "4" },
								{ value: "5", text: "5" },
							],
						},
					},
				},
			};
		},
		methods: {
			comprobarCredenciales() {
				const admin = true;
				if (admin) {
					this.is_admin = true;
				} else {
					this.is_admin = false;
					alert("Credenciales de admin erroneos");
					router.push("/");
				}
			},
			// MANEJO DEL FORM DE LOS USUARIOS
			addUser(evt) {
				evt.preventDefault();
				console.log(
					"añadir " +
						this.users.newUser.name +
						" mail " +
						this.users.newUser.mail +
						" pass " +
						this.users.newUser.password +
						" grado " +
						this.users.newUser.grado,
				);
			},
			delUser(evt) {
				evt.preventDefault();
				console.log("eliminar a " + this.oldUser.mail);
			},
			addGrado(evt) {
				evt.preventDefault();
				console.log(
					"añadir " +
						this.grados.newGrado.nombre +
						" siglas " +
						this.grados.newGrado.grado +
						" curso " +
						this.grados.newGrado.curso.selected,
				);
			},
			onReset1(evt) {
				evt.preventDefault();
				// Reset our form values
				this.users.newUser.name = "";
				this.users.newUser.password = "";
				this.users.newUser.mail = "";
				this.users.newUser.grado = "";
			},
			onReset2(evt) {
				evt.preventDefault();
				// Reset our form values
				this.users.oldUser.mail = "";
			},
			onReset3(evt) {
				evt.preventDefault();
				// Reset our form values
				this.grados.newGrado.grado = "";
				this.grados.newGrado.curso.selected = null;
			},
		},
		beforeMount() {
			this.comprobarCredenciales();
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

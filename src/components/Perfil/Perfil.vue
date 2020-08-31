<template>
	<b-container>
		<h2>Perfil de Usuario</h2>
		<b-row class="justify-content-center">
			<b-row class="perfil mb-2 justify-content-center" cols="2">
				<b-col md="3" class="fotoperfil">
					<p>Avatar</p>
					<!-- src="https://placekitten.com/500/500" -->
					<b-avatar variant="info" size="12rem" class="border border-dark"></b-avatar>
				</b-col>
				<b-col md="7" class="datosperfil" :method="doPerfil()">
					<div class="casilla">
						<div class="campo">
							<p>Nombre de usuario:</p>
							<p>Correo electrónico:</p>
							<p>Universidad:</p>
						</div>
						<div class="datos">
							<p>
								<strong> {{ perfil.name }} </strong>
							</p>
							<p>
								<strong> {{ perfil.mail }} </strong>
							</p>
							<p>
								<strong>{{ perfil.universidad }} </strong>
							</p>
						</div>
					</div>
				</b-col>
			</b-row>
			<br />
			<b-row class="perfil mb-2" :method="doCalendar()">
				<b-container>
					<h4>Calendario personal</h4>
					<b-row cols="1" class="justify-content-around">
						<b-col md="10">
							<p>Fechas de examenes</p>
						</b-col>
						<b-col class="calendario" md="10" v-show="showCalendar">
							<b-table striped hover :items="calendario.asignaturas"></b-table>
						</b-col>
						<b-col md="10" class="mt-2">
							<b-button variant="primary" @click="limpiarCalendario">
								Limpiar el calendario
							</b-button>
						</b-col>
					</b-row>
				</b-container>
			</b-row>
			<br />
			<b-row class="perfil">
				<b-container>
					<p>Aportaciones al foro</p>
				</b-container>
			</b-row>
		</b-row>
	</b-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
	name: "Perfil",
	data() {
		return {
			perfil: {
				name: "",
				mail: "",
				grado: "",
				universidad: "",
			},
			calendario: {
				nameGrado: "",
				asignaturas: [],
			},
			aportaciones: {},
			showCalendar: false,
		};
	},
	computed: {
		...mapState(["account"]),
	},
	methods: {
		...mapActions("account", ["clearCalendar"]),
		doCalendar() {
			this.calendario.nameGrado = this.account.user.userWithoutHash.calendar.name;

			this.account.user.userWithoutHash.calendar.map((item) => {
				if (!this.calendario.asignaturas.find((aux) => aux.nombre === item.name)) {
					const aux = {
						nombre: item.name,
						fecha: item.date,
					};

					this.calendario.asignaturas.push(aux);
				}
			});

			this.showCalendar = true;
		},
		doPerfil() {
			this.perfil.name = this.account.user.userWithoutHash.name;
			this.perfil.mail = this.account.user.userWithoutHash.email;
			this.perfil.universidad = this.account.user.userWithoutHash.universidad;
		},
		limpiarCalendario() {
			this.clearCalendar();
			this.calendario.asignaturas = [];

			this.showCalendar = false;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	font-weight: normal;
}

.borde {
	border: 3px solid #5c068b;
}
.perfil {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	width: 90%;

	background-color: rgb(92, 6, 139, 0.1);

	padding-bottom: 15px;
	padding-top: 15px;
}

.fotoperfil {
	padding: 7px;
	font-size: 20px;
}

.datosperfil {
	padding: 7px;
	display: flex;
	align-items: center;
}

.campo {
	width: 35%;
	flex-direction: column;
	display: inline-flex;
	align-items: start;
}
.datos {
	width: 65%;
	flex-direction: column;
	display: inline-flex;
	align-items: start;
}
.casilla {
	width: 100%;
}

.calendario {
	background: white;
	border: 1px solid #5c068b;
}
</style>

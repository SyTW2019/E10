<template>
	<b-container>
		<h2>Perfil de Usuario</h2>
		<b-row class="justify-content-center">
			<b-row class="perfil mb-2" cols="2">
				<b-col md="3" class="fotoperfil">
					<p>Avatar</p>
					<b-avatar
						variant="info"
						src="https://placekitten.com/500/500"
						size="12rem"
						class="border border-dark"
					></b-avatar>
				</b-col>
				<b-col md="7" class="datosperfil">
					<div class="casilla">
						<div class="campo">
							<p>
								Nombre de usuario:
							</p>
							<p>
								Correo electrónico:
							</p>
							<p>
								Grado:
							</p>
							<p>
								Universidad:
							</p>
						</div>
						<div class="datos">
							<p>
								<strong> {{ perfil.username }} </strong>
							</p>
							<p>
								<strong> {{ perfil.mail }} </strong>
							</p>
							<p>
								<strong> {{ perfil.grado }} </strong>
							</p>
							<p>
								<strong>{{ perfil.universidad }} </strong>
							</p>
						</div>
					</div>
				</b-col>
			</b-row>
			<br />
			<b-row class="perfil mb-2">
				<b-container>
					<p>Calendario personal</p>
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
export default {
	name: "Perfil",
	data() {
		return {
			perfil: {
				username: "G",
				mail: "A",
				grado: "T",
				universidad: "O",
			},
			calendario: {},
			aportaciones: {},
		};
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
</style>
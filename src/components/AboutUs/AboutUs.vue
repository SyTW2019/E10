<template>
	<b-container>
		<h2>Sobre nosotros</h2>
		<b-row class="borde justify-content-around" cols="2">
			<h4>Como empresa</h4>
		</b-row>
		<br />
		<b-row class="borde justify-content-around" cols="1">
			<h4>Desarrolladores</h4>
			<b-col md="11" class="caja" v-for="items in devs">
				<b-avatar :text="items.iniciales" size="6rem" variant="success"></b-avatar>
				<p class="name">{{ items.nombre }}</p>
				<p class="title">{{ items.title }}</p>
				<hr class="line" />
				<p class="bio">{{ items.bio }}</p>
				<div class="botones">
					<a :href="items.links.twitter" target="_blank">
						<img
							src="../../assets/icons/twitter.png"
							alt="twitter"
							class="boton"
							width="40px"
						/>
					</a>
					<a :href="items.links.linkedin" target="_blank">
						<img
							src="../../assets/icons/linkedin.png"
							alt="linkedin"
							class="boton"
							width="40px"
						/>
					</a>
					<a :href="items.links.github" target="_blank">
						<img
							src="../../assets/icons/github.png"
							alt="github"
							class="boton"
							width="40px"
						/>
					</a>
					<a :href="`mailto:${items.links.mail}`">
						<img
							src="../../assets/icons/mail.png"
							alt="mail"
							class="boton"
							width="40px"
						/>
					</a>
				</div>
			</b-col>
		</b-row>
		<b-button to="/" size="lg" class="boton_volver">Volver a inicio</b-button>
	</b-container>
</template>

<script>
	export default {
		name: "AboutUs",
		data() {
			return {
				devs: {
					sergio: {
						iniciales: "SD",
						nombre: "Sergio Delgado López",
						bio:
							"Estudiante y desarrollador del frontend de este sitio web. Especialista en Vue.js y Bootstrap. Es broma.",
						title: "Grado de Ingeniería Informática, Universidad de la Laguna",
						links: {
							twitter:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							linkedin:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							github: "https://github.com/alu0100893601-Sergio",
							mail: "alu0100893601@ull.edu.es",
						},
					},
					pablo: {
						iniciales: "PG",
						nombre: "Pablo González González",
						bio: "blabla",
						title: "Grado de Ingeniería Informática, Universidad de la Laguna",
						links: {
							twitter:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							linkedin:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							github:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							mail:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
						},
					},
					brito: {
						iniciales: "EB",
						nombre: "Eduardo Ernesto Brito Sánchez",
						bio: "blabla",
						links: {
							twitter:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							linkedin:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							github:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
							mail:
								"https://www.actualidadmascotas.com/wp-content/uploads/2014/11/cat-sleeping-660x330.jpg",
						},
					},
				},
			};
		},
		methods: {
			alertaCorreo(m) {
				console.log("El correo es: " + m);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.caja {
		border: 3px solid #5c068b;
		border-radius: 8px 8px 8px 8px;
		-moz-border-radius: 8px 8px 8px 8px;
		-webkit-border-radius: 8px 8px 8px 8px;

		background-color: rgba(255, 255, 255, 0.9);

		margin: 10px;
		padding-bottom: 15px;
		padding-top: 15px;
		flex-direction: column;
		display: inline-flex;
		align-items: start;
	}

	.borde {
		border: 3px solid #5c068b;
		border-radius: 8px 8px 8px 8px;
		-moz-border-radius: 8px 8px 8px 8px;
		-webkit-border-radius: 8px 8px 8px 8px;

		background-color: rgba(92, 6, 139, 0.1);

		padding-bottom: 15px;
		padding-top: 15px;
	}

	.line {
		border: 1px solid black;
		width: 100%;
	}

	.botones {
		margin-left: 2%;
		flex-direction: row;
		align-items: center;
	}

	.boton {
		margin: 0px 7px 0px;
		z-index: 1;
		filter: alpha(opacity=85);
		-moz-opacity: 100;
		opacity: 100;
	}

	.boton:hover {
		opacity: 0.85;
	}

	.name {
		font-size: 35px;
	}
	.title {
		font-family: "Lucida Console", Monaco, monospace;
		margin-top: -15px;
		color: #2f4f4f;
	}

	.boton_volver {
		background-color: rgb(92, 6, 139, 0.8);
		margin-top: 10px;
		z-index: 1;
		filter: alpha(opacity=85);
		-moz-opacity: 100;
		opacity: 100;
	}

	.boton_volver:hover {
		opacity: 0.85;
	}
</style>

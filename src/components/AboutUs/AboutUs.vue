<template>
	<b-container>
		<h2>Sobre nosotros</h2>
		<b-row class="borde justify-content-around" cols="3">
			<b-col md="12"><h5>Como empresa</h5></b-col>
			<b-col md="12">
				<b-list-group class="lista" horizontal>
					<b-list-group-item class="list-item">Innovación</b-list-group-item>
					<b-list-group-item class="list-item">Diversificación</b-list-group-item>
					<b-list-group-item class="list-item">Eficiencia</b-list-group-item>
					<b-list-group-item class="list-item">Compromiso</b-list-group-item>
					<b-list-group-item class="list-item">Felicidad</b-list-group-item>
				</b-list-group>
			</b-col>
			<b-col md="12"
				><br />
				<hr class="line"
			/></b-col>
			<b-col>
				<b-card no-body class="mb-1 textos">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-1 variant="info" class="boton2">
							Misión
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<b-card-text>
								<p class="txt">
									El objetivo de nuestra empresa es proporcionar soluciones al
									conjunto de alumnos de estudios obligatorios y postobligatorios
									puesto que pensamos que con el avance de las tecnologías y la
									globalización, muchos aspectos de la educación, enseñanza y
									estudio pueden mejorarse para tener un desempeño más productivo,
									dando lugar a personas mejor formadas y con ganas de ampliar sus
									conocimientos constantemente.
								</p>
							</b-card-text>
						</b-card-body>
					</b-collapse>
				</b-card>
			</b-col>
			<b-col>
				<b-card no-body class="mb-1 textos">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-2 variant="info" class="boton2">
							Historia
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<b-card-text>
								<p class="txt">
									Nuestra empresa surje a finales del año 2019, cuando los
									profesores de una asignatura del grado que cursábamos nos
									obligaron a realizar un proyecto de realización de una
									aplicación web partiendo de una idea libre, por lo que se nos
									ocurrió que, construyendo lo que fuera, debía ser algo para
									favorecernos en ese mismo momento como estudiantes.
								</p>
								<p class="txt">
									Luego de que la propia universidad nos comprará nuestra idea por
									unos cuantos miles de euros, hemos seguido desarrolando otros
									proyectos con la misma idea de que nuestros clientes son los
									estudiantes.
								</p>
							</b-card-text>
						</b-card-body>
					</b-collapse>
				</b-card>
			</b-col>
			<b-col>
				<b-card no-body class="mb-1 textos">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-3 variant="info" class="boton2">
							Otros Proyectos
						</b-button>
					</b-card-header>
					<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<b-card-text>
								<p>
									Puede que te suenen otros de nuestro proyectos como:
								</p>
								<div class="iconos">
									<a href="https://slack.com/intl/es-es/" target="_blank">
										<img
											src="../../assets/icons/slack.png"
											alt="github"
											class="boton"
											width="50%"
										/>
									</a>
									<a href="https://www.domestika.org/es" target="_blank">
										<img
											src="../../assets/icons/domestika.png"
											alt="github"
											class="boton"
											width="50%"
										/>
									</a>
									<a href="https://discord.com/" target="_blank">
										<img
											src="../../assets/icons/discord.png"
											alt="github"
											class="boton"
											width="40%"
										/>
									</a>
									<a href="https://evernote.com/intl/es" target="_blank">
										<img
											src="../../assets/icons/evernote.png"
											alt="github"
											class="boton"
											width="40%"
										/>
									</a>
								</div>
							</b-card-text>
						</b-card-body>
					</b-collapse>
				</b-card>
			</b-col>
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
		border: 3px solid rgb(92, 6, 139);
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

	.lista {
		width: 100%;
		justify-content: space-around;
	}

	.list-item {
		background-color: rgba(255, 255, 255, 0);
		border: none;
		font-size: 170%;
		-webkit-box-shadow: 8px 11px 12px 7px rgba(92, 6, 139, 0.64);
		box-shadow: 8px 11px 15px 7px rgba(92, 6, 139, 0.4);
		border: 1px solid #5c068b;
		outline-offset: 3px;
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

	.textos {
		width: 100%;
		background-color: rgba(0, 0, 0, 0);
		border: none;
	}

	.iconos {
		flex-direction: column;
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

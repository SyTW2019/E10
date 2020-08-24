<template>
	<div class="container">
		<b-row>
			<b-col md="8">
				<b-row class="justify-content-around">
					<b-row>
						<b-col>
							<h2>Inicio</h2>
						</b-col>
					</b-row>
					<b-carousel
						class="carrosel"
						id="carousel-1"
						v-model="slide"
						:interval="4000"
						controls
						indicators
						@sliding-start="onSlideStart"
						@sliding-end="onSlideEnd"
					>
						Text slides with image
						<b-carousel-slide
							caption="EMPEP"
							text="Prueba a organizar tu calendario de exámenes y entregas para aprovechar tú tiempo al máximo"
							img-src="https://www.ui1.es/sites/default/files/blog/images/como-estudiar.jpg"
						></b-carousel-slide>

						<b-carousel-slide
							text="Con nuestros algoritmos podrás encontrar la mejor manera de colocar tús exámenes en función de su dificultad"
							img-src="https://www.elidealgallego.com/media/idealgallego/images/2019/01/01/2019010117344661029.jpg"
						></b-carousel-slide>

						<b-carousel-slide
							text="Nuestro objetivo es ayudar, porque todos estamos igual de jodidos"
							img-src="https://image.freepik.com/foto-gratis/vista-superior-escritorio-trabajo-cuaderno-abierto-blanco_1163-2581.jpg"
						></b-carousel-slide>
					</b-carousel>
				</b-row>
				<b-row align-h="center">
					<b-col md="5" class="cartas">
						<b-card title="Objetivo 🎯">
							<b-card-text>
								Facilitar la organización del calendario de exámenes para
								los alumnos de todos los grados, puesto que creemos que la
								universidad no proporciona un servicio similar y
								probablemente sería algo muy favorable.
							</b-card-text>
						</b-card>
					</b-col>

					<b-col md="5" class="cartas">
						<b-card
							title="Sobre nosotros"
							sub-title="Equipo 10 de SyTW 👦🏻 👦🏽 🧑‍ "
						>
							<b-card-text>
								Como alumnos ya veteranos en el grado hemos pensado en
								intentar ayudar a nuestros compañeros con una herramienta
								de gestión de exámenes.
							</b-card-text>

							<router-link to="/aboutus" class="card-link">
								Más sobre nosotros
							</router-link>
						</b-card>
					</b-col>
				</b-row>
			</b-col>
			<b-col md="4" class="fondo">
				<b-col class="botones">
					<b-row cols="1">
						<b-col>
							<p class="caption">
								<strong>¿Te interesa? Únete a nosotros</strong>
							</p>
						</b-col>
						<b-col>
							<b-button class="boton" size="lg" to="/registro">
								Únete a nosotros
							</b-button>
						</b-col>
					</b-row>
					<br />
					<br />
					<b-row cols="1">
						<b-col>
							<p class="caption">
								<strong>¿Ya tienes cuenta?</strong>
							</p>
						</b-col>
						<b-col>
							<b-button class="boton" size="lg" to="/iniciosesion">
								Iniciar sesión
							</b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			slide: 0,
			sliding: null,
		};
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true;
		},
		onSlideEnd(slide) {
			this.sliding = false;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	font-weight: normal;
}

.cartas {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: rgb(92, 6, 139, 0.1);
	margin: 1%;
	padding-bottom: 15px;
	padding-top: 15px;
}

.fondo {
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(~@/assets/fondo.png);
	background-repeat: no-repeat;
	background-size: 1000px;
	z-index: 1;
}

.botones {
	z-index: 2;
}

.boton {
	background-color: rgb(92, 6, 139, 0.8);
	margin-top: 0%;
	margin: 5%;
	z-index: 1;
	filter: alpha(opacity=85);
	-moz-opacity: 100;
	opacity: 100;
}

.boton:hover {
	opacity: 0.85;
}

.title {
	float: left;
}

.carrosel {
	border: 3px solid #5c068b;
	border-radius: 8px 8px 8px 8px;
	-moz-border-radius: 8px 8px 8px 8px;
	-webkit-border-radius: 8px 8px 8px 8px;

	background-color: rgb(92, 6, 139, 0.1);

	margin: 1%;
	padding: 1%;

	font-size: 23px;
	text-shadow: 3px 3px 3px black;
	width: 93%;
}

.caption {
	border: 3px solid darkgrey;
	background-color: rgba(255, 255, 255, 0.75);

	padding: 5px;
}
</style>

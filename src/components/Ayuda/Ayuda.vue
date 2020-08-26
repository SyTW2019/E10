<template>
	<b-container>
		<h2>Ayuda</h2>
		<b-container class="borde">
			<h5><strong>Cómo usar el calendario</strong></h5>
			<b-row cols="2" class="justify-content-center">
				<b-col md="6" class="image">
					<!-- <img src="../../assets/img_ayuda/ayuda1.png" width="100%" alt="ayuda 1" /> -->
				</b-col>
				<b-col md="5" class="text">
					En primer lugar se tiene que seleccionar el grado y el curso, de los
					disponibles, para posteriormente pasar a seleccionar las asignaturas. Luego
					simplemente se ha de presionar en <strong>obtener asignaturas</strong>, en su
					defecto si queremos corregir los campos, se ha de presionar en
					<strong>limpiar</strong>.
				</b-col>
				<b-col md="6" class="image">
					<!-- <img src="../../assets/img_ayuda/ayuda2.png" width="100%" alt="ayuda 2" /> -->
				</b-col>
				<b-col md="5" class="text">
					blabla.
				</b-col>
				<b-col md="6" class="image">
					<!-- <img src="'../../assets/img_ayuda/ayuda3.png'" width="100%" alt="ayuda 3" /> -->
				</b-col>
				<b-col md="5" class="text">
					blabla.
				</b-col>
			</b-row>
		</b-container>
		<br />
		<b-container class="borde">
			<h5><strong>Cómo usar el foro</strong></h5>
			<b-row cols="2" class="justify-content-center">
				<b-col md="5" class="text">
					blabla.
				</b-col>
				<b-col md="6" class="image">
					<!-- <img src="../../assets/img_ayuda/ayuda4.png" width="100%" alt="ayuda 4" /> -->
				</b-col>
				<b-col md="5" class="text">
					blabla.
				</b-col>
				<b-col md="6" class="image">
					<!-- <img src="../../assets/img_ayuda/ayuda5.png" width="100%" alt="ayuda 5" /> -->
				</b-col>
				<b-col md="5" class="text">
					blabla.
				</b-col>
				<b-col md="6" class="image">
					<!-- <img src="'../../assets/img_ayuda/ayuda5.png'" width="100%" alt="ayuda 6" /> -->
				</b-col>
			</b-row>
		</b-container>
	</b-container>
</template>

<script>
	export default {
		name: "Ayuda",
		data() {
			return {
				imagenes: {
					ayuda1: "@/assets/img_ayuda/ayuda1.png",
					ayuda2: "@/assets/img_ayuda/ayuda2.png",
					ayuda3: "@/assets/img_ayuda/ayuda3.png",
					ayuda4: "@/assets/img_ayuda/ayuda4.png",
					ayuda5: "@/assets/img_ayuda/ayuda5.png",
					ayuda6: "@/assets/img_ayuda/ayuda6.png",
				},
			};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h5 {
		margin-left: 10px;
		text-decoration: underline;
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

	.image {
		border: 5px solid rgba(92, 6, 139, 0.2);
		margin-top: 2px;
		margin-bottom: 2px;
		margin-right: 2px;
	}

	.text {
		border: 5px solid rgba(92, 6, 139, 0.2);
		margin-top: 2px;
		margin-bottom: 2px;
		margin-left: 2px;
	}
</style>

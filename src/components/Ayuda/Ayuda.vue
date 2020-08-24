<template>
	<b-container>
		<h2>Ayuda</h2>
		<b-row class="borde">
			<h5><strong>Cómo usar el foro</strong></h5>
		</b-row>
		<br />
		<b-row class="borde">
			<h5><strong>Cómo usar el calendario</strong></h5>
			<b-row cols="2">
				<b-col sm="6" class="image">
					<img :src="imagenes.ayuda1" alt="Imagen ayuda 1" />
				</b-col>
				<b-col sm="6" class="text"> </b-col>
				<b-col sm="6"></b-col>
				<b-col sm="6"></b-col>
				<b-col sm="6"></b-col>
				<b-col sm="6"></b-col>
			</b-row>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "Ayuda",
	data() {
		return {
			imagenes: {
				ayuda1: "src/assets/img_ayuda/ayuda1flechas.png",
				ayuda2: "src/assets/img_ayuda/ayuda2flechas.png",
				ayuda3: "src/assets/img_ayuda/ayuda3flechas.png",
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

	background-color: rgb(92, 6, 139, 0.1);

	padding-bottom: 15px;
	padding-top: 15px;
}

.image {
}

.text {
}
</style>

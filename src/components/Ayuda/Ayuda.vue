<template>
	<b-container>
		<h2>Ayuda</h2>
		<b-container class="borde">
			<h4>
				<strong
					>Cómo usar el
					<router-link to="/calendario">
						calendario
					</router-link>
				</strong>
			</h4>
			<b-row cols="2" class="justify-content-center">
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/calendflechas1.png"
						width="100%"
						class="png"
						alt="ayuda 1"
					/>
				</b-col>
				<b-col md="5" class="text">
					<p>
						En primer lugar se tiene que seleccionar el grado y el curso, de los
						disponibles, para posteriormente pasar a seleccionar las asignaturas. Luego
						simplemente se ha de presionar en <strong>obtener asignaturas</strong>, en
						su defecto si queremos corregir los campos, se ha de presionar en
						<strong>limpiar</strong>. En los campos de multiselección es necesario
						pulsar la combinación <strong>"Ctrl+Click"</strong>, o si se usa OS X,
						<strong>"cmd+Click"</strong>.
					</p>
				</b-col>
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/calendflechas2.png"
						width="100%"
						class="png"
						alt="ayuda 2"
					/>
				</b-col>
				<b-col md="5" class="text">
					<p>
						Después de elegir las dos opciones previas, ahora se muestran las
						asignaturas que cumplen con las mismas. Como cada asignatura tiene sus
						propios examenes, aquí también es necesario seleccionar aquellas de las que
						queremos ver los exámenes. Nótese que es un campo multiselección.
					</p>
				</b-col>
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/calendflechas3.png"
						width="90%"
						class="png"
						alt="ayuda 3"
					/>
				</b-col>
				<b-col md="5" class="text">
					<p>
						Por último simplemente se ha de elegir aquellos exámenes que se desea añadir
						al calendario y presionar el botón <strong>"Obtener calendario"</strong>.
					</p>
				</b-col>
			</b-row>
		</b-container>
		<br />
		<b-container class="borde">
			<h4>
				<strong
					>Cómo usar el
					<router-link to="/calendario">
						foro
					</router-link></strong
				>
			</h4>
			<b-row cols="2" class="justify-content-center">
				<b-col md="5" class="text">
					<p>
						En primer lugar se tiene que seleccionar el grado y el curso, de los
						disponibles, para posteriormente pasar a seleccionar el foro de la
						asignatura que se desea. Para confirmar la selección presionar
						<strong>"Obtener asignaturas"</strong>, si se quiere eliminar,
						<strong>"Limpiar"</strong>.
					</p>
				</b-col>
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/foroflechas1.png"
						class="png"
						width="80%"
						alt="ayuda 4"
					/>
				</b-col>
				<b-col md="5" class="text">
					<p>
						Como cada asignatura tiene su propio foro, ahora simplemente basta con
						elegir aquella en la que se quiere ver los mensajes o publicar comentarios.
						Presionar <strong>"Obtener foro"</strong> para dirigirse al mismo.
					</p>
				</b-col>
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/foroflechas2.png"
						class="png"
						width="90%"
						alt="ayuda 5"
					/>
				</b-col>
				<b-col md="5" class="text">
					<p>
						Una vez dentro del propio foro se puede navegar por todos los mensajes
						introducidos por los demas usurios dentro de la misma asignatura
						(establecidos en orden cronológico). Por otro otro lado, para publicar un
						mensaje basta con introducirlos y pulsar <strong>"Enviar"</strong>
					</p>
				</b-col>
				<b-col md="6" class="image">
					<img
						src="../../assets/img_ayuda/foroflechas3.png"
						class="png"
						width="100%"
						alt="ayuda 6"
					/>
				</b-col>
			</b-row>
		</b-container>
		<b-container>
			<b-button to="/" size="lg" class="boton">Volver a inicio</b-button>
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
h4 {
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
	margin: 2px;
}

.png {
	border: 2px solid rgba(0, 0, 0, 0.9);
}

.text {
	display: flex;
	justify-content: center;
	align-items: center;
}

p {
	border: 3px solid rgba(92, 6, 139, 0.4);
	background-color: white;
	margin: 2px;
	padding: 5px;
	text-align: justify;
	text-indent: 7%;
}

.boton {
	background-color: rgb(92, 6, 139, 0.8);
	margin-top: 10px;
	z-index: 1;
	filter: alpha(opacity=85);
	-moz-opacity: 100;
	opacity: 100;
}

.boton:hover {
	opacity: 0.85;
}
</style>

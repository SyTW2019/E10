<template>
  <div class="container">
    <h2>Inicio</h2>
    <b-row class="justify-content-around">
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
        <!-- Text slides with image -->
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

    <b-row class="justify-content-around">
      <b-col>
        <b-button class="boton" size="lg">Inicia sesión</b-button>
        <b-button class="boton" size="lg">Regístrate</b-button>
      </b-col>
    </b-row>

    <b-row class="justify-content-around">
      <b-col sm="5" class="cartas">
        <b-card title="Objetivo" sub-title="-.-">
          <b-card-text>
            Some quick example text to build on the
            <em>card title</em> and make up the bulk of the card's content.
          </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </b-col>

      <b-col sm="5" class="cartas">
        <b-card title="Sobre nosotros" sub-title="Grupo 10 de SyTW">
          <b-card-text>
            Some quick example text to build on the
            <em>card title</em> and make up the bulk of the card's content.
          </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */
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

.boton {
  background-color: rgb(92, 6, 139, 0.8);
}

.carrosel {
  border: 3px solid #5c068b;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;

  background-color: rgb(92, 6, 139, 0.1);

  margin: 1%;
  padding: 1%;

  text-shadow: 1px 1px 1px black;
  width: 600px;
}
</style>

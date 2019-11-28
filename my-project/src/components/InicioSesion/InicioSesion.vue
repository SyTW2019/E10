<template>
  <div class="auth">
    <b-container>
      <b-row class="justify-content-around">        
        <b-col sm="8" class="formularios1">
          <!-- Formulario de registro -->
          <h3>Inicio de sesión</h3>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-registro-1"
              label="Nombre de usuario:"
              label-for="input-nombre-reg"
            >
              <b-form-input
                id="input-nombre-reg"
                v-model="form.username"
                required
                placeholder="Introduce tu nombre o email aquí"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-registro-2"
              label="Contraseña:"
              label-for="input-registro-pw"
            >
              <b-form-input
                id="input-registro-pw"
                v-model="form.password"
                type="password"
                required
                placeholder="Introduce tu contraseña"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-registro-3">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-registro-3">
                <b-form-checkbox value="remind_me">Recordarme</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Resultado formulario de inicio de sesión">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
      <router-link to="/registro">registrate conio</router-link>
      <router-view />
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "InicioSesion",
  data() {
    return {
      form: {
        username: "",
        password: "",
        checked: null
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.form.checked = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.formularios1 {
  border: 3px solid #5c068b;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;

  background-color: rgb(92, 6, 139, 0.1);

  padding-bottom: 15px;
  padding-top: 15px;
}
</style>

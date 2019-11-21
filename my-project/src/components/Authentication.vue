<template>
  <div class="auth">
    <b-container>
      <b-row class="justify-content-around">
        <b-col sm="5" class="formularios1">
          <!-- Formulario de inicio se sesion -->
          <h3>Inicio de sesión</h3>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
        <b-col sm="5" class="formularios2">
          <!-- Formulario de registro -->
          <h3>Registro</h3>
          <b-form @submit="onSubmit2" @reset="onReset2" v-if="show">
            <b-form-group
              id="input-group-registro-1"
              label="Nombre de usuario:"
              label-for="input-nombre-reg"
            >
              <b-form-input
                id="input-nombre-reg"
                v-model="form2.name2"
                required
                placeholder="Introduce tu nombre aquí"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-registro-2"
              label="Correo electrónico:"
              label-for="input-registro-mail"
              description="Preferiblemente usar el correo institucional (aluXXXXX@ull.edu.es)."
            >
              <b-form-input
                id="input-registro-mail"
                v-model="form2.email2"
                type="email"
                required
                placeholder="Introduce tu e-mail"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-registro-3"
              label="Contraseña:"
              label-for="input-registro-pw"
            >
              <b-form-input
                id="input-registro-pw"
                v-model="form2.password2"
                type="password"
                required
                placeholder="Introduce tu contraseña"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
              </b-form-text>
              <br />
              <b-form-input
                id="input-registro-pw"
                v-model="form2.password2_repeat"
                type="password"
                required
                placeholder="Repite tu contraseña"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Seleccione una titulación:">
              <b-form-select v-model="form2.selected2" :options="options"></b-form-select>
              <div class="mt-3" v-if="form2.selected2">
                Seleccionado:
                <strong>{{ form2.selected2 }}</strong>
              </div>
            </b-form-group>

            <b-form-group id="input-group-registro-3">
              <b-form-checkbox-group v-model="form2.checked2" id="checkboxes-registro-3">
                <b-form-checkbox value="accept_terms">He leído y acepto lo términos y condiciones.</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Resultado formulario de registro">
            <pre class="m-0">{{ form2 }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Authentication",
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: null
      },
      form2: {
        email2: "",
        password2: "",
        password2_repeat: "",
        name2: "",
        selected2: null,
        checked2: null
      },
      options: [
        { value: null, text: "Por favor, escoja una opción" },
        { value: "This is First option", text: "This is First option" },
        { value: "Selected Option", text: "Selected Option" }
      ],
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
      this.form.email = "";
      this.form.name = "";
      this.form.checked = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit2(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form2));
    },
    onReset2(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form2.email2 = "";
      this.form2.password2 = "";
      this.form2.password2_repeat = "";
      this.form2.name2 = "";
      this.form2.selected2 = null;
      this.form2.checked2 = null;
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

.formularios2 {
  border: 3px solid #5c068b;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;

  background-color: rgb(92, 6, 139, 0.1);

  padding-bottom: 15px;
  padding-top: 15px;
}
</style>

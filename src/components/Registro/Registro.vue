<template>
    <div class="auth">
        <b-container>
            <b-row class="justify-content-around">
                <b-col sm="8" class="formularios2">
                    <!-- Formulario de registro -->
                    <h3>Registro</h3>
                    <b-form @submit.prevent="handleSubmit" @reset="onReset2" v-if="show">
                        <b-form-group
                            id="input-group-registro-1"
                            label="Nombre de usuario:"
                            label-for="input-nombre-reg"
                        >
                            <b-form-input
                                name="name"
                                id="input-nombre-reg"
                                v-model="user.name"
                                placeholder="Introduce tu nombre aquí"
                                type="text"
                                v-validate="'required'"
                                class="form-control"
                                :class="{ 'is-invalid': submitted && errors.has('name') }"
                            ></b-form-input>
                            <div
                                v-if="submitted && errors.has('name')"
                                class="invalid-feedback"
                            >{{ errors.first('name') }}</div>
                        </b-form-group>

                        <b-form-group
                            id="input-group-registro-2"
                            label="Correo electrónico:"
                            label-for="input-registro-mail"
                            description="Preferiblemente usar el correo institucional (aluXXXXX@ull.edu.es)."
                        >
                            <b-form-input
                                name="email"
                                id="input-registro-mail"
                                v-model="user.email"
                                type="email"
                                v-validate="'required'"
                                placeholder="Introduce tu e-mail"
                                class="form-control"
                                :class="{ 'is-invalid': submitted && errors.has('email') }"
                            ></b-form-input>
                            <div
                                v-if="submitted && errors.has('email')"
                                class="invalid-feedback"
                            >{{ errors.first('email') }}</div>
                        </b-form-group>

                        <b-form-group
                            id="input-group-registro-3"
                            label="Contraseña:"
                            label-for="input-registro-pw"
                        >
                            <b-form-input
                                name="pass"
                                id="input-registro-pw"
                                v-model="user.password"
                                type="password"
                                placeholder="Introduce tu contraseña"
                                aria-describedby="password-help-block"
                                v-validate="{ required: true, min: 6 }"
                                class="form-control"
                            ></b-form-input>
                            <b-form-text id="password-help-block">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not
                                contain spaces, special characters, or emoji.
                            </b-form-text>
                            <br />
                            <b-form-input
                                name="pass2"
                                id="input-registro-pw"
                                v-model="user.password_repeat"
                                type="password"
                                v-validate="{ required: true, min: 6 }"
                                placeholder="Repite tu contraseña"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Seleccione una titulación:">
                            <b-form-select
                                name="grado"
                                v-model="user.grado"
                                v-validate="'required'"
                                :options="options"
                                class="form-control"
                            ></b-form-select>
                            <div class="mt-3" v-if="user.grado">
                                Seleccionado:
                                <strong>{{ user.grado }}</strong>
                            </div>
                        </b-form-group>

                        <b-form-group id="input-group-registro-3">
                            <b-form-checkbox-group
                                v-model="user.checked2"
                                id="checkboxes-registro-3"
                            >
                                <b-form-checkbox
                                    value="accept_terms"
                                    class="form-control"
                                >He leído y acepto lo términos y condiciones.</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-form-group>
                            <b-button
                                type="submit"
                                variant="primary"
                                class="btn btn-primary"
                                :disabled="status.registering"
                            >Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                            <router-link to="/" class="btn btn-link">Cancel</router-link>
                        </b-form-group>
                    </b-form>
                    <b-card class="mt-3" header="Resultado formulario de registro">
                        <pre class="m-0">{{ user }}</pre>
                    </b-card>
                </b-col>
            </b-row>
            <router-link to="/iniciosesion">inicia sesion conio</router-link>
        </b-container>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "Usuario",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                grado: null,
                password_repeat: "",
                checked2: null
            },
            submitted: false,
            options: [
                { value: null, text: "Por favor, escoja una opción" },
                { value: "ULL", text: "Universidad de La Laguna" },
                {
                    value: "ULPGC",
                    text: "Universidad de Las Palmas de Gran Canaria"
                }
            ],
            show: true
        };
    },
    computed: {
        ...mapState("account", ["status"])
    },
    methods: {
        ...mapActions("account", ["register"]),
        handleSubmit(e) {
            this.submitted = true;
            this.register(this.user);

            // AQUI LA FUNCION QUE DEBERIA SER
            // this.submitted = true;
            // this.$validator.validate().then(valid => {
            //     if (valid) {
            //         console.log("SERGIO SE VE LA LUZ");
            //         this.register(this.user);
            //     }
            // });
        },

        onReset2(evt) {
            evt.preventDefault();
            // Reset our form values
            this.user.name = "";
            this.user.email = "";
            this.user.password = "";
            this.user.grado = null;
            this.user.password_repeat = "";
            this.user.checked2 = null;
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

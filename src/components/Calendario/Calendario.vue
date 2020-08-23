<template>
    <b-container>
        <b-row class="justify-content-around">
            <h2>Calendario</h2>
        </b-row>
        <br />
        <b-row class="justify-content-around">
            <b-col sm="8" class="calendario">
                <h3>Crea tu propio calendario</h3>
                <b-form
                    @submit.prevent="handleSubmit"
                    @reset="onReset"
                    v-if="show"
                >
                    <b-form-group>
                        <b-form-select
                            v-model="grado.selected_grado"
                            :options="grado.options_grado"
                        ></b-form-select>
                        <div class="mt-3" v-if="grado.selected_grado">
                            Grado:
                            <strong>{{ grado.selected_grado }}</strong>
                        </div>
                    </b-form-group>
                    <b-form-group>
                        <b-form-select
                            v-model="curso.selected_curso"
                            :options="curso.options_curso"
                        ></b-form-select>
                        <div class="mt-3" v-if="curso.selected_curso">
                            Curso:
                            <strong>{{ curso.selected_curso }}</strong>
                        </div>
                    </b-form-group>
                    <b-form-group
                        v-if="grado.selected_grado && curso.selected_curso"
                    >
                        <b-form-select
                            v-model="asignaturas.selected_asignaturas"
                            :options="asignaturas.options_asignaturas"
                            multiple
                            :select-size="4"
                        ></b-form-select>
                        <div
                            class="mt-3"
                            v-if="asignaturas.selected_asignaturas"
                        >
                            Curso:
                            <strong>{{
                                asignaturas.selected_asignaturas
                            }}</strong>
                        </div>
                    </b-form-group>
                    <b-form-group>
                        <b-button
                            type="submit"
                            variant="primary"
                            class="btn btn-primary"
                            >Crear calendario</b-button
                        >
                        <b-button type="reset" variant="danger">Reset</b-button>
                        <router-link to="/" class="btn btn-link"
                            >Cancel</router-link
                        >
                    </b-form-group>
                </b-form>
                <b-card class="mt-3" header="Resultado de calendario">
                    <pre class="m-0">{{ grado.selected_grado }}</pre>
                    <pre class="m-0">{{ curso.selected_curso }}</pre>
                    <pre class="m-0">{{
                        asignaturas.selected_asignaturas
                    }}</pre>
                </b-card>
            </b-col>
        </b-row>
        <br />
        <b-row class="calendario justify-content-around">
            <h3>Resultado</h3>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "Calendario",
    data() {
        return {
            grado: {
                selected_grado: null,
                options_grado: [
                    { value: null, text: "Escoja un grado" },
                    { value: "GII", text: "Grado en Ingeniería Informática" },
                    { value: "GM", text: "Grado en Magisterio" },
                ],
            },
            curso: {
                selected_curso: null,
                options_curso: [
                    { value: null, text: "Escoja un curso" },
                    { value: "1", text: "1" },
                    { value: "2", text: "2" },
                    { value: "3", text: "3" },
                    { value: "4", text: "4" },
                ],
            },
            asignaturas: {
                selected_asignaturas: ["b"], // Array reference
                options_asignaturas: [
                    { value: "a", text: "A" },
                    { value: "b", text: "B" },
                    { value: "c", text: "C" },
                    { value: "d", text: "D" },
                    { value: "e", text: "E" },
                    { value: "f", text: "F" },
                    { value: "g", text: "G" },
                ],
            },
            show: true,
        };
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.grado.selected_grado = null;
            this.curso.selected_curso = null;
            this.asignaturas.selected_asignaturas = null;
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    font-weight: normal;
}

.calendario {
    border: 3px solid #5c068b;
    border-radius: 8px 8px 8px 8px;
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px 8px 8px 8px;

    background-color: rgb(92, 6, 139, 0.1);

    padding-bottom: 15px;
    padding-top: 15px;
}
</style>

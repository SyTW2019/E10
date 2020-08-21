<template>
    <b-container>
        <b-row class="justify-content-around">
            <h2>Perfil de Usuario</h2>
        </b-row>
        <br />
        <b-row class="justify-content-around">
            <b-col sm="8" class="perfil"> </b-col>
        </b-row>
    </b-container>
</template>

<script>
/* eslint-disable */
export default {
    name: "Perfil",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    font-weight: normal;
}

.perfil {
    border: 3px solid #5c068b;
    border-radius: 8px 8px 8px 8px;
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px 8px 8px 8px;

    background-color: rgb(92, 6, 139, 0.1);

    padding-bottom: 15px;
    padding-top: 15px;
}
</style>

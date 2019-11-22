<template>
  <div id="app">
    <b-navbar class="container" id="barra_nav" sticky toggleable="lg" type="dark">
      <b-navbar-brand id="logo">
        <router-link to="/">
          <b-img
            :src="require('./assets/logo.png')"
            width="150%"
            rounded
            class="d-inline-block align-top"
            alt="Responsive image"
          ></b-img>
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>Usuario</template>
            <b-dropdown-item>
              <router-link to="/iniciosesion">Auth</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <br />
      <router-view />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#logo {
  border: 3px solid #5c068b;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;

  background-color: white;
}

#barra_nav {
  background-color: rgb(92, 6, 139);
}
</style>

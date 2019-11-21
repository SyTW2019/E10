<template>
  <div id="app">
    <b-navbar class="container" id="barrita" sticky=true toggleable="lg" type="dark">
      <b-navbar-brand>
        <img src="my-project\src\assets\logo_ull_peq.jpg" class="d-inline-block align-top">
        <router-link to="/">EMPEP</router-link>
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
            <template v-slot:button-content>
              Usuario
            </template>
            <b-dropdown-item>
              <router-link to="/authentication">Auth</router-link>
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

#barrita {
  background-color: rgb(92, 6, 139);
}
</style>

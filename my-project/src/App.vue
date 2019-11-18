/* eslint-disable */
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Helloworld</router-link>|
      <router-link to="/authentication">Auth</router-link>|
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

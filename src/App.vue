<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eee;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
}
  a {
    text-decoration: none;
  }
</style>

<template>
  <div id="app">
    <img src="./assets/swan-logo.png">
    <router-link v-bind:to="'/'">Welcome</router-link>
    <router-link v-bind:to="'/playlist'">Playlist Creator</router-link>
    <router-link v-bind:to="'/search'">Search</router-link>
    <router-view></router-view>
  </div>
</template>


<script>
import Welcome from '@/components/Welcome'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  padding: 10px;
  display: inline-block;
  word-wrap: normal;
  color: #2c3e50;
}

</style>

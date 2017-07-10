<template>
  <div class="Welcome">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome to Swan</h1>
      </div>
      <div class="col-md-12">
        <h2>Things you can do</h2>
        <ul>
          <li>Create playlists</li>
          <li>Keep track of your library</li>
          <li>Rate your playlists</li>
          <li>Crunch your playlist through the Swanify algorithm (coming soon)</li>
        </ul>
      </div>
      <button v-on:click='redirectTo()'>Click here to learn more</button>
    </div>
  </div>
</template>

<script type = "text/javascript">
// function redirectTo () {
//   this.$route.router.go('/playlist')
// }
export default {
  name: 'welcome',

  data () {
    return {
      msg: 'Welcome to Swan'
    }
  },
  components: {

  },
  methods: {
    redirectTo: function () {
      this.$router.push('/about')
    }
  }
}
</script>


<style scoped>

h1, h2 {

  font-weight: normal;

}

ul {

  list-style-type: none;
  padding: 0;

}

li {

  color: #008b8b;

}

button {
    width: 200px;
    border: None;
    padding: 25px;
    background-color: #42b983;
    font-size: 13px;
    font-style: 'Avenir';
    cursor: pointer;
}
</style>

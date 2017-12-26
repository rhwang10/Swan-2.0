<template>
  <div class="Search">
    <h1>Search by Artist, Song, or Album</h1>
    <div class="col-md-12">
      <input v-model="artistQuery" placeholder="Artist Name">
      <input type="submit" id="search" class="btn btn-primary" value="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'

  data: {
    artistQuery: ''
    return {
    }
  },

  methods: {
    checkQuery: function (artistQuery) {
      console.log(artistQuery)
    }
  }
}
</script>

<style scoped>

h1, h2 {
  font-weight: normal
}

button {
    width: 150px;
    border: None;
    padding: 5px;
    background-color: #42b983;
    font-size: 10px;
    font-style: 'Avenir';
    cursor: pointer;
}
</style>

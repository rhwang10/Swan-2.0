<template>
  <div class="Playlists">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome to the playlist creator</h1>
      </div>

      <div class="col-md-12">
        <input v-model='songname' placeholder="Song">
        <input v-model='artist' placeholder="Artist">
        <button v-on:click='saveInput(songname, artist)'>Add to your Swan Playlist</button>
      </div>
    <div class="col-md-12">
      <ul style='list-style:none'>
        <li v-for='item in dict' :key='item.song'>
          {{ item.song }} - {{item.artist }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'playlist',

  data () {
    return {
      dict: [
      ]
    }
  },
  components: {
  },
  methods: {

    saveInput: function (songname, artist) {
      this.dict.push({song: songname, artist: artist})
    }

    deleteInput: function() {

    }
  }
}

</script>

<style scoped>

h1, h2 {
  font-weight: normal
}

button {
    width: 200px;
    border: None;
    padding: 5px;
    background-color: #42b983;
    font-size: 10px;
    font-style: 'Avenir';
    cursor: pointer;
}


</style>

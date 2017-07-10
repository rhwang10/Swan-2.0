<template>
  <div class="Playlists">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome to the playlist creator</h1>
      </div>

      <div class="col-md-12">
        <input v-model='songname' placeholder="Song">
        <input v-model='artistname' placeholder="Artist">
        <button v-on:click='saveInput(songname, artistname)'>Add to your Swan Playlist</button>
      </div>
    <div class="col-md-12">
      <ul style='list-style:none'>
        <li v-for='entry in this.dict'>
          {{ entry.song }} - {{ entry.artist }}
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
      songname: '',
      artistname: '',
      dict: []
    }
  },

  components: {
  },
  methods: {

    inArray: function (haystack, songname, artistname) {
      var length = haystack.length
      for (var i = 0; i < length; i++) {
        if (haystack[i].song === songname && haystack[i].artist === artistname) {
          return true
        }
      }
      return false
    },

    saveInput: function (songname, artistname) {
      if (this.inArray(this.dict, songname, artistname)) {
      } else {
      // this.dict.push({song: songname, artist: artistname})
        this.dict.push({
          song: songname,
          artist: artistname
        })
      }
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

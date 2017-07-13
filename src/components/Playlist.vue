<template>
  <div class="Playlists">
    <div class="row">

      <div class="col-md-12">
        <h1>Welcome to the playlist creator</h1>
      </div>

      <div class='col-md-12'>
        <input v-model='songname' placeholder="Song">
        <input v-model='artistname' placeholder="Artist">
        <button v-on:click='saveInput(songname, artistname)'>Add to your Swan Playlist</button>
        <br>
        <br>
        <input v-model='deletesong' placeholder='Song'>
        <input v-model='deleteartist' placeholder='Artist'>
        <button v-on:click='deleteEntry(deletesong, deleteartist)'>Delete from playlist</button>
        <br>
        <br>
        <md-card>
          <md-card-header>
            <div class='md-title'>Playlist Builder</div>
            <div class='md-subhead'>Built using Material Design for Vue.js</div>
          </md-card-header>

          <md-card-content>

            <md-button class='md-raised md-primary' v-on:click='eraseTable()'>Start from Scratch</md-button>

            <md-table style='width:100%'>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Song Name</md-table-head>
                  <md-table-head>Artist</md-table-head>
                </md-table-row>
              </md-table-header>
              <md-table-body>
                <md-table-row v-for='entry in this.dict' :key='song' :md-item='row'>
                  <md-table-cell width='10%'>{{entry.song}}</md-table-cell>
                  <md-table-cell width='10%'>{{entry.artist}}</md-table-cell>
                  <md-button v-on:click='deleteEntry(entry.song, entry.artist)'>Delete</md-button>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-card-content>
        </md-card>
      </div>

  </div>
</div>
</template>

<script type="text/javascript">
import Vue from 'vue'
export default {
  name: 'playlist',

  data () {
    return {
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
      if (songname === '' && artistname === '' || this.inArray(this.dict, songname, artistname)) {
      } else {
        this.dict.push({
          song: songname,
          artist: artistname
        })
      }
      this.songname = ''
      this.artistname = ''
    },

    deleteEntry: function (songname, artistname) {
      for (var a = 0; a < this.dict.length; a++) {
        if (this.dict[a].song === songname && this.dict[a].artist === artistname) {
          this.dict.splice(a, 1)
        }
      }
      this.deletesong = ''
      this.deleteartist = ''
    },

    eraseTable: function () {
      this.dict.splice(0, this.dict.length)
    }
  }
}
Vue.component('my-component', {
  template: '<div>Testing Components!</div>'
})
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

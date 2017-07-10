<template>
  <div class="row">
    <div class="col-md-6">
      <h1>This is the about page.</h1>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to the about page'
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

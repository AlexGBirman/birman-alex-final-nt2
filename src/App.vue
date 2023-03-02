<template>
  <div id="app">
    <div class="container-fluid mt-3">
      <div class="jumbotron">
        <h1>Alex Birman - Final PNT2</h1>
        <br>
        
        <router-view></router-view>

      </div>
    </div>

    <h1></h1>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
},
};
</script>

<style>
  h1 {
    color: darkmagenta;
  }
</style>

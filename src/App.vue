<template>
  <v-row class="d-flex flex-row-reverse" no-gutters>
    <v-col cols="10" class="pa-0">
      <div>
        <AppBar class="ma-0" />
        <HelloWorld class="ma-0" msg="Welcome to Your Vue.js App" />
      </div>
    </v-col>
    <v-col cols="2" class="d-flex justify-center pa-0">
      <VerticalNavBar />
    </v-col>
  </v-row>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VerticalNavBar from './components/VerticalNavBar.vue';
import AppBar from './components/AppBar.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    VerticalNavBar,
    AppBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: Karla, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}

a:active,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  background-color: #E0F7FA;
}

.app-wrapper {
  margin: auto;
}
</style>

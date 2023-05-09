<template>
    <v-col class="d-flex justify-end pa-0">
      <div style="width: 82.5%; padding: 0px">
        <AppBar />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </v-col>
    <v-col>
      <VerticalNavBar />
    </v-col>
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

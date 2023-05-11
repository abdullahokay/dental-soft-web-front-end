<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <CardContainer lass="ma-0" />
      </v-container>
      <v-container>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardContainer from './components/MainPageCardContainer.vue'

import AppBar from './components/AppBar.vue';
export default {
  name: 'App',
  components: {
    CardContainer,
    // VerticalNavBar,
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

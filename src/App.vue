<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <CardContainer lass="ma-0" />
      </v-container>
      <v-container>
        <v-container>
          <v-row class="justify-center">
            <v-col cols="9">
              <DataTable />
            </v-col>
            <v-col cols="3">
              <v-card class="pa-2">
                <VCalendar view="weekly" class="mb-2" />
                <v-divider></v-divider>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardContainer from './components/MainPageCardContainer.vue'
import DataTable from './components/MainPageDataTable.vue'

import AppBar from './components/AppBar.vue';
export default {
  name: 'App',
  components: {
    AppBar,
    CardContainer,
    DataTable,
    // VerticalNavBar,
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

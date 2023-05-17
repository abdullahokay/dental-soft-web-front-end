<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

import { useTheme } from 'vuetify/lib/framework.mjs';

export default {
  name: 'App',
  components: {
    AppBar,
  },

  data() {
    return {

    }
  },

  setup() {
    const theme = useTheme()

    return {
      theme,
    }
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
</style>
<!-- <template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <v-container>
          <CardContainer lass="ma-0" />
        </v-container>
        <v-container>
          <v-row class="align-center justify-center">
            <v-col xl="6" cols="9" lg="9" md="12" sm="12" class="py-3 xs-data-table">
              <DataTable />
            </v-col>
            <v-col xl="3" lg="3" sm="12" class="px-2 py-2" fill-height>
              <AppointmentCalendarContainer />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppointmentCalendarContainer from './containers/HomePage/HomePageAppointment-CalendarContainer.vue';
import CardContainer from './containers/HomePage/HomePageCardContainer.vue';
import DataTable from './components/HomePage/MainPageDataTable.vue'
import AppBar from './components/AppBar.vue';

export default {
  name: "HomePage",
  components: {
    CardContainer,
    DataTable,
    AppointmentCalendarContainer,
    AppBar
  },

  data: () => ({

  })
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: "Karla", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}

html {
  font-family: "Karla", sans-serif !important;
}

a:active,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  background-color: #E0F7FA;
}
@media screen and (max-width: 37.5rem) {
  .xs-data-table {
    display: none !important;
  }
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

</style> -->
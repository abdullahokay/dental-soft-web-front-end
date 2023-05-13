<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <v-container>
          <CardContainer lass="ma-0" />
        </v-container>
        <v-container>
          <v-row class="align-center justify-center">
            <v-col xl="6" cols="9" lg="9" md="12" sm="12" class="py-3 xs-data-table" >
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
import CardContainer from './components/MainPageCardContainer.vue'
import DataTable from './components/MainPageDataTable.vue'
import AppBar from './components/AppBar.vue';
import AppointmentCalendarContainer from './components/MainPageAppointment-CalendarContainer.vue';

import { useTheme } from 'vuetify/lib/framework.mjs';

export default {
  name: 'App',
  components: {
    AppBar,
    CardContainer,
    DataTable,
    AppointmentCalendarContainer

    // VerticalNavBar,
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
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  font-family: Karla, sans-serif !important;
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

@media screen and (max-width: 37.5rem) {
  .xs-data-table {
    display: none !important;
  }
}
</style>

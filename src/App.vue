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
                <VCalendar v-if="this.theme.global.current.value.dark" view="weekly" title-position="left" is-dark />
                <VCalendar v-else view="weekly" title-position="left" />
                <v-divider class="border-opacity-25 mx-3 my-2"></v-divider>
                <div>
                  <div class="d-flex justify-center align-center pa-4 calendar-randevu-wrapper">
                    <div class="d-flex flex-column text-left ml-4">
                      <div class="text-p text-center">Tue</div>
                      <div class="text-h3 text-left">16</div>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column justify-center text-left mr-4">
                      <div class="text-h6">Dr. Rita Ora</div>
                      <div class="text-p text-center">Dermatalogist</div>
                      <div class="calendar-randevu-clock">
                        <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                      </div>
                    </div>
                  </div>
                  <v-divider class="mx-3 my-2 border-opacity-25"></v-divider>
                  <div class="d-flex justify-center align-center pa-4 calendar-randevu-wrapper">
                    <div class="d-flex flex-column text-left ml-4">
                      <div class="text-p text-center">Tue</div>
                      <div class="text-h3 text-left">16</div>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column justify-center text-left mr-4">
                      <div class="text-h6">Dr. Rita Ora</div>
                      <div class="text-p text-center">Dermatalogist</div>
                      <div class="calendar-randevu-clock">
                        <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                      </div>
                    </div>
                  </div>
                </div>
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

import { useTheme } from 'vuetify/lib/framework.mjs';

export default {
  name: 'App',
  components: {
    AppBar,
    CardContainer,
    DataTable,
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

.app-wrapper {
  margin: auto;
}

.calendar-randevu-clock {
  background-color: white;
  color: black;
  max-width: fit-content;
  border-radius: 10px;
}

.calendar-randevu-wrapper {
  background-color: #2380EA;
  color: white;
  border-radius: 10px;
}
</style>

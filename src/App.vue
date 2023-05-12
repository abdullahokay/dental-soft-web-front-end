<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <v-container>
          <CardContainer lass="ma-0" />
        </v-container>
        <v-container class="pa-9">
          <v-row class="justify-center">
            <v-col lg="12">
              <v-card class="pa-2">
                <v-row class="align-center justify-center py-2" no-gutters>
                  <div class="d-flex align-center">
                    <VCalendar v-if="this.theme.global.current.value.dark" view="weekly" title-position="left" is-dark />
                    <VCalendar v-else view="weekly" title-position="left" />
                  </div>
                </v-row>
                <v-divider class="border-opacity-25 mx-3 my-2"></v-divider>
                <v-row no-gutters class="justify-center py-2">
                  <v-col cols="3">
                  <v-card class="d-flex justify-center align-center pa-4 calendar-randevu-wrapper" color="blue">
                    <div class="d-flex flex-column text-left">
                      <div class="text-p text-center">Tue</div>
                      <div class="text-h3 text-left">16</div>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column justify-center text-left mx-5">
                      <div class="text-h6">Dr. Rita Ora</div>
                      <div class="text-p text-center">Dermatalogist</div>
                      <div class="calendar-randevu-clock">
                        <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                  <v-divider class="mx-3 my-2 border-opacity-25" vertical></v-divider>
                  <v-col cols="3">
                    <v-card class="d-flex justify-center align-center pa-4 calendar-randevu-wrapper" color="blue">
                      <div class="d-flex flex-column text-left">
                        <div class="text-p text-center">Tue</div>
                        <div class="text-h3 text-left">16</div>
                      </div>
                      <v-spacer></v-spacer>
                      <div class="d-flex flex-column justify-center text-center mx-5">
                        <div class="text-h6">Dr. Rita Ora</div>
                        <div class="text-p text-center">Dermatalogist</div>
                        <div class="calendar-randevu-clock">
                          <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-divider class="mx-3 my-2 border-opacity-25" vertical></v-divider>
                  <v-col cols="3">
                  <v-card class="d-flex justify-center align-center pa-4 calendar-randevu-wrapper" color="blue">
                    <div class="d-flex flex-column text-left">
                      <div class="text-p text-center">Tue</div>
                      <div class="text-h3 text-left">16</div>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column justify-center text-left mx-5">
                      <div class="text-h6">Dr. Rita Ora</div>
                      <div class="text-p text-center">Dermatalogist</div>
                      <div class="calendar-randevu-clock">
                        <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="9" lg="12">
              <DataTable />
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

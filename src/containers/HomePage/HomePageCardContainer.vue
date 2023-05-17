<template>
  <div class="hello d-flex justify-center">
    <v-container>
      <v-row class="justify-center md-justify-space-evenly">
        <card card-icon="mdi-calendar-month" card-icon-bg-color="#EAF4FE" card-icon-color="#2C91ED"
          card-text="Total Booking" card-integer="33" />
        <card card-icon="mdi-calendar-check" card-icon-bg-color="#FEEFEA" card-icon-color="error"
          card-text="Booking Success" card-integer="22" />
        <card card-icon="mdi-calendar-remove" card-icon-bg-color="#E6F9FD" card-icon-color="#08C5E2"
          card-text="Booking Cancel" card-integer="12" />
        <card card-icon="mdi-cash-plus" card-icon-bg-color="#EFF7E0" card-icon-color="#78BF09" card-text="Paid Amount"
          card-integer="$50" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import card from '../../components/HomePage/MainPageCard.vue'
export default {
  name: 'CardContainer',

  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-icon-wrapper {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #EAF4FE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nd-card-icon-wrapper {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #EAF4FE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rd-card-icon-wrapper {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #EAF4FE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.th-card-icon-wrapper {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #EAF4FE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  border-radius: 15px;
}

@media screen and (min-width: 60rem) and (max-width: 1280px) {
  .md-justify-space-evenly {
    justify-content: space-evenly !important;
  }
}
</style>

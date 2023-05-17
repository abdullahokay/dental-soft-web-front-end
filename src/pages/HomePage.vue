<template>
    <div class="home">
        <div class="text-h3 my-4 mx-8 text-left font-weight-black">Genel Bakış</div>
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
    </div>
</template>

<script>
import CardContainer from '../containers/HomePage/HomePageCardContainer.vue';
import AppointmentCalendarContainer from '../containers/HomePage/HomePageAppointment-CalendarContainer.vue';
import DataTable from '../components/HomePage/MainPageDataTable.vue'

export default {
    name: "HomePage",
    components: {
        CardContainer,
        DataTable,
        AppointmentCalendarContainer
    },

    data: () => ({

    })
}
</script>
<style scoped>
@media screen and (max-width: 37.5rem) {
    .xs-data-table {
        display: none !important;
    }
}
</style>
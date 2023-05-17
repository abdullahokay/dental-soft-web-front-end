<template>
    <div class="patients">
        <div class="text-h3 my-4 mx-7 text-left font-weight-black">Patients</div>
        <v-container>
            <v-row class="align-center justify-center">
                <v-col xl="6" lg="12" md="12" sm="12" class="py-3 xs-data-table">
                    <PatientsDataTable />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import PatientsDataTable from '../components/PatientDetailsPage/PatientsPageDataTable.vue';

export default {
    name: "PatientsPage",

    components: {
        PatientsDataTable,
    }
}
</script>
<style scoped>
@media screen and (max-width: 37.5rem) {
    .xs-data-table {
        display: none !important;
    }
}
</style>
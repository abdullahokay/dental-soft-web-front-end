<template>
    <v-col xl="7" lg="12" sm="4" class="px-2 py-1">
        <v-card class="d-flex justify-center pa-3 calendar-randevu-wrapper" color="blue">
            <div class="d-flex flex-column text-left justify-center">
                <div class="text-p text-center">Tue</div>
                <div class="text-h3 text-left">16</div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex flex-column justify-center text-left mr-2">
                <div class="text-h6">Dr. Rita Ora</div>
                <div class="text-p text-center">Dermatalogist</div>
                <div class="calendar-randevu-clock">
                    <div class="text-h7 pa-1 text-left font-weight-bold">10:30</div>
                </div>
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "Appointment",
}
</script>

<style scoped>
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

@media screen and (min-width:600px) and (max-width:960px) {
    .v-col-sm-4 {
        flex: 0 0 33.3333333333% !important;
        max-width: 33.3333333333% !important;
    }
}

@media screen and (max-width:600px) {
    .v-col {
        flex-grow: 0.8;
    }
}
</style>
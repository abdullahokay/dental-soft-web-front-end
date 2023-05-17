<template>
    <v-card class="pa-2">
        <v-row class="justify-center py-2 px-2" no-gutters>
            <div>
                <Calendar />
            </div>
        </v-row>
        <v-row no-gutters class="align-center justify-center" wrap>
            <Appointment date="16"/>
            <Appointment date="18"/>
        </v-row>
    </v-card>
</template>

<script>
import Calendar from '../../components/HomePage/MainPageCalendar.vue';
import Appointment from '../../components/HomePage/MainPageAppointment.vue';
export default {
    name: 'AppointmentCalendarContainer',
    components: {
        Calendar,
        Appointment
    },


}
</script>
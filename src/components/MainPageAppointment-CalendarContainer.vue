<template>
    <v-card class="pa-2">
        <v-row class="justify-center py-2 px-2" no-gutters>
            <div>
                <Calendar />
            </div>
        </v-row>
        <v-row no-gutters class="align-center justify-center" wrap>
            <Appointment />
            <Appointment />
        </v-row>
    </v-card>
</template>

<script>
import Calendar from './MainPageCalendar.vue';
import Appointment from './MainPageAppointment.vue';
export default {
    name: 'AppointmentCalendarContainer',
    components: {
        Calendar,
        Appointment
    }
}
</script>
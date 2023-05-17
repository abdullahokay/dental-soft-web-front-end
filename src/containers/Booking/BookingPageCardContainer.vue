<template>
    <div class="hello d-flex justify-center">
        <v-container>
            <v-row class="justify-center md-justify-space-evenly">
                <card />
                <card />
                <card />
                <card />
                <card />
                <card />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import card from '../../components/BookingPage/BookingPageCard.vue';   
export default {
    components: {
        card
    }
}
</script>
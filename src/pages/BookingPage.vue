<template>
    <div class="booking">
        <div class="text-h3 my-4 mx-3 text-left font-weight-black">Booking</div>
        <CardContainer />
    </div>
</template>

<script>
import CardContainer from '../containers/Booking/BookingPageCardContainer.vue';
export default {
    name: "Booking",
    components: {
        CardContainer,
    },

    data: () => ({

    })
}
</script>
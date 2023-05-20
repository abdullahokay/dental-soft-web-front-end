<template>
    <!-- <div class="text-h3 text-left my-4 mx-3 font-weight-black">Hasta Detay</div> -->
    <PatientTedavi />
</template>

<script>
import PatientTedavi from '../components/PatientDetailPage/PatientTedavi.vue';
export default {
    name: 'PatientDetail',

    components: {
        PatientTedavi
    }
}
</script>
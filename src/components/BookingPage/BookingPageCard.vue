<template>
    <v-col xl="4" lg="4" md="6" sm="6" class="xs-sc-card-column">
        <div class="d-flex justify-center">
            <v-card class="px-4 py-5" width="100%" fill-height>
                <v-sheet>
                    <v-sheet class="align-self-center">
                        <div class="text-h5 text-left font-weight-bold mb-1">Dr. Nick Jonas</div>
                        <div class="text-p text-left text-disabled mb-1">Alphaviruses</div>
                        <div class="d-flex justify-space-between">
                            <div class="text-p text-left">10:30 - 11:00</div>
                            <div class="text-p text-right text-info">
                                <v-icon class="mr-1" icon="mdi-clock" color="info"></v-icon>1hr
                            </div>
                        </div>
                    </v-sheet>
                    <v-divider class="mt-5 mb-5"></v-divider>
                    <v-sheet class="d-flex justify-space-between align-center">
                        <div class="d-flex text-left">
                            <div class="">
                                <v-avatar><img src="../../assets/avatar-40-40.png" alt="avatar" /></v-avatar>
                            </div>
                            <div class="d-flex align-center flex-column text-left ml-3">
                                <div class="text-p">Dr. Nick Jonas</div>
                                <div class="text-p text-disabled">(61) 435 755 767</div>
                            </div>
                        </div>
                        <div class="d-flex align-center">
                            <div class="text-p text-right font-weight-bold"><v-btn icon size="small" :ripple="false"><v-icon icon="mdi-phone"
                                        color="info"></v-icon></v-btn></div>
                            <div class="text-p text-right ml-5">
                                <v-btn icon size="small" :ripple="false">
                                    <v-icon icon="mdi-message-processing" color="info"></v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-sheet>
                    <v-divider class="mt-5 mb-5"></v-divider>
                    <v-btn rounded="lg" color="#237FEA" class="py-7 text-white font-weight-bold" :ripple="false" block>Randevu Detayları</v-btn>
                </v-sheet>
            </v-card>
        </div>
    </v-col>
</template>

<script>
import avatar from '../../assets/avatar-removebg-preview.png'
export default {
    name: 'BookingPageCard',
}
</script>

<style scoped>
@media screen and (max-width: 37.5rem) {
    .xs-sc-card-column {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.text-h5 {
    font-family: Karla, system-ui, Avenir, Helvetica, Arial, sans-serif !important;
}
</style>
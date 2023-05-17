<template>
    <v-col class="card-column" xl="2" lg="3" md="6" sm="6">
        <div class="main-page-card-wrapper d-flex justify-center">
            <v-card class="px-5 py-5">
                <v-sheet class="d-flex justify-center">
                    <v-sheet class="align-self-center">
                        <v-btn :color="cardIconBgColor" icon class="mr-4 disable-events" size="large" :ripple="false">
                            <v-icon size="x-large" :color="cardIconColor">{{ cardIcon }}</v-icon>
                        </v-btn>
                    </v-sheet>
                    <v-sheet class="text-center">
                        <h1 class="text-left">{{ cardInteger }}</h1>
                        <p class="text-left">{{ cardText }}</p>
                    </v-sheet>
                </v-sheet>
            </v-card>
        </div>
    </v-col>
</template>

<script>
export default {
    name: 'MainPageCard',
    data() {
        return {

        }
    },

    props: {
        cardIcon: {
            type: String
        },

        cardIconBgColor: {
            type: String
        },

        cardIconColor: {
            type: String
        },

        cardText: {
            type: String
        },

        cardInteger: {
            type: String
        }
    }
}
</script>

<style scoped>
.v-card {
    border-radius: 15px;
    width: 100%;
}

.v-card--variant-elevated {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.main-page-card-wrapper {
    width: 264px !important;
}

@media screen and (max-width: 60rem) {
    .v-col-sm-6 {
        max-width: max-content;
    }

}

@media screen and (min-width: 60rem) and (max-width: 80rem){
    .v-col-md-6 {
        max-width: max-content !important;
    }

}

@media screen and (min-width: 80rem) and (max-width: 88.4375rem) {
    .v-col-md-6 {
        max-width: 50%;
        flex: 0 0 50%;
    }

    .v-col {
        display: flex;
        justify-content: center;
    }
}

.disable-events {
    pointer-events: painted !important;
    cursor: default;
}
</style>
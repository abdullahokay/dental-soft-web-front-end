<template>
    <v-col class="card-column" md="3" lg="3" sm="6">
        <div class="main-page-card-wrapper">
            <v-card class="px-7 py-7">
                <v-sheet class="d-flex justify-center">
                    <v-sheet class="align-self-center">
                        <v-btn :color="cardIconBgColor" icon class="mr-4" size="large">
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
    name: 'cardItem',
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
}

.v-card--variant-elevated {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

main-page-card-wrapper {
    max-width: 300px !important;
}

/* @media screen and (min-width: 959px) {
    .card-column {
        max-width: 300px;
    }
} */
</style>
<template>
    <v-navigation-drawer location="left" v-model="drawer">
        <v-list class="nav-list" density="comfortable" nav active-color="#2380EA">
            <v-list-item class="home-logo-wrapper">
                <RouterLink :to="{ name: 'home' }">
                    <div class="d-flex justify-center align-center mr-5">
                        <img src="../assets/logo.png" width="90" alt="logo" />
                        <h1 class="home-title">Dental<br />Soft</h1>
                    </div>
                </RouterLink>
            </v-list-item>
            <div class="mt-4 mb-7 px-5">
                <RouterLink :to="{ name: 'home' }">
                    <v-list-item prepend-icon="mdi-home-city" value="home" class="nav-list-item">Genel
                        Bakış</v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'booking' }">
                    <v-list-item prepend-icon="mdi-chart-line-variant" value="account"
                        class="nav-list-item">Randevular</v-list-item>
                </RouterLink>
                <RouterLink :to="{ name: 'patients' }">
                    <v-list-item prepend-icon="mdi-card-account-details" value="patientDetails" class="nav-list-item">Hastalar</v-list-item>
                </RouterLink>
                <v-list-item prepend-icon="mdi-wallet-bifold-outline" value="wallet"
                    class="nav-list-item">Wallet</v-list-item>
            </div>
            <v-divider class="vertical-nav-divider"></v-divider>
            <div class="mt-7 px-5">
                <v-list-item prepend-icon="mdi-email" value="inbox" class="nav-list-item">Inbox</v-list-item>
                <v-list-item prepend-icon="mdi-bell" value="notifications" class="nav-list-item">Notifications</v-list-item>
                <v-list-item prepend-icon="mdi-badge-account" value="support" class="nav-list-item">Support</v-list-item>
            </div>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar color="inherit">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <VExpandTransition>
            <v-col v-if="searching" class="pa-1" lg="3" md="3" sm="3" xs="2">
                <v-card flat height="auto" class="d-flex align-center justify-center">
                    <v-text-field prepend-inner-icon="mdi-magnify" density="compact" label="Search" variant="outlined"
                        hide-details="auto" color="black" single-line clearable class="align-self-center"></v-text-field>
                </v-card>
            </v-col>
        </VExpandTransition>
        <VExpandTransition>
            <v-btn icon @click="searching = !searching">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </VExpandTransition>
        <v-btn icon @click="toggleTheme">
            <Transition>
                <template v-if="this.theme.global.current.value.dark">
                    <v-icon>mdi-weather-sunny</v-icon>
                </template>
                <template v-else>
                    <v-icon>mdi-weather-night</v-icon>
                </template>
            </Transition>
        </v-btn>
    </v-app-bar>
</template>
  
<script>
import { useTheme } from 'vuetify/lib/framework.mjs';
import PatientTedavi from './PatientDetailPage/PatientTedavi.vue';
export default {
    data() {
        return {
            drawer: true,
            searching: false,
            tab: null,
            items: [
                'web', 'shopping', 'videos', 'images', 'news',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },



    methods: {
        openSearchBar() {
            this.searching = !this.searching
        },
    },

    setup() {
        const theme = useTheme()

        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        }
    },
}
</script>
  
<style scoped>
@media screen and (max-width: 959px) {
    .v-col {
        flex-basis: auto !important;
    }
}

.home-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vertical-nav-divider {
    margin-left: 1rem;
    margin-right: 1rem;
}

.nav-list-item {
    padding: 0.5rem !important;
    border-radius: 9px !important;
}

.v-navigation-drawer {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.theme-switch {
    max-width: max-content;
}
</style>
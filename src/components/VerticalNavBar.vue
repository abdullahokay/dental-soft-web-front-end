<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer permanent location="left">
                <v-list class="nav-list" density="comfortable" nav active-color="#2380EA" color="#2380EA">
                    <v-list-item class="home-logo-wrapper">
                        <div class="d-flex justify-center align-center">
                            <img src="../assets/logo.png" width="90" alt="logo" />
                            <h1 class="home-title">DentalSoft</h1>
                        </div>
                    </v-list-item>
                    <div class="mt-4 mb-7 px-5">
                        <v-list-item prepend-icon="mdi-home-city" value="home">Overview</v-list-item>
                        <v-list-item prepend-icon="mdi-chart-line-variant" value="account">Booking Activity</v-list-item>
                        <v-list-item prepend-icon="mdi-wallet-bifold-outline" value="wallet">Wallet</v-list-item>
                        <v-list-item prepend-icon="mdi-cog" value="settings">Settings</v-list-item>
                    </div>
                    <v-divider class="vertical-nav-divider"></v-divider>
                    <div class="mt-6 px-5">
                        <v-list-item prepend-icon="mdi-email" value="inbox">Inbox</v-list-item>
                        <v-list-item prepend-icon="mdi-bell" value="notifications">Notifications</v-list-item>
                        <v-list-item prepend-icon="mdi-badge-account" value="support">Support</v-list-item>
                    </div>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style>
.home-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.vertical-nav-divider {
    margin-left: 1rem;
    margin-right: 1rem;
}

.v-list-item {
    padding: .5rem !important;
    border-radius: 9px !important;
}

.v-navigation-drawer {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}
</style>
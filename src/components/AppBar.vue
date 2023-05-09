<template>
    <div style="position: sticky; top: 0;">
        <v-card class="d-flex align-center" color="white" height="120" flat rounded="0">
            <v-toolbar class="toolbar" permanent density="default" app>
                <v-toolbar-title>
                    <h3>Welcome Back</h3>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field bg-color="white" class="mt-5 mr-4" placeholder="Search" prepend-inner-icon="mdi-magnify"
                    variant="outlined">
                </v-text-field>
                <v-btn class="mr-4" size="x-large" icon>
                    <v-icon size="x-large" color="blue">mdi-bell-circle</v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
        <v-divider></v-divider>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showSearchBar: false,
        };
    },
};
</script>
  
<style scoped>
.toolbar {
    background-color: white;
    position: sticky !important;
    z-index: 2;
    top: 0 !important;
}
</style>
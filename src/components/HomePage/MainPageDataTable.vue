<template>
    <v-card class="pa-2">
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="headers" :items="desserts" item-value="name"
            class="elevation-3">
            <template v-slot:[`item.islem`]="{ item }">
                <div>
                    <v-btn color="blue" size="small">
                        <strong>
                            İşlem
                        </strong>
                    </v-btn>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            itemsPerPage: 5,
            headers: [
                {
                    title: 'Hasta Ad-Soyad',
                    align: 'center',
                    sortable: false,
                    key: 'name',
                },
                { title: 'Doktor', align: 'center', key: 'doktor' },
                { title: 'Telefon', align: 'center', key: 'telefon' },
                { title: 'İşlem', align: 'center', key: 'islem' },
                // { title: 'Protein (g)', align: 'middle', key: 'protein' },
                // { title: 'Iron (%)', align: 'middle', key: 'iron' },
            ],
            desserts: [
                {
                    name: 'Abdullah Okay',
                    doktor: 'Dr. Ahmet',
                    telefon: '+904514586791',
                },
                {
                    name: 'Çağrı Kart',
                    doktor: 'Dr. Ayşe',
                    telefon: '+904514586791',
                },
                {
                    name: 'Baran Mengücek',
                    doktor: 'Dr. Mehmet',
                    telefon: '+904514586791',
                },
                {
                    name: 'Kemal Erkmen',
                    doktor: 'Dr. Ebru',
                    telefon: '+904514586791',
                },
                {
                    name: 'Frodo Baggins',
                    doktor: 'Dr. Ahmet',
                    telefon: '+904514586791',
                }
            ],
        }
    },
}
</script>
<style scoped>
.v-data-table__td>.v-data-table-header__content {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
</style>
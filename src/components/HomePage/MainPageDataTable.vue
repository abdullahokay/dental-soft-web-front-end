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
                // {
                //     name: 'Gingerbread',
                //     calories: 356,
                //     fat: 16.0,
                //     carbs: 49,
                //     protein: 3.9,
                //     iron: '16',
                // },
                // {
                //     name: 'Ice cream sandwich',
                //     calories: 237,
                //     fat: 9.0,
                //     carbs: 37,
                //     protein: 4.3,
                //     iron: '1',
                // },
                // {
                //     name: 'Lollipop',
                //     calories: 392,
                //     fat: 0.2,
                //     carbs: 98,
                //     protein: 0,
                //     iron: '2',
                // },
                // {
                //     name: 'Cupcake',
                //     calories: 305,
                //     fat: 3.7,
                //     carbs: 67,
                //     protein: 4.3,
                //     iron: '8',
                // },
                // {
                //     name: 'Honeycomb',
                //     calories: 408,
                //     fat: 3.2,
                //     carbs: 87,
                //     protein: 6.5,
                //     iron: '45',
                // },
                // {
                //     name: 'Donut',
                //     calories: 452,
                //     fat: 25.0,
                //     carbs: 51,
                //     protein: 4.9,
                //     iron: '22',
                // },
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
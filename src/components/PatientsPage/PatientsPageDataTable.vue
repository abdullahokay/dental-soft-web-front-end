<template>
    <v-card class="pa-2">
        <v-data-table v-model:items-per-page="itemsPerPage" :search="search" :headers="headers" :items="desserts"
            item-value="ad" class="elevation-3">
            <template v-slot:top>
                <v-toolbar flat
                    :style="this.theme.global.current.value.dark ? { backgroundColor: 'inherit' } : { backgroundColor: 'white' }">
                    <div class="text-h6 text-left ml-4">Hastalar</div>
                    <v-spacer></v-spacer>
                    <v-text-field class="mx-4" v-model="search" label="Search" single-line hide-details
                        style="background: none;" variant="outlined" prepend-inner-icon="mdi-magnify" density="compact"
                        width="100px">
                    </v-text-field>
                    <v-btn color="#13C56B" prepend-icon="mdi-plus" variant="flat" class="text-white font-weight-bold">Hasta
                        Ekle</v-btn>
                </v-toolbar>
                <v-divider class="my-4"></v-divider>
            </template>
            <template v-slot:[`item.islem`]="{ item }">
                <div class="d-flex justify-space-between text-center">
                    <RouterLink :to="{ name: 'patient-detail' }">
                        <v-btn color="white" icon class="text-warning" size="small">
                            <v-icon>mdi-lead-pencil</v-icon>
                        </v-btn>
                    </RouterLink>
                    <v-btn color="white" icon class="text-error ml-2" size="small">
                        <v-icon>mdi-trash-can</v-icon>
                    </v-btn>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { useTheme } from 'vuetify/lib/framework.mjs';
export default {
    data() {
        return {
            search: '',
            itemsPerPage: 5,
            headers: [
                { title: 'Hasta No', align: 'center', key: 'hastaNo' },
                { title: 'Dosya No', align: 'center', key: 'dosyaNo' },
                { title: 'Hasta Ad', align: 'center', sortable: false, key: 'ad' },
                { title: 'Hasta Soyad', align: 'center', key: 'soyad' },
                { title: 'Doktor', align: 'center', key: 'doktor' },
                { title: 'Kimlik/Pasaport No', align: 'center', key: 'kimlikNo' },
                { title: 'Telefon', align: 'center', key: 'telefon' },
                { title: 'Referans', align: 'center', key: 'referans' },
                { title: 'İşlemler', align: 'center', key: 'islem', sortable: false },
                // { title: 'Protein (g)', align: 'middle', key: 'protein' },
                // { title: 'Iron (%)', align: 'middle', key: 'iron' },
            ],
            desserts: [
                {
                    hastaNo: 1,
                    dosyaNo: '1234asd',
                    ad: 'Abdullah',
                    soyad: 'Okay',
                    doktor: 'Dr. Ahmet',
                    kimlikNo: '135436746441243',
                    telefon: '+904514586791',
                    referans: 'a'
                },
                {
                    hastaNo: 2,
                    dosyaNo: '1234asd',
                    ad: 'Çağrı',
                    soyad: 'Kart',
                    doktor: 'Dr. Ayşe',
                    kimlikNo: '135436746441243',
                    telefon: '+904514586791',
                    referans: 'a'
                },
                {
                    hastaNo: 3,
                    dosyaNo: '1234asd',
                    ad: 'Baran',
                    soyad: 'Mengücek',
                    doktor: 'Dr. Mehmet',
                    kimlikNo: '135436746441243',
                    telefon: '+904514586791',
                    referans: 'a'
                },
                {
                    hastaNo: 4,
                    dosyaNo: '1234asd',
                    ad: 'Kemal',
                    soyad: 'Erkmen',
                    doktor: 'Dr. Ebru',
                    kimlikNo: '135436746441243',
                    telefon: '+904514586791',
                    referans: 'a'
                },
                {
                    hastaNo: 5,
                    dosyaNo: '1234asd',
                    ad: 'Frodo',
                    soyad: 'Baggins',
                    doktor: 'Dr. Ahmet',
                    kimlikNo: '135436746441243',
                    telefon: '+904514586791',
                    referans: 'a'
                }
            ],
        }
    },

    setup() {
        const theme = useTheme()

        return {
            theme,
        }
    },
    methods: {

    },
}
</script>
<style scoped>
.v-data-table__td>.v-data-table-header__content {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

.v-input {
    max-width: 200px;
}</style>
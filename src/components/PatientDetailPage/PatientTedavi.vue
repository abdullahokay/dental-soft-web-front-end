<template>
    <div class="tedavi">
        <v-container>
            <v-tabs v-model="tab" bg-color="transparent" color="basil" fixed-tabs>
                <v-tab value="RANDEVU">RANDEVU</v-tab>
                <v-tab value="TEDAVİ">TEDAVİ</v-tab>
                <v-tab value="DOKTOR">DOKTOR</v-tab>
                <v-tab value="LABORATUVAR">LABORATUVAR</v-tab>
            </v-tabs>
            <v-window class="mt-16 px-4" v-model="tab">
                <v-row class="justify-center align-center">
                    <v-col cols="4" xl="4" lg="4" md="12" sm="12" class="xs-col align-self-start">
                        <v-window-item value="TEDAVİ">
                            <v-card color="basil" flat>
                                <div class="d-flex justify-space-between align-center mb-4">
                                    <v-card-title class="text-left font-weight-bold pl-0">Tedaviler</v-card-title>
                                    <v-btn color="#13C56B" prepend-icon="mdi-plus" variant="flat" width="115"
                                        class="text-white font-weight-bold">
                                        Tedavi Ekle
                                    </v-btn>
                                </div>
                                <div class="d-flex justify-space-between align-center">
                                    <v-select variant="outlined" density="compact" hide-details class="mr-4"
                                        placeholder="Doktor"></v-select>
                                    <v-select variant="outlined" density="compact" hide-details
                                        placeholder="Yüzde 10 fazlası"></v-select>
                                </div>
                                <v-divider class="ma-4"></v-divider>
                                <div class="d-flex justify-space-between align-center">
                                    <v-btn color="deep-purple-darken-3" variant="flat" width="115" class="text-white">
                                        Oral Diagnoz
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Endodonti
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Pedodonti
                                    </v-btn>
                                </div>
                                <div class="d-flex justify-space-between align-center mt-2">
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Protez
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Cerrahi
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Periodontoloji
                                    </v-btn>
                                </div>
                                <div class="d-flex justify-space-between align-center mt-2">
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Ortodonti
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Restoratif
                                    </v-btn>
                                    <v-btn color="grey" variant="flat" width="115" class="text-white">
                                        Tedaviler
                                    </v-btn>
                                </div>
                                <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-col>
                    <v-col cols="8" xl="6" lg="8" md="12" sm="12" class="xs-col align-self-start">
                        <v-window-item value="TEDAVİ">
                            <v-card color="basil" flat>
                                <div class="d-flex align-center ml-8 mb-4">
                                    <v-card-title class="text-left font-weight-bold pl-0">Tedaviler</v-card-title>
                                    <v-select placeholder="Tedavi" bg-color="purple-darken-3" color="white"
                                        variant="solo-filled" density="compact" hide-details
                                        class="align-self-center text-white"></v-select>
                                    <v-spacer></v-spacer>
                                </div>
                                <div class="d-flex mt-10 ml-5">
                                    <div class="photo mr-10">
                                        <div class="text-p font-weight-bold">1</div>
                                        <img src="../../assets/disler/1.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">18</div>
                                        <img src="../../assets/disler/18.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">17</div>
                                        <img src="../../assets/disler/17.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">16</div>
                                        <img src="../../assets/disler/16.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">15</div>
                                        <img src="../../assets/disler/15.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">14</div>
                                        <img src="../../assets/disler/14.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">13</div>
                                        <img src="../../assets/disler/13.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">12</div>
                                        <img src="../../assets/disler/12.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">11</div>
                                        <img src="../../assets/disler/11.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">21</div>
                                        <img src="../../assets/disler/21.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">22</div>
                                        <img src="../../assets/disler/22.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">23</div>
                                        <img src="../../assets/disler/23.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">24</div>
                                        <img src="../../assets/disler/24.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">25</div>
                                        <img src="../../assets/disler/25.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">26</div>
                                        <img src="../../assets/disler/26.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">27</div>
                                        <img src="../../assets/disler/27.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">28</div>
                                        <img src="../../assets/disler/28.svg" alt="0" width="40" />
                                    </div>
                                </div>
                                <div class="d-flex mt-10 ml-5">
                                    <div class="photo mr-10">
                                        <div class="text-p font-weight-bold">0</div>
                                        <img src="../../assets/disler/0.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">48</div>
                                        <img src="../../assets/disler/48.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">47</div>
                                        <img src="../../assets/disler/41.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">46</div>
                                        <img src="../../assets/disler/46.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">45</div>
                                        <img src="../../assets/disler/36.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">44</div>
                                        <img src="../../assets/disler/44.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">43</div>
                                        <img src="../../assets/disler/43.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">42</div>
                                        <img src="../../assets/disler/33.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">41</div>
                                        <img src="../../assets/disler/41.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">31</div>
                                        <img src="../../assets/disler/31.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">32</div>
                                        <img src="../../assets/disler/32.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">33</div>
                                        <img src="../../assets/disler/33.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">34</div>
                                        <img src="../../assets/disler/38.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">35</div>
                                        <img src="../../assets/disler/35.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">36</div>
                                        <img src="../../assets/disler/36.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">37</div>
                                        <img src="../../assets/disler/37.svg" alt="0" width="40" />
                                    </div>
                                    <div class="photo">
                                        <div class="text-p font-weight-bold">38</div>
                                        <img src="../../assets/disler/38.svg" alt="0" width="40" />
                                    </div>
                                </div>
                            </v-card>
                        </v-window-item>
                    </v-col>
                </v-row>
            </v-window>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'PatientTedavi',

    data() {
        return {
            tab: 'Appetizers',
            items: [
                'RANDEVU', 'TEDAVİ', 'DOKTOR', 'LABORATUVAR',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },

    methods: {

    }
}
</script>

<style scoped>
@media screen and (max-width: 37.5rem) {
    .xs-col {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

img {
    transition: transform 0.25s;
}

.photo:hover img {
    transform: scale(1.15);
}
</style>
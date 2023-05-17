<!-- <template>
    <div>
        {{ this.console() }}
        <v-text-field v-model="gun"></v-text-field>
        <VCalendar v-if="this.theme.global.current.value.dark" view="weekly" title-position="left" is-dark trim-weeks
        :attributes="this.attributes" />
        <VCalendar v-else view="weekly" title-position="left" trim-weeks :attributes="this.attributes" />
    </div>
</template>

<script>
import { useTheme } from 'vuetify/lib/framework.mjs';
import { ref } from 'vue';

export default {
    data() {
        return {
            
        }
    },

    setup() {
        const gun = ref(0);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const attributes = ref([
            {
                key: 'today',
                highlight: {
                    color: 'purple',
                    fillMode: 'solid',
                    contentClass: 'italic',
                },
                dates: new Date(year, month, gun.value),
            },
            // {
            //     highlight: {
            //         color: 'purple',
            //         fillMode: 'light',
            //     },
            //     dates: new Date(year, month, 17),
            // },
            // {
            //     highlight: {
            //         color: 'purple',
            //         fillMode: 'outline',
            //     },
            //     dates: new Date(year, month, 18),
            // },
        ]);
        const theme = useTheme()

        return {
            theme,
            attributes,
            gun
        }
    },

    methods: {
        console() {
            console.log("attr", this.attributes);
        }
    }

}
</script> -->
<template>
    <div>
        <VCalendar v-if="theme.global.current.value.dark" view="weekly" title-position="left" is-dark trim-weeks
            :attributes="attributes" />
        <VCalendar v-else view="weekly" title-position="left" trim-weeks :attributes="attributes" />
    </div>
</template>
  
<script>
import { useTheme } from 'vuetify/lib/framework';
import { ref } from 'vue';

export default {
    setup() {
        const gun = ref(12);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const attributes = ref([
            {
                key: 'today',
                highlight: {
                    color: '#2196F3',
                    fillMode: 'outline',
                    contentClass: 'italic',
                },
                dates: new Date(year, month, 16),
            },
            {
                key: 'today',
                highlight: {
                    color: '#2196F3',
                    fillMode: 'solid',
                    contentClass: 'italic',
                },
                dates: new Date(year, month, 18),
            },
        ]);
        const theme = useTheme();

        const updateDates = () => {
            const newDate = new Date(year, month, gun.value);
            attributes.value[0].dates = newDate;
        };

        const console = () => {
            console.log("attr", attributes.value);
        };

        return {
            theme,
            attributes,
            gun,
            updateDates,
            console,
        };
    },
};
</script>
  
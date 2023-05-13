<template>
    <div>
        <VCalendar v-if="this.theme.global.current.value.dark" view="weekly" title-position="left" is-dark trim-weeks />
        <VCalendar v-else view="weekly" title-position="left" trim-weeks />
    </div>
</template>

<script>
import { useTheme } from 'vuetify/lib/framework.mjs';
export default {
    setup() {
        const theme = useTheme()

        return {
            theme,
        }
    },

}
</script>
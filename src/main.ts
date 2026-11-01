import { createApp } from 'vue'
import {
    createVuesticEssential, VaLayout, VaNavbar, VaDropdown, VaDropdownContent, VaButton, VaButtonToggle
} from 'vuestic-ui'

import { setupI18n } from '@/services/i18n'
import router from '@/router'
import App from '@/App.vue'

import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'
import '@/style.css'

createApp(App)
    .use(createVuesticEssential({
        components: { VaLayout, VaNavbar, VaDropdown, VaDropdownContent, VaButton, VaButtonToggle },
        config: {
            colors: { presets: { light: { backgroundPrimary: '#ffffff' } } },
            // The settings cog is the only dropdown, this becomes its accessible name
            i18n: { toggleDropdown: 'Settings' }
        }
    }))
    .use(setupI18n())
    .use(router)
    .mount('#app')

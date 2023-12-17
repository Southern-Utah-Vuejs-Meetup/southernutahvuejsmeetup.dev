import { createApp } from 'vue'

import { setupI18n } from './services/i18n'
import router from './router'
import App from './App.vue'

import 'vuestic-ui/css'
import './style.css'
import { createVuestic } from 'vuestic-ui'

createApp(App)
    .use(createVuestic())
    .use(setupI18n())
    .use(router)
    .mount('#app')

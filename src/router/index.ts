import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { setupI18n, SUPPORT_LOCALES, setI18nLanguage, loadLocaleMessages, locales } from '../services/i18n'

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach(async (to, from) => {
    console.log(`Navigating to ${to.path} from ${from.path}`)
    const i18n = setupI18n()
    let paramsLocale = to.params.locale as string
    if (!paramsLocale)
        paramsLocale = i18n.global.availableLocales[0]

    if (paramsLocale && !SUPPORT_LOCALES.includes(paramsLocale)) {
        throw new Error('Invalid locale')
    }

    if (!Object.keys(locales).includes(paramsLocale)) {
        await loadLocaleMessages(i18n, paramsLocale)
    }

    setI18nLanguage(i18n, paramsLocale)
})

export default router

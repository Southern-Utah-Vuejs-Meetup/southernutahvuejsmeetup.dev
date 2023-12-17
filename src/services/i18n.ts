import { nextTick } from 'vue'
import { createI18n, I18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en-US', 'en']
export let i18n : I18n | null = null
export const locales : Record<string, Record<string, string>> = {}

export function setupI18n(options: Record<string, any> = { legacy: false, locale: navigator.language }) {
  if (!i18n) {
    i18n = createI18n({ ...options, missingWarn: false })
    console.log('setupI18n', i18n.global.availableLocales)
    setI18nLanguage(i18n, options.locale || i18n.global.availableLocales[0])
  }

  SUPPORT_LOCALES.forEach(async (supported_locale) => {
    i18n?.global.setDateTimeFormat(supported_locale, {
      short: { day: 'numeric', month: 'short', year: 'numeric' },
      long: { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' },
      calendar: { hour: 'numeric' }
    })
  })

  return i18n
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  if (typeof i18n.global.locale === 'string') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }

  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  console.log('loadLocaleMessages', locale)
  let messages = null
  try {
    console.log('loadLocaleMessages', locale)
    messages = await import(`./../locales/${locale}.json`)
  } catch (e) {
    console.log('loadLocaleMessages backup', locale.split('-')[0])
    if (locale.split('-').length > 1) {
      messages = await import(`./../locales/${locale.split('-')[0]}.json`)
    }
  }
  locales[locale] = messages.default

  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}
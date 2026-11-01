import { computed, ref, watch } from 'vue'
import { useColors } from 'vuestic-ui'

import { readPreference, resolveTheme, savePreference, ThemePreference } from '@/services/theme'

const DARK_QUERY = '(prefers-color-scheme: dark)'

function getStorage() {
  try {
    return window.localStorage
  } catch {
    return null
  }
}

const systemQuery = typeof window.matchMedia === 'function' ? window.matchMedia(DARK_QUERY) : null

// Shared by every caller so the top bar and the app root stay in sync
const preference = ref<ThemePreference>(readPreference(getStorage()))
const systemPrefersDark = ref(systemQuery?.matches ?? false)
const resolved = computed(() => resolveTheme(preference.value, systemPrefersDark.value))

systemQuery?.addEventListener('change', (event) => {
  systemPrefersDark.value = event.matches
})

export function useTheme() {
  function setPreference(value: ThemePreference) {
    preference.value = value
    savePreference(value, getStorage())
  }

  return { preference, resolved, setPreference }
}

// Call once from the app root, it pushes the resolved theme into Vuestic and the document
export function useThemeEffect() {
  const { applyPreset } = useColors()

  watch(resolved, (theme) => {
    applyPreset(theme)
    document.documentElement.style.colorScheme = theme
  }, { immediate: true })
}

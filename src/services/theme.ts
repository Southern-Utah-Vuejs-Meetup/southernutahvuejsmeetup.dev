export type ThemePreference = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

// Minimal slice of the Storage API so the logic can be tested without a browser
export type ThemeStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

// Storage can throw (blocked cookies, private mode), in which case the theme just follows the system
export function readPreference(storage: ThemeStorage | null): ThemePreference {
  try {
    const stored = storage?.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

// Only an explicit light/dark choice is stored; choosing system clears it
export function savePreference(preference: ThemePreference, storage: ThemeStorage | null) {
  try {
    if (preference === 'system') {
      storage?.removeItem(THEME_STORAGE_KEY)
    } else {
      storage?.setItem(THEME_STORAGE_KEY, preference)
    }
  } catch {
    // Nothing to do, the choice just won't persist
  }
}

export function resolveTheme(preference: ThemePreference, systemPrefersDark: boolean): ResolvedTheme {
  if (preference === 'system') return systemPrefersDark ? 'dark' : 'light'
  return preference
}

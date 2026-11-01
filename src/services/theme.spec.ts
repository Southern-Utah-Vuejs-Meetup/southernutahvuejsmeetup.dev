import { describe, test, expect } from 'vitest'
import { readPreference, savePreference, resolveTheme, THEME_STORAGE_KEY, ThemeStorage } from './theme'

function fakeStorage(initial: Record<string, string> = {}): ThemeStorage & { data: Record<string, string> } {
  const data = { ...initial }
  return {
    data,
    getItem: (key) => data[key] ?? null,
    setItem: (key, value) => { data[key] = value },
    removeItem: (key) => { delete data[key] }
  }
}

const brokenStorage: ThemeStorage = {
  getItem: () => { throw new Error('blocked') },
  setItem: () => { throw new Error('blocked') },
  removeItem: () => { throw new Error('blocked') }
}

describe('readPreference', () => {
  test('defaults to system when nothing is stored', () => {
    expect(readPreference(fakeStorage())).toBe('system')
  })
  test.each(['light', 'dark'] as const)('returns stored %s', (value) => {
    expect(readPreference(fakeStorage({ [THEME_STORAGE_KEY]: value }))).toBe(value)
  })
  test('ignores unknown stored values', () => {
    expect(readPreference(fakeStorage({ [THEME_STORAGE_KEY]: 'purple' }))).toBe('system')
  })
  test('falls back to system when storage throws or is missing', () => {
    expect(readPreference(brokenStorage)).toBe('system')
    expect(readPreference(null)).toBe('system')
  })
})

describe('savePreference', () => {
  test.each(['light', 'dark'] as const)('stores %s', (value) => {
    const storage = fakeStorage()
    savePreference(value, storage)
    expect(storage.data[THEME_STORAGE_KEY]).toBe(value)
  })
  test('system erases the stored value', () => {
    const storage = fakeStorage({ [THEME_STORAGE_KEY]: 'dark' })
    savePreference('system', storage)
    expect(THEME_STORAGE_KEY in storage.data).toBe(false)
  })
  test('does not throw when storage is blocked', () => {
    expect(() => savePreference('dark', brokenStorage)).not.toThrow()
    expect(() => savePreference('dark', null)).not.toThrow()
  })
})

describe('resolveTheme', () => {
  test('system follows the operating system', () => {
    expect(resolveTheme('system', true)).toBe('dark')
    expect(resolveTheme('system', false)).toBe('light')
  })
  test('explicit choices ignore the operating system', () => {
    expect(resolveTheme('light', true)).toBe('light')
    expect(resolveTheme('dark', false)).toBe('dark')
  })
})

<script setup lang="ts">
import { VaNavbar, VaDropdown, VaDropdownContent, VaButton, VaButtonToggle } from 'vuestic-ui'

import { useTheme } from '@/composables/useTheme'

const { preference, setPreference } = useTheme()

const options = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' }
]
</script>

<template>
  <VaNavbar class="top-bar">
    <template #right>
      <VaDropdown placement="bottom-end" :offset="[8, 0]">
        <template #anchor>
          <VaButton preset="secondary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </VaButton>
        </template>

        <VaDropdownContent class="settings-panel">
          <div class="settings-label">Theme</div>
          <VaButtonToggle
            :model-value="preference"
            :options="options"
            preset="secondary"
            color="textPrimary"
            grow
            @update:model-value="setPreference"
          />
        </VaDropdownContent>
      </VaDropdown>
    </template>
  </VaNavbar>
</template>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  padding-inline: 1.5rem;
}
.settings-panel {
  min-width: 240px;
}
.settings-label {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-bottom: 6px;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VaLayout } from 'vuestic-ui'

import AppTopBar from './components/AppTopBar.vue'
import { useThemeEffect } from './composables/useTheme'

useThemeEffect()
</script>

<template>
  <VaLayout>
    <template #top>
      <AppTopBar />
    </template>
    <template #content>
      <div class="main">
        <RouterView />
      </div>
    </template>
  </VaLayout>
</template>

<style lang="scss">
body {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>

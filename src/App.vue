<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VaLayout } from 'vuestic-ui'
</script>

<template>
  <VaLayout>
    <template #content>
      <div class="main">
        <RouterView />
      </div>
    </template>
  </VaLayout>
</template>

<style lang="scss">
body {
  --va-background-primary: #fff;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -moz-osx-font-smoothing: grayscale;
}
</style>
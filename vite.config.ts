import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Reads the "@/*" paths alias from tsconfig.json
    tsconfigPaths: true
  },
  build: {
    rollupOptions: {
      output: {
        // Split third-party code into separate files so it stays cached across site updates
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          const moduleName = id.split('node_modules/')[1].split('/')[0]
          if (moduleName === 'vuestic-ui') return 'vuestic'
          if (moduleName === 'vue' || moduleName === '@vue') return 'vue'
          return 'vendor'
        }
      }
    }
  }
})

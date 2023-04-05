import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // dont need include file extend .scss
        additionalData: `
         @import "./src/styles/00.settings/all-settings";
         @import "./src/styles/01.tools/all-tools";
         @import "./src/styles/03.components/all-components";
         @import "./src/styles/04.utilities/all-utilities";
         `
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})

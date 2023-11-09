import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/typed.scss";'
      }
    },
    postcss: {
      parser: require('postcss-scss'),
      plugins: [
        postcssNesting
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/luna-labsfinal/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nasa: resolve(__dirname, 'nasa.html'),
        novel: resolve(__dirname, 'novel.html'),
        crater: resolve(__dirname, 'crater.html'),
      },
    },
  },
})

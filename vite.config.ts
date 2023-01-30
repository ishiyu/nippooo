import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '~~': `${__dirname}/`,
      '~~/': `${__dirname}/`,
      '@@': `${__dirname}/`,
      '@@/': `${__dirname}/`,
      '~': `${__dirname}/src/`,
      '~/': `${__dirname}/src/`,
      '@': `${__dirname}/src/`,
      '@/': `${__dirname}/src/`,
      'assets': `${__dirname}/src/assets/`,
      'assets/': `${__dirname}/src/assets/`,
    },
  },
})

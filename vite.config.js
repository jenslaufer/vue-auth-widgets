import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VueAuthWidgets',
      fileName: (format) => `vue-auth-widgets.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'axios', '@vuelidate/core', '@vuelidate/validators'],
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios',
        },
      },
    },
  },
})
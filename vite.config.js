import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue()],
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
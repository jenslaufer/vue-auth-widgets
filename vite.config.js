import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    tailwindcss(),
    vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VueAuthWidgets',
      fileName: (format) => `vue-auth-widgets.${format}.js`,
    },
    cssCodeSplit: false,
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
# @solytics/vue-auth-widgets

Reusable Vue 3 auth widgets (Login, Registration, and combined LoginOrRegistration) built with Vite (library mode).  
Drop-in UI with Vuelidate validation. Bring your own API by passing props/handlers — or let the components call your endpoints via `axios` using `baseUrl`/`endpoints`.

## Install

```bash
npm i @solytics/vue-auth-widgets
# or
pnpm add @solytics/vue-auth-widgets
```

Peer deps: `vue@^3`, plus `@vuelidate/core` and `@vuelidate/validators`. Uses Tailwind utility classes in markup — optional but recommended. If you don't use Tailwind, it still works, but you'll want to add your own styles.

## Quick start

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@solytics/vue-auth-widgets/dist/style.css' // (only if you add styles later)
createApp(App).mount('#app')
```

```vue
<!-- In any SFC -->
<script setup lang="ts">
import { LoginOrRegistration } from '@solytics/vue-auth-widgets'

function onApiKeyChange(key: string) {
  // save token / key to your store
}
</script>

<template>
  <LoginOrRegistration
    :base-url="import.meta.env.VITE_API_BASE"
    :endpoints="{
      login: '/user',
      register: '/user' // adjust to your API
    }"
    @api-key-change="onApiKeyChange"
  />
</template>
```

## Props

All three components share the same props where relevant:

- `baseUrl?: string` – API base (e.g. `https://api.example.com`)  
- `endpoints?: { login?: string; register?: string }` – relative endpoints
- `axiosConfig?: Record<string, any>` – default config passed to axios calls (e.g. headers)
- `labels?: Partial<Labels>` – replace UI labels (see `src/types.ts`)
- `useSubmitHandlers?: boolean` – if `true`, components **won't** call axios; instead they emit `submit` with the payload so you can handle API externally.

## Events

- `api-key-change` – emitted with the token/key on successful login/registration (if axios flow is used).
- `submit` – emitted with the payload `{ email, password }` / `{ firstName, ... }` when `useSubmitHandlers` is `true`.

## Exports

```ts
import { LoginForm, RegistrationForm, LoginOrRegistration } from '@solytics/vue-auth-widgets'
```

## Build locally

```bash
npm i
npm run build
```

This produces `dist/` with ESM + UMD builds and d.ts types.

## License

MIT
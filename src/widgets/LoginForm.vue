<template>
  <div class="w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center">{{ labels.loginTitle }}</h2>

    <p v-if="errorMessage" class="text-red-500 mt-1">{{ errorMessage }}</p>

    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-semibold">{{ labels.email }}</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        class="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
        required
      />
      <div v-if="$v.email.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
        <div v-for="error in $v.email.$errors" :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label for="password" class="block text-gray-700 font-semibold">{{ labels.password }}</label>
      <input
        id="password"
        type="password"
        v-model="form.password"
        class="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none"
        required
      />
      <div v-if="$v.password.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
        <div v-for="error in $v.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </div>
      </div>
    </div>

    <button
      class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md focus:outline-none"
      @click="onSubmit"
    >
      {{ labels.submitLogin }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { emailRules, passwordRules } from '../validation'
import type { Endpoints, AxiosConfig, Labels } from '../types'
import { postJson } from '../utils'

const API_KEY_CHANGE_EMIT = 'api-key-change'
const SUBMIT_EMIT = 'submit'
const emit = defineEmits<[
  (e: 'api-key-change', key: string) => void,
  (e: 'submit', payload: { email: string; password: string }) => void
]>()

const props = defineProps<{
  baseUrl?: string
  endpoints?: Endpoints
  axiosConfig?: AxiosConfig
  labels?: Partial<Labels>
  useSubmitHandlers?: boolean
}>()

const defaultLabels: Labels = {
  loginTitle: 'Login',
  registerTitle: 'Registration',
  email: 'Email',
  password: 'Password',
  firstName: 'First Name',
  lastName: 'Last Name',
  submitLogin: 'Login',
  submitRegister: 'Register',
  toggleToLogin: 'Login',
  toggleToRegister: 'Registration',
  haveAccount: 'Do you have an account?',
  dontHaveAccount: "Don't have an account?",
  errorUserExists: 'User is already registered'
}
const labels = computed(() => ({ ...defaultLabels, ...(props.labels || {}) }))

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: emailRules,
  password: passwordRules
}

const v$ = useVuelidate(rules, form)
const $v = v$ as any

const errorMessage = ref('')

async function onSubmit() {
  await v$.value.$validate()
  if (v$.value.$invalid) return

  const payload = { email: form.email, password: form.password }

  if (props.useSubmitHandlers) {
    emit('submit', payload)
    return
  }

  try {
    const base = props.baseUrl ?? ''
    const endpoint = props.endpoints?.login ?? '/user'
    const url = `${base}${endpoint}`
    // Example: your API should return an object with a key/token.
    const data = await postJson(url, payload, props.axiosConfig || {})
    const key = data?.key || data?.token || data?.apiKey
    if (key) emit('api-key-change', key)
  } catch (err: any) {
    errorMessage.value = String(err?.message || err)
  }
}

onMounted(() => {
  v$.value.$touch()
})
</script>
<template>
  <div class="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
    <LoginForm
      v-if="isLogin"
      v-bind="forwarded"
      @api-key-change="(k) => emit('api-key-change', k)"
      @submit="(p) => emit('submit', p)"
    />
    <RegistrationForm
      v-else
      v-bind="forwarded"
      @api-key-change="(k) => emit('api-key-change', k)"
      @submit="(p) => emit('submit', p)"
    />

    <div class="mt-4 text-center">
      <p class="text-gray-600" v-if="isLogin">
        {{ labels.dontHaveAccount }}
        <button @click="toggle" class="text-indigo-500 hover:underline">
          {{ labels.toggleToRegister }}
        </button>
      </p>
      <p class="text-gray-700 font-regular" v-else>
        {{ labels.haveAccount }}
        <button @click="toggle" class="text-indigo-500 hover:underline">
          {{ labels.toggleToLogin }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LoginForm from './LoginForm.vue'
import RegistrationForm from './RegistrationForm.vue'
import type { Endpoints, AxiosConfig, Labels } from '../types'

const emit = defineEmits<[
  (e: 'api-key-change', key: string) => void,
  (e: 'submit', payload: any) => void
]>()

const props = defineProps<{
  baseUrl?: string
  endpoints?: Endpoints
  axiosConfig?: AxiosConfig
  labels?: Partial<Labels>
  useSubmitHandlers?: boolean
  defaultMode?: 'login' | 'register'
}>()

const isLogin = ref((props.defaultMode ?? 'login') === 'login')

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

const forwarded = computed(() => ({
  baseUrl: props.baseUrl,
  endpoints: props.endpoints,
  axiosConfig: props.axiosConfig,
  labels: labels.value,
  useSubmitHandlers: props.useSubmitHandlers
}))

function toggle() {
  isLogin.value = !isLogin.value
}
</script>
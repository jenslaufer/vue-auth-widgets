<template>
  <div class="w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center">{{ labels.loginTitle }}</h2>
    <p v-if="errorMessage" class="text-red-500 mt-1">{{ errorMessage }}</p>
    <div class="mb-4">
      <label class="block text-gray-700 font-semibold">{{ labels.email }}</label>
      <input v-model="form.email" type="email" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      <div v-if="$v.email.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
        <div v-for="error in $v.email.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-semibold">{{ labels.password }}</label>
      <input v-model="form.password" type="password" class="mt-1 block w-full px-3 py-2 border rounded-md" />
      <div v-if="$v.password.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
        <div v-for="error in $v.password.$errors" :key="error.$uid">{{ error.$message }}</div>
      </div>
    </div>
    <button class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md" @click="onSubmit">
      {{ labels.submitLogin }}
    </button>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { emailRules, passwordRules } from '../validation'
import { postJson } from '../utils'
const emit = defineEmits(['api-key-change', 'submit'])
const props = defineProps({ baseUrl: String, endpoints: Object, axiosConfig: Object, labels: Object, useSubmitHandlers: Boolean })
const defaultLabels = { loginTitle: 'Login', registerTitle: 'Registration', email: 'Email', password: 'Password', firstName: 'First Name', lastName: 'Last Name', submitLogin: 'Login', submitRegister: 'Register', toggleToLogin: 'Login', toggleToRegister: 'Registration', haveAccount: 'Do you have an account?', dontHaveAccount: "Don't have an account?", errorUserExists: 'User is already registered' }
const labels = computed(() => ({ ...defaultLabels, ...(props.labels || {}) }))
const form = reactive({ email: '', password: '' })
const rules = { email: emailRules, password: passwordRules }
const v$ = useVuelidate(rules, form)
const $v = v$
const errorMessage = ref('')
async function onSubmit() {
  await v$.value.$validate()
  if (v$.value.$invalid) return
  const payload = { email: form.email, password: form.password }
  if (props.useSubmitHandlers) { emit('submit', payload); return }
  try {
    const base = props.baseUrl ?? ''
    const endpoint = props.endpoints?.login ?? '/user'
    const url = `${base}${endpoint}`
    const data = await postJson(url, payload, props.axiosConfig || {})
    const key = data?.key || data?.token || data?.apiKey
    if (key) emit('api-key-change', key)
  } catch (err) { errorMessage.value = String(err?.message || err) }
}
onMounted(() => { v$.value.$touch() })
</script>

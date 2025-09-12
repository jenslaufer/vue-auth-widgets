<template>
  <div class="bg-white p-8 rounded-lg w-full max-w-2xl mx-auto">
    <LoginForm v-if="isLogin" v-bind="forwarded" @api-key-change="(k) => emit('api-key-change', k)" @submit="(p) => emit('submit', p)" />
    <RegistrationForm v-else v-bind="forwarded" @api-key-change="(k) => emit('api-key-change', k)" @submit="(p) => emit('submit', p)" />
    <div class="mt-4 text-center">
      <p v-if="isLogin">{{ labels.dontHaveAccount }} <button @click="toggle" class="text-indigo-500 hover:underline">{{ labels.toggleToRegister }}</button></p>
      <p v-else>{{ labels.haveAccount }} <button @click="toggle" class="text-indigo-500 hover:underline">{{ labels.toggleToLogin }}</button></p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import LoginForm from './LoginForm.vue'
import RegistrationForm from './RegistrationForm.vue'
const emit = defineEmits(['api-key-change', 'submit'])
const props = defineProps({ baseUrl: String, endpoints: Object, axiosConfig: Object, labels: Object, useSubmitHandlers: Boolean, defaultMode: String })
const isLogin = ref((props.defaultMode ?? 'login') === 'login')
const defaultLabels = { loginTitle:'Login', registerTitle:'Registration', email:'Email', password:'Password', firstName:'First Name', lastName:'Last Name', submitLogin:'Login', submitRegister:'Register', toggleToLogin:'Login', toggleToRegister:'Registration', haveAccount:'Do you have an account?', dontHaveAccount:"Don't have an account?", errorUserExists:'User is already registered' }
const labels = computed(() => ({ ...defaultLabels, ...(props.labels || {}) }))
const forwarded = computed(() => ({ baseUrl: props.baseUrl, endpoints: props.endpoints, axiosConfig: props.axiosConfig, labels: labels.value, useSubmitHandlers: props.useSubmitHandlers }))
function toggle() { isLogin.value = !isLogin.value }
</script>

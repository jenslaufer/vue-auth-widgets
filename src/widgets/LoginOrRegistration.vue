<template>
    <div class="bg-white p-8 rounded-lg w-full max-w-2xl">
        <login-form v-if="isLogin" :product-name="productName" :base-url="baseUrl" :button-class="buttonClass"
            :label-class="labelClass" :input-class="inputClass" :error-message-class="errorMessageClass"
            :button-label="loginButtonLabel" @api-key-change="propagateApiKeyChange" />
        <registration-form v-else :product-name="productName" :base-url="baseUrl" :button-class="buttonClass"
            :label-class="labelClass" :input-class="inputClass" :error-message-class="errorMessageClass"
            :button-label="registrationButtonLabel" @api-key-change="propagateApiKeyChange" />
        <div class="mt-4 text-center">
            <p class="text-gray-600" v-if="isLogin">
                Don't have an account?
                <button @click="toggle" :class="linkClass">{{ registrationButtonLabel }}</button>
            </p>
            <p class="text-gray-700 font-regular" v-else>
                Do you have an account?
                <button @click="toggle" :class="linkClass">{{ loginButtonLabel }}</button>
            </p>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import LoginForm from './LoginForm.vue'
import RegistrationForm from './RegistrationForm.vue'

const props = defineProps({
    productName: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true
    },
    linkClass: {
        type: String,
        required: false,
        default: 'text-indigo-500 hover:underline'
    },
    buttonClass: {
        type: String,
        required: false,
        default: 'w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    },
    labelClass: {
        type: String,
        required: false,
        default: 'block text-gray-700 font-semibold'
    },
    inputClass: {
        type: String,
        required: false,
        default: 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
    },
    errorMessageClass: {
        type: String,
        required: false,
        default: 'text-red-500 text-sm mt-1 font-semibold'
    },
    loginButtonLabel: {
        type: String,
        required: false,
        default: 'Login'
    },
    registrationButtonLabel: {
        type: String,
        required: false,
        default: 'Register'
    },
});


const API_KEY_CHANGE_EMIT = 'api-key-change'
const emit = defineEmits([API_KEY_CHANGE_EMIT]);

const isLogin = ref(true)

const propagateApiKeyChange = (key) => {
    emit(API_KEY_CHANGE_EMIT, key);
}

const toggle = () => {
    isLogin.value = !isLogin.value
}
</script>
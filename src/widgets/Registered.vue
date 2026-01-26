<template>
    <slot v-if="!isUnregistered" />
    <login-or-registration v-else :product-name="productName" :base-url="baseUrl"
        input-class="w-full bg-white px-3 py-3 text-2xl border border-gray-400 rounded-md focus:outline-none focus:ring-2"
        button-class="w-full mt-6 text-white text-2xl bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150"
        @api-key-change="apiKeyChange" />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import LoginOrRegistration from './LoginOrRegistration.vue';

const props = defineProps({
    keyName: {
        type: String,
        required: true
    },
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
        default: 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
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
    buttonLabel: {
        type: String,
        required: true
    },
});

const KEY_CHANGE_EMIT = 'api-key-change'
const emit = defineEmits([KEY_CHANGE_EMIT]);

const key = ref('')
const isUnregistered = ref(true)

const apiKeyChange = (obj) => {
    key.value = obj.key
    localStorage.setItem(props.keyName, key.value)
    isUnregistered.value = false
    emit(KEY_CHANGE_EMIT, key.value)
}

onMounted(() => {
    key.value = localStorage.getItem(props.keyName)
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    if (key.value && uuidPattern.test(key.value)) {
        isUnregistered.value = false
        //emit(KEY_CHANGE_EMIT, key.value)
    } else {
        isUnregistered.value = true
    }
})
</script>
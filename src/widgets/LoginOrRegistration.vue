<template>
    <div class="bg-white p-8 rounded-lg w-full max-w-2xl">
        <login-form v-if="isLogin" :product-name="productName" :base-url="baseUrl"
            @api-key-change="propagateApiKeyChange" />
        <registration-form v-else :product-name="productName" :base-url="baseUrl"
            @api-key-change="propagateApiKeyChange" />
        <div class="mt-4 text-center">
            <p class="text-gray-600" v-if="isLogin">
                Don't have an account?
                <button @click="toggle" class="text-indigo-500 hover:underline">Registration</button>
            </p>
            <p class="text-gray-700 font-regular" v-else>
                Do you have an account?
                <button @click="toggle" class="text-indigo-500 hover:underline">Login</button>
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
    }
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
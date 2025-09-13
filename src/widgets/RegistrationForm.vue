<template>

    <h2 class="text-2xl font-bold mb-6 text-center">Registration</h2>
    <p v-if="errorMessage" class="text-red-500 mt-1">{{ errorMessage }}</p>

    <div class="mb-4">
        <label for="firstName" class="block text-gray-700 font-semibold">First Name</label>
        <input type="text" id="firstName" v-model="user.firstName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        <div v-if="$v.firstName.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
            <div v-for="error in $v.firstName.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="lastName" class="block text-gray-700 font-semibold">Last Name</label>
        <input type="text" id="lastName" v-model="user.lastName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        <div v-if="$v.lastName.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
            <div v-for="error in $v.lastName.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input type="email" id="email" v-model="user.email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        <div v-if="$v.email.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
            <div v-for="error in $v.email.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-6">
        <label for="password" class="block text-gray-700 font-semibold">Password</label>
        <input type="password" id="password" v-model="user.password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required>
        <div v-if="$v.password.$errors.length" class="text-red-500 text-sm mt-1 font-semibold">
            <div v-for="error in $v.password.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <button @click="register" :disabled="$v.$invalid"
        class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Let
        me in!</button>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'


const API_KEY_CHANGE_EMIT = 'api-key-change'

const emit = defineEmits([API_KEY_CHANGE_EMIT]);

const errorMessage = ref('')

const key = ref(crypto.randomUUID())

const user = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})


const rules = {
    firstName: { required, minLength: minLength(2) },
    lastName: { required, minLength: minLength(2) },
    email: { required, email },
    password: { required, minLength: minLength(8) }
}
const $v = useVuelidate(rules, user)


const propagateApiKeyChange = (key) => {
    emit(API_KEY_CHANGE_EMIT, { key: key });
}

const register = async (event) => {
    event.preventDefault();
    errorMessage.value = '';

    const payload = {
        "credentials.email": user.value.email,
        "credentials.product": `${import.meta.env.VITE_PRODUCT_NAME}`,
        password: user.value.password,
        ...{ key: key.value }
    };

    try {
        const baseUrl = import.meta.env.VITE_API_BASE;
        let apiKey;

        payload.firstname = user.value.firstName;
        payload.lastname = user.value.lastName;

        await axios.post(`${baseUrl}/user`, payload, {
            headers: { 'Content-Type': 'application/json' }
        });

        apiKey = payload.key;

        propagateApiKeyChange(apiKey);
    } catch (error) {
        if (error.response?.status === 422) {
            errorMessage.value = 'User is already registered';
        } else {
            errorMessage.value = `${error}`;
        }
    }
};

onMounted(() => {
    $v.value.$touch();
});

</script>
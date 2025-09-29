<template>
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
    <p v-if="errorMessage" class="text-red-500 mt-1">{{ errorMessage }}</p>


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
    <button @click="login" :disabled="$v.$invalid" :class="buttonClass">Login</button>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


const props = defineProps({
    productName: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true
    },
    buttonClass: {
        type: String,
        required: false,
        default: 'w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 disabled:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    }
});

const API_KEY_CHANGE_EMIT = 'api-key-change'
const emit = defineEmits([API_KEY_CHANGE_EMIT]);

const errorMessage = ref('')

const user = ref({
    email: '',
    password: ''
})


const rules = {
    email: { required, email },
    password: { required }
}
const $v = useVuelidate(rules, user)

const propagateApiKeyChange = (key) => {
    emit(API_KEY_CHANGE_EMIT, { key: key });
}

const login = async (event) => {
    event.preventDefault();
    errorMessage.value = '';

    const payload = {
        "credentials.email": user.value.email,
        "credentials.product": props.productName,
        password: user.value.password
    };

    try {
        let response;
        let apiKey;

        response = await axios.get(`${props.baseUrl}/user?where=${encodeURIComponent(JSON.stringify(payload))}`);

        if (!response.data._items || response.data._items.length === 0) {
            errorMessage.value = 'Invalid login';
            return;
        }

        apiKey = response.data._items[0].key;

        propagateApiKeyChange(apiKey);
    } catch (error) {
        errorMessage.value = `${error}`;
    }
};

onMounted(() => {
    $v.value.$touch();
});

</script>
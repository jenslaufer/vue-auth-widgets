<template>
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
    <p v-if="errorMessage" :class="errorMessageClass">{{ errorMessage }}</p>
    <div class="mb-4">
        <label for="email" :class="labelClass">Email</label>
        <input type="email" id="email" v-model="user.email" :class="[`${inputClass}`,
        $v.email.$errors ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required>
        <div v-if="$v.email.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.email.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-6">
        <label for="password" :class="labelClass">Password</label>
        <input type="password" id="password" v-model="user.password" :class="[`${inputClass}`,
        $v.password.$errors ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required>
        <div v-if="$v.password.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.password.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <button @click="login" :disabled="$v.$invalid" :class="buttonClass">{{ buttonLabel }}</button>

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
        required: true
    },
    labelClass: {
        type: String,
        required: true
    },
    inputClass: {
        type: String,
        required: true
    },
    errorMessageClass: {
        type: String,
        required: true
    },
    buttonLabel: {
        type: String,
        required: true
    },
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
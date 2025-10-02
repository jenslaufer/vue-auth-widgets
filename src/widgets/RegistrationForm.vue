<template>

    <h2 class="text-2xl font-bold mb-6 text-center">Registration</h2>
    <p v-if="errorMessage" :class="errorMessageClass">{{ errorMessage }}</p>
    <div class="mb-4">
        <label for="firstName" :class="labelClass">First Name</label>
        <input type="text" id="firstName" v-model="user.firstName" :class="inputClass" required>
        <div v-if="$v.firstName.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.firstName.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="lastName" :class="labelClass">Last Name</label>
        <input type="text" id="lastName" v-model="user.lastName" :class="inputClass" required>
        <div v-if="$v.lastName.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.lastName.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="email" :class="labelClass">Email</label>
        <input type="email" id="email" v-model="user.email" :class="inputClass" required>
        <div v-if="$v.email.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.email.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <div class="mb-6">
        <label for="password" :class="labelClass">Password</label>
        <input type="password" id="password" v-model="user.password" :class="[`${inputClass}`,
        $v.password.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required>
        <div v-if="$v.password.$errors.length" :class="errorMessageClass">
            <div v-for="error in $v.password.$errors" :key="error.$uid">
                {{ error.$message }}
            </div>
        </div>
    </div>
    <button @click="register" :disabled="$v.$invalid" :class="buttonClass">{{ buttonLabel }}</button>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'


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
        "credentials.product": props.productName,
        password: user.value.password,
        ...{ key: key.value }
    };

    try {
        let apiKey;

        payload.firstname = user.value.firstName;
        payload.lastname = user.value.lastName;

        await axios.post(`${props.baseUrl}/user`, payload, {
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
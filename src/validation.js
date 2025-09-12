import { required, email, minLength } from '@vuelidate/validators'

export const emailRules = { required, email }
export const passwordRules = { required, minLength: minLength(6) }
export const firstNameRules = { required }
export const lastNameRules = { required }

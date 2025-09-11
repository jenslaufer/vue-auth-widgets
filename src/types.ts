export type Labels = {
  loginTitle: string
  registerTitle: string
  email: string
  password: string
  firstName: string
  lastName: string
  submitLogin: string
  submitRegister: string
  toggleToLogin: string
  toggleToRegister: string
  haveAccount: string
  dontHaveAccount: string
  errorUserExists: string
}

export type Endpoints = {
  login?: string
  register?: string
}

export type AxiosConfig = Record<string, any>
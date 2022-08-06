export const inputFieldValues = [
  {
    name: 'email',
    label: 'Email',
    id: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    id: 'password',
    password: true,
  },
  {
    name: 'confirmPassword',
    label: 'confirmPassword',
    id: 'confirmPassword',
    password: true,
  },
]
export const initialFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  formSubmitted: false,
  success: false,
}

import * as yup from 'yup'

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required('Nome obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),

  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),

  tel: yup.string().required('Telefone obrigatório'),

  password: yup
    .string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(20, 'Senha deve ter no máximo 20 caracteres')
    .required('Senha obrigatória'),

  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password'), ''], 'Senhas não conferem'),
})

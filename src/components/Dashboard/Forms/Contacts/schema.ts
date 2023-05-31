import * as yup from "yup"

export const formSchemaEdit = yup.object().shape({
    name: yup
        .string()
        .optional(),
    email: yup
        .string()
        .optional()
        .email("Email inválido"),
    cellphone: yup
        .string()
        .optional()
})

export const formSchemaCreate = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "É preciso ter um nome válido"),
    email: yup
        .string()
        .required("O email é obrigatório")
        .email("Email inválido"),
    cellphone: yup
        .string()
        .min(7, 'O telefone precisa ter no mínimo 7 dígitos')
        .required("O telefone é obrigatório")
})
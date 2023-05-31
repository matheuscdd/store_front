import { UseFormRegisterReturn } from "react-hook-form"

type tOptionsRegister = "password" | "email" | "name" | "cellphone" | "passwordC"

export interface iInput {
    id: string
    label: string
    placeholder: string
    disabled: boolean
    error?: string
    type: string
    register:  UseFormRegisterReturn<tOptionsRegister>
}
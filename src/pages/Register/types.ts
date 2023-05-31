import { iFormLoginValues } from "../Login/types"

export interface iFormRegisterValues extends iFormLoginValues {
    name: string
    cellphone: number
    passwordC: string
}
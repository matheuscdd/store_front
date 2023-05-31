import { iFormLoginValues } from "../../pages/Login/types"
import { iFormRegisterValues } from "../../pages/Register/types"

export interface iUser {
    id: string
	created_at: Date
	name: string
	email: string
	cellphone: string
}

export interface iUserContext {
    user: iUser | null
    loadGlobal: boolean
    loadForm: boolean
    isAuth: boolean
    submitLogin: (currData: iFormLoginValues) => Promise<void>;
    submitRegister: (currData: iFormRegisterValues) => Promise<void>;
}

export interface iUserProviderProps {
    children: React.ReactNode;
}



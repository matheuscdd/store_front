import { iFormContactEdit } from "../../components/Dashboard/Forms/Contacts/types"
import { iFormLoginValues } from "../../pages/Login/types"
import { iFormRegisterValues } from "../../pages/Register/types"

export interface iUser {
    id: string
	created_at: Date
	name: string
	email: string
	cellphone: string
    img: string
}

export interface iUserContext {
    user: iUser | null
    loadForm: boolean
    isAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
    contacts: iContact[] | null
    deleteContact(id: string): Promise<void>
    submitLogin: (currData: iFormLoginValues) => Promise<void>
    submitRegister: (currData: iFormRegisterValues) => Promise<void>
    createContact(data: any, id: string | undefined, setState: React.Dispatch<React.SetStateAction<boolean>>): Promise<void>
    editContact(data: iFormContactEdit, id: string, setState: React.Dispatch<React.SetStateAction<boolean>>): Promise<void>
}

export interface iUserProviderProps {
    children: React.ReactNode
}

export interface iContact {
    id: string
    name: string
    email: string
    img: string
    cellphone: string
    created_at: string
}


import { createContext, useState, useEffect } from "react"
import { iUser, iUserContext, iUserProviderProps } from "./types"
import { iFormLoginValues } from "../../pages/Login/types"
import { iFormRegisterValues } from "../../pages/Register/types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({} as iUserContext)

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null)
    const [loadGlobal, setLoadGlobal] = useState<boolean>(true)
    const [loadForm, setLoadForm] = useState<boolean>(false)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const navigate = useNavigate()
    const TOKEN = "@token" 
    console.log(user)

    async function submitLogin(currData: iFormLoginValues) {
        setLoadForm(true)
        const LOAD = "load"
        toast.loading('Carregando...', {toastId: LOAD});

        const common = () => {
            setLoadForm(false)
            toast.dismiss(LOAD)
        }

        api.post("/login", currData)
            .then(res => {
                const token: string = res.data.token
                localStorage.setItem(TOKEN, token)
                setToken(token)
                getProfile(token)
                setIsAuth(true)
                toast.success('Login realizado com sucesso')
                navigate("/dashboard")
                common()
            })
            .catch(err => {
                console.error(err)
                toast.error('Erro: Tente novamente') 
                common() 
            })
    }

    async function getProfile(token: string) {
        api.get("/clients/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => setUser(res.data))
            .catch(err => {
                console.log(err)
                toast.error("Ops! Algo deu errado")
                setUser(null)
            })
    }
    
    async function submitRegister(currData: iFormRegisterValues) {
        null
    }

    return (
        <UserContext.Provider value={{
            user,
            loadForm,
            loadGlobal,
            isAuth,
            submitLogin,
            submitRegister
        }}>
            { children }
        </UserContext.Provider>
    )
}
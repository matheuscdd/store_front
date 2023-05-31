import { createContext, useState, useEffect } from "react"
import { iUser, iUserContext, iUserProviderProps } from "./types"
import { iFormLoginValues } from "../../pages/Login/types"
import { iFormRegisterValues } from "../../pages/Register/types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { configTokenReq } from "../../functions"

export const UserContext = createContext({} as iUserContext)

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null)
    const [loadGlobal, setLoadGlobal] = useState<boolean>(true)
    const [loadForm, setLoadForm] = useState<boolean>(false)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const navigate = useNavigate()
    const TOKEN = "@token" 
    
    const LOAD = "load"
    function commonFormControl() {
        setLoadForm(false)
        toast.dismiss(LOAD)
    }

    function successLoginRegister(path: string, msg: string) {
        toast.success(msg)
        navigate(path)
        commonFormControl()
    }
    
    function errorRequests(err: Error, msg: string) {
        console.log(err)
        toast.error(msg)
        commonFormControl()
    }

    function startFormLoginRegister() {
        setLoadForm(true)
        toast.loading('Carregando...', {toastId: LOAD})
    }


    async function submitLogin(currData: iFormLoginValues) {
        startFormLoginRegister()
        api.post("/login", currData)
            .then(res => {
                const token: string = res.data.token
                localStorage.setItem(TOKEN, token)
                setToken(token)
                getProfile(token)
                setIsAuth(true)
                successLoginRegister("/dashboard", "Login realizado com sucesso")
            })
            .catch(err => errorRequests(err, "Erro: Tente novamente"))
    }

    async function getProfile(token: string) {
        api.get("/clients/profile", configTokenReq(token))
            .then(res => setUser(res.data))
            .catch(err => {
                errorRequests(err, "Ops! Algo deu errado")
                setUser(null)
            })
    }
    
    async function submitRegister(currData: iFormRegisterValues) {
        startFormLoginRegister()
        api.post("/clients", currData)
            .then(_ => successLoginRegister("/login", "Cliente cadastrado com sucesso"))
            .catch(err => errorRequests(err, "Erro: Tente novamente"))
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
import { createContext, useState, useEffect } from "react"
import { iContact, iUser, iUserContext, iUserProviderProps } from "./types"
import { iFormLoginValues } from "../../pages/Login/types"
import { iFormRegisterValues } from "../../pages/Register/types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


export const UserContext = createContext({} as iUserContext)

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null)
    const [loadForm, setLoadForm] = useState<boolean>(false)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [token, setToken] = useState<string | null>(null)
    const [contacts, setContacts] = useState<iContact[] | null>(null)
    const navigate = useNavigate()
    const TOKEN = "@token" 
    
    const LOAD = "load"
    const functionsLoginRegister = {
        startForm: function() {
            setLoadForm(true)
            toast.loading('Carregando...', {toastId: LOAD})
        },
        success: function(msg: string, path: string | null = null,) {
            toast.success(msg)
            if (path) navigate(path)
            commonFormControl()
        },
    }
    
    function commonFormControl() {
        setLoadForm(false)
        toast.dismiss(LOAD)
    }

    function errorRequests(err: Error, msg: string) {
        console.log(err)
        toast.error(msg, { toastId: "error" })
        setTimeout(() =>  toast.dismiss("error"), 5000)
        commonFormControl()
    }

    function configTokenReq(tokenAuth: string = token!) {
        return {headers: {Authorization: `Bearer ${tokenAuth}`}}
    }

    async function submitLogin(currData: iFormLoginValues) {
        functionsLoginRegister.startForm()
        api.post("/login", currData)
            .then(res => {
                const token: string = res.data.token
                localStorage.setItem(TOKEN, token)
                getProfile(token)
                functionsLoginRegister.success("Login realizado com sucesso")
            })
            .catch(err => errorRequests(err, "Erro: Tente novamente"))
    }

    async function getProfile(tokenAuth: string = token!, showError = true) {
        api.get("/clients/profile", configTokenReq(tokenAuth))
            .then(res => {
                setUser(res.data)
                navigate("/dashboard")
                setIsAuth(true)
                setToken(tokenAuth)
                getContacts(tokenAuth)
            })
            .catch(err => {
                if (showError) errorRequests(err, "Ops! Algo deu errado")
                setUser(null)
                localStorage.clear()
            })
    }
    
    async function submitRegister(currData: iFormRegisterValues) {
        functionsLoginRegister.startForm()
        api.post("/clients", currData)
            .then(() => functionsLoginRegister.success("Cliente cadastrado com sucesso", "/login"))
            .catch(err => errorRequests(err, "Erro: Tente novamente"))
    }

    async function getContacts(tokenAuth: string = token!) {
        api.get("/contacts", configTokenReq(tokenAuth))
            .then(res => setContacts(res.data))
            .catch(err => errorRequests(err, "Erro: não foi possível carregar os contatos"))
    } 

    async function autoLogin() {
        const token = localStorage.getItem(TOKEN)
        if (token) getProfile(token)
    }

    async function deleteContact(id: string) {
        functionsLoginRegister.startForm()
        api.delete("/contacts/" + id, configTokenReq())
            .then(() => {
                toast.warn("Alerta: Contato deletado")
                commonFormControl()
                getContacts()
            })
            .catch(err => {
                errorRequests(err, "Erro: não foi possível deletar seu contato")
                commonFormControl()
            })
    }

    async function createContact(data: any, id = "", setState: React.Dispatch<React.SetStateAction<boolean>>) {
        functionsLoginRegister.startForm()
        api.post("/contacts/", data, configTokenReq())
            .then(() => {
                commonFormControl()
                toast.success("Contato criado com sucesso")
                getContacts()
                setState(false)
            })
            .catch(err => {
                errorRequests(err, "Erro: não foi possível criar seu contato")
                commonFormControl()
            })
    }

    async function editContact(data: any, id: string, setState: React.Dispatch<React.SetStateAction<boolean>>) {
        functionsLoginRegister.startForm()
        for (const k in data) {
            if (!data[k]) {
                delete data[k]
            }
        }

        api.patch("/contacts/" + id, data, configTokenReq())
            .then(() => {
                commonFormControl()
                toast.success("Contato atualizado com sucesso")
                getContacts()
                setState(false)
            })
            .catch(err => {
                errorRequests(err, "Erro: não foi possível atualizar seu contato")
                commonFormControl()
            })
    }

    useEffect(() => {
        autoLogin()
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            loadForm,
            isAuth,
            setIsAuth,
            submitLogin,
            contacts,
            submitRegister,
            deleteContact,
            editContact,
            createContact
        }}>
            { children }
        </UserContext.Provider>
    )
}
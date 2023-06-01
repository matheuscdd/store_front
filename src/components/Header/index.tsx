import { Link, useNavigate } from "react-router-dom"
import { StyledHeader } from "./styles"
import { capitalize } from "../../functions"
import { useContext } from "react"
import { UserContext } from "../../contexts/User"
import { Client } from "../Client"
import { Button } from "../Button"


export function Header() {
    const { isAuth, setIsAuth } = useContext(UserContext)
    const pages = ["", "login", "register"]
    if (isAuth) pages.push("dashboard")
    const navigate = useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/")
        setIsAuth(false)
    }

    return (
        <StyledHeader>
            <h1>Store</h1>
            <nav>
                <a key={crypto.randomUUID()} href="https://github.com/matheuscdd/store_back/blob/master/diagram.png" target="_blank">
                    Diagrama
                </a>
                <a key={crypto.randomUUID()} href="https://documetation-fullstack-project.vercel.app/" target="_blank">
                    Documentação
                </a>
                <a key={crypto.randomUUID()} href="https://github.com/matheuscdd/store_front" target="_blank">
                    GitHub Front
                </a>
                <a key={crypto.randomUUID()} href="https://github.com/matheuscdd/store_back" target="_blank">
                    GitHub Back
                </a>
                {
                pages
                .map(page => <Link 
                    key={crypto.randomUUID()} 
                    to={"/" + page}>
                        {page ?  capitalize(page) : "Home"}
                    </Link>
                )
                }
            </nav>
            {isAuth && <section>
                <Client>
                    <Button
                        text="Sair"
                        action={logout}
                    />
                </Client>
                
            </section>}
        </StyledHeader>
    )
}
import { Link } from "react-router-dom"
import { StyledHeader } from "./styles"
import { capitalize } from "../../functions"


export function Header() {
    const pages = ["", "login", "register", "dashboard"]
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
        </StyledHeader>
    )
}
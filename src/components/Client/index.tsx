import { useContext } from "react"
import { UserContext } from "../../contexts/User"
import { StyledClient } from "./styles"


export function Client({ children }: { children: React.ReactNode }) {
    const { user } = useContext(UserContext)

    return (
        <StyledClient>
            <div>
                <picture>
                    <img src={user?.img} alt={user?.name}/>
                </picture>
                <h3>{user?.name}</h3>
            </div>
            {children}
        </StyledClient>
    )
}
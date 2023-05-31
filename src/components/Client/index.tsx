import { useContext } from "react"
import { UserContext } from "../../contexts/User"


export function Client() {
    const { user } = useContext(UserContext)

    return (
        <div>
            <img src={user?.img} alt={user?.name}/>
            <h3>{user?.name}</h3>
        </div>
    )
}
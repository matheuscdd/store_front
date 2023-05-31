import Image from "../../assets/void.svg"
import { StyledMain } from "../../styles/main"

export function NotFound() {
    return (
        <StyledMain>
            <h2>Not Found 404</h2>
            <img src={Image}/>
        </StyledMain>
    )
}
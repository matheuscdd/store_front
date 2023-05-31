import Image from "../../assets/home.svg"
import { StyledMain } from "../../styles/main"

export function Home() {
    return (
        <StyledMain>
            <h2>Home</h2>
            <img src={Image}/>
        </StyledMain>
    )
}
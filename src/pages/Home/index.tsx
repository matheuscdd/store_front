import Image from "../../assets/home.svg"
import { StyledHome } from "./styles"

export function Home() {
    return (
        <StyledHome>
            <h2>Home</h2>
            <picture>
                <img src={Image}/>
            </picture>
        </StyledHome>
    )
}
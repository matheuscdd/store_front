import Image from "../../assets/dashboard.svg"
import { StyledMain } from "../../styles/main";

export function Dashboard() {

    return (
        <StyledMain>
            <h2>Dashboard</h2>
            <img src={Image}/>
        </StyledMain>
    )
}
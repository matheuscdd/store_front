import styled from "styled-components"

export const StyledHome = styled.main`
    margin-top: 50px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
        font-size: 38px;
        font-family: var(--font-default);
        font-weight: 500;
        color: var(--purple0); 
        text-align: center;
    }

    > picture {
        display: flex;
        justify-content: center;
        > img {
            width: 50%;
        }
    }

    
`
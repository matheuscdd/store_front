import styled from "styled-components"

export const StyledMain = styled.main`
    margin-top: 50px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    
    h2 {
        font-size: 38px;
        font-family: var(--font-default);
        font-weight: 500;
        color: var(--purple0); 
        text-align: center;
    }
    
    > section {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        > img {
            width: 500px;
        }

        > form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
    }
    
    
`
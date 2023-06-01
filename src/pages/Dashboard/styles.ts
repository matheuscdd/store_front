import styled from "styled-components"

export const StyledDashboard = styled.main`
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
        margin-bottom: 50px;
    }

    > section {
        display: flex;
        justify-content: flex-end;

        > ul {
            margin-top: 50px;
        }

        > img {
            width: 700px;
            position: fixed;
            left: 0;
        }

        > div {
            > button {
                position: absolute;
                right: 30px;
            }
        }
    }

    p {
        color: var(--gray1);
        font-size: 28px;
        margin-top: 20px;
        margin-right: 20px;
    }

`
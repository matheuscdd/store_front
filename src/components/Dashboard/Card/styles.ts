import styled from "styled-components"

export const StyledCard = styled.li`
    background-color: rgba(255,255,255,0.1);
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 10px;
    border-radius: 13px;
    border: 5px solid var(--brand0);
    transition: 1s;
    
    :hover {
        border-color: var(--gray1);
    }

    .card {
        display: flex;
        width: 400px;
        flex-shrink: 0;
        gap: 10px;
        > picture {
            display: flex;
            align-items: center;
            border: 1px solid #eee;
    
            > img {
                width: 120px;
            }
        }
    }
    
    .card-inner {
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;


        h3 {
            color: var(--gray0);
            font-weight: 600;
        }
    }

    .card-btns {
        margin-bottom: 5px;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
    }

   
`
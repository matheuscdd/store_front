import styled from "styled-components"

export const StyledClient = styled.div`
    position: absolute;
    right: 20px;
    bottom: 15px;
    border-radius: 5px;
    padding: 5px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;
        margin-bottom: 7px;
    }

    picture {
        border: 3px solid var(--gray3);
        display: block;
        border-radius: 100%;
        width: 50%;
        overflow: hidden;
    }

    img {
        width: 50px;
        height: 50px;
    }
`
import styled from "styled-components"

export const StyledHeader = styled.header`
    text-align: center;
    position: sticky;
    width: 100%;
    top: 0;
    margin-bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px 0px;
    padding: 35px 0 50px 0;
    background-color: white;
    z-index: 2;

    > h1 {
        font-size: 42px;
        font-family: var(--font-default);
        font-weight: 600;
        color: var(--brand0);
    }

    > nav {
        margin-top: 20px;
    }

    nav > a {
        margin-right: 15px;
        text-decoration: none;
        color: var(--gray2);
        transition: 1s;
    }

    nav > a:hover {
        color: var(--brand0);
    }
`
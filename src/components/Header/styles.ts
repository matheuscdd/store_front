import styled from "styled-components";

export const StyledHeader = styled.div`
    text-align: center;
    margin: 40px 0 40px 0;

    h1 {
        font-size: 42px;
        font-family: var(--font-default);
        font-weight: 600;
        color: var(--brand0);
    }

    nav {
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
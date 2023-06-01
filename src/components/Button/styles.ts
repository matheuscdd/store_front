import styled from "styled-components"

export const StyledButton = styled.button`
    background-color: var(--purple2);
    border-radius: 20px;
    border: var(--purple0) 1px solid;
    color: var(--gray0);
    cursor: pointer;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font-default);
    transform-style: preserve-3d;
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &::before {
        background-color: var(--purple0);
        border-radius: inherit;
        box-shadow: 0 0 0 2px var(--purple1), 0 2px 0 0 var(--purple1);
        content: '';
        height: 100%;
        left: 1px;
        position: absolute;
        top: 0;
        transform: translate3d(0, 2px, -1px) scale(1.01);
        transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        width: 97.1%;
    }

    :hover {
        transform: translate(0, 5px);
        background-color: var(--purple3);

        &::before {
            transform: translate3d(0, 0px, -1px) scale(1);
            box-shadow: 0 0 5px 5px var(--purple4);
        }
    }
`
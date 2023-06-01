import styled from "styled-components"

export const StyledInput = styled.fieldset`
    padding: 10px;

    > input {
        margin-top: 8px;
        display: block;
        outline: none;
        border: 3px solid var(--purple1);
        padding: 6px;
        border-radius: 13px;
        transition: 1s;
        margin-bottom: 15px;
    }

    > input:focus {
        border-color: var(--brand0);
        box-shadow: 0 0 10px 5px var(--purple4);
    }

    small {
        display: block;
        color: red;
        max-width: 170px;
        font-weight: 500;
        text-overflow: ellipsis;
    }

`
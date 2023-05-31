import styled from "styled-components"

export const StyledModal = styled.div`
    top: 0;
    left: 0;
	height: 100%;
    width: 100%;
	position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: var(--purple4);
    backdrop-filter: blur(2px);

    > section {
        padding: 20px;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);

        h2 {
            color: var(--gray3);
        }

        > div {
            display: flex;
            gap: 30px;
        }
    }
`
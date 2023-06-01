import { StyledButton } from "./styles"
import { iButton } from "./types"

export function Button({ disabled = false, text, type = "button", action }: iButton) {
    return (
        <StyledButton onClick={action}
            type={type}
            disabled={disabled}
        >
            {text}
        </StyledButton>
    )
}
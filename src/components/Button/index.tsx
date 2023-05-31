import { iButton } from "./types"

export function Button({ disabled = false, text, type = "button", action }: iButton) {
    return (
        <button onClick={action}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
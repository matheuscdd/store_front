import { iButton } from "./types";

export function Button({ disabled, text, type }: iButton) {
    return (
        <button
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
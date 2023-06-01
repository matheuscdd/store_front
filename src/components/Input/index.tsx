import { StyledInput } from "./styles"
import { iInput } from "./types"

export function Input({ id, label, register, placeholder, type, disabled, error }: iInput) {
    
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                disabled={disabled} 
                type={type} 
                placeholder={placeholder}
                {...register}
            />
            <small>{error}</small>
        </StyledInput>
    )
}
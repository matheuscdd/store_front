import { iInput } from "./types";

export function Input({ id, label, register, placeholder, type, disabled, error }: iInput) {
    
    return (
        <fieldset>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                disabled={disabled} 
                type={type} 
                placeholder={placeholder}
                {...register}
            />
            <small>{error}</small>
        </fieldset>
    )
}
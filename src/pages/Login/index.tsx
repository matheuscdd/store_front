import { useForm } from "react-hook-form"
import Image from "../../assets/login.svg"
import { Input } from "../../components/Input"
import { StyledMain } from "../../styles/main"
import { iFormLoginValues } from "./types"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSchema } from "./schema"
import { EMAIL, PASSWORD, TEXT } from "../../constraints"
import { Button } from "../../components/Button"
import { useContext } from "react"
import { UserContext } from "../../contexts/User"


export function Login() {
    const { submitLogin } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLoginValues>({
        mode: "onSubmit",
        resolver: yupResolver(formSchema)
    })

    return (
        <StyledMain>
            <h2>Login</h2>
            <section>
                <img src={Image}/>
                <form onSubmit={handleSubmit(submitLogin)}>
                    <Input 
                        id={EMAIL}
                        disabled={false}
                        label="Email"
                        placeholder="Digite o seu email"
                        register={register(EMAIL)}
                        type={TEXT}
                        error={errors[EMAIL]?.message}
                    />
                    <Input 
                        id={PASSWORD}
                        disabled={false}
                        label="Senha"
                        placeholder="Digite a sua senha"
                        register={register(PASSWORD)}
                        type={PASSWORD}
                        error={errors[PASSWORD]?.message}
                    />
                    <Button
                        type="submit"
                        disabled={false}
                        text="Entrar"
                    />
                </form>
            </section>
        </StyledMain>
    )
}
import { yupResolver } from "@hookform/resolvers/yup"
import Image from "../../assets/register.svg"
import { StyledMain } from "../../styles/main"
import { formSchema } from "./schema"
import { useForm } from "react-hook-form"
import { iFormRegisterValues } from "./types"
import { Input } from "../../components/Input"
import { EMAIL, TEXT, PASSWORD, PASSWORD_C, NAME, CELLPHONE, NUMBER } from "../../constraints"
import { Button } from "../../components/Button"

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegisterValues>({
        mode: "onSubmit",
        resolver: yupResolver(formSchema)
    })

    return (
        <StyledMain>
            <h2>Cadastro</h2>
            <section>
                <img src={Image}/>
                <form onSubmit={handleSubmit((e) => console.log(e))}>
                    <Input 
                            id={NAME}
                            disabled={false}
                            label="Nome"
                            placeholder="Digite o seu nome"
                            register={register(NAME)}
                            type={TEXT}
                            error={errors[NAME]?.message}
                    />
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
                            type={TEXT}
                            error={errors[PASSWORD]?.message}
                    />
                    <Input 
                            id={PASSWORD_C}
                            disabled={false}
                            label="Confirmação de senha"
                            placeholder="Confirme a sua senha"
                            register={register(PASSWORD_C)}
                            type={TEXT}
                            error={errors[PASSWORD_C]?.message}
                    />
                    <Input 
                            id={CELLPHONE}
                            disabled={false}
                            label="Telefone"
                            placeholder="Digite o seu celular"
                            register={register(CELLPHONE)}
                            type={NUMBER}
                            error={errors[CELLPHONE]?.message}
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
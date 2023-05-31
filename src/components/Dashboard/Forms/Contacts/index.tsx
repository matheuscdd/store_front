import { yupResolver } from "@hookform/resolvers/yup"
import { iFormContactProps, iFormContactEdit } from "./types"
import { useForm } from "react-hook-form"
import { formSchemaCreate, formSchemaEdit } from "./schema"
import { NAME, TEXT, EMAIL, CELLPHONE, NUMBER } from "../../../../constraints"
import { Button } from "../../../Button"
import { Input } from "../../../Input"
import { useContext } from "react"
import { UserContext } from "../../../../contexts/User"

export function FormContact({ id = "", action, setState, isCreate = false }: iFormContactProps) {
    const { loadForm } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormContactEdit>({
        mode: "onSubmit",
        resolver: yupResolver(isCreate ? formSchemaCreate : formSchemaEdit)
    })

    return (
        <form onSubmit={handleSubmit((data) => action(data, id, setState))}>
                <Input 
                            id={NAME}
                            disabled={loadForm}
                            label="Nome"
                            placeholder="Digite o seu nome"
                            register={register(NAME)}
                            type={TEXT}
                            error={errors[NAME]?.message}
                    />
                    <Input 
                            id={EMAIL}
                            disabled={loadForm}
                            label="Email"
                            placeholder="Digite o seu email"
                            register={register(EMAIL)}
                            type={TEXT}
                            error={errors[EMAIL]?.message}
                    />
                    <Input 
                            id={CELLPHONE}
                            disabled={loadForm}
                            label="Telefone"
                            placeholder="Digite o seu celular"
                            register={register(CELLPHONE)}
                            type={NUMBER}
                            error={errors[CELLPHONE]?.message}
                    />
                    <Button
                        type="submit"
                        disabled={loadForm}
                        text="Salvar"
                    />
        </form>
    )
}
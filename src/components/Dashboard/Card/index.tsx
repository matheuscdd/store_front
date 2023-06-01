import { useContext, useState } from "react"
import { iContact } from "../../../contexts/User/types"
import { Button } from "../../Button"
import { UserContext } from "../../../contexts/User"
import { Modal } from "../../Modal"
import { FormContact } from "../Forms/Contacts"
import { StyledCard } from "./styles"

export function Card({ id, name, email, cellphone, created_at, img }: iContact) {
    const { deleteContact, editContact } = useContext(UserContext) 
    const [open, setOpen] = useState(false)

    function convertDate(value: string): string {
        const data = new Date(value)
        const dia = data.getDate().toString()
        const ano = data.getFullYear().toString()
        const mes = Number(data.getMonth()) + 1
        return dia + "/" + mes + "/" + ano
    }
 
    return (
        <StyledCard>
            <Modal
                title="Editar contato"
                open={open}
                setOpen={setOpen}
            >
                <FormContact
                    id={id}
                    setState={setOpen}
                    action={editContact}
                />
            </Modal>
            <div className="card">
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <div className="card-inner">
                    <h3>{name}</h3>
                    <h4>{email}</h4>
                    <small>{cellphone}</small>
                    <time>{convertDate(created_at)}</time>
                    <div className="card-btns">
                        <Button action={() => deleteContact(id)}
                            text="X"
                        />
                        <Button action={() => setOpen(true)}
                            text="Editar"
                        />
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}
import { useContext, useState } from "react"
import { iContact } from "../../../contexts/User/types"
import { Button } from "../../Button"
import { UserContext } from "../../../contexts/User"
import { Modal } from "../../Modal"
import { FormContact } from "../Forms/Contacts"

export function Card({ id, name, email, cellphone, created_at, img }: iContact) {
    const { deleteContact, editContact } = useContext(UserContext) 
    const [open, setOpen] = useState(false)
    return (
        <li>
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
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <small>{cellphone}</small>
            <time>{created_at}</time>
            <Button action={() => deleteContact(id)}
                text="X"
            />
            <Button action={() => setOpen(true)}
                text="Editar"
            />
        </li>
    )
}
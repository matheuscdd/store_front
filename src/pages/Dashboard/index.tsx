import { useContext, useState } from "react"
import Image from "../../assets/dashboard.svg"
import { Card } from "../../components/Dashboard/Card"
import { UserContext } from "../../contexts/User"
import { Button } from "../../components/Button"
import { Modal } from "../../components/Modal"
import { FormContact } from "../../components/Dashboard/Forms/Contacts"
import { StyledDashboard } from "./styles"

export function Dashboard() {
    const [open, setOpen] = useState<boolean>(false)
    const { contacts, createContact } = useContext(UserContext)

    return (
        <StyledDashboard>
            <h2>Dashboard</h2>
            <section>
                <img src={Image}/>
                <div>
                    <Button
                        text="Criar contato"
                        action={() => setOpen(true)}
                    />
                    <Modal
                        open={open}
                        setOpen={setOpen}
                        title="Criar modal"
                    >
                        <FormContact
                            setState={setOpen}
                            action={createContact}
                            isCreate={true}
                        />
                    </Modal>
                </div>
                <ul>
                    {   contacts && 
                        contacts.length ?
                        contacts.map(({id, name, email, cellphone, img, created_at}) => 
                            <Card
                                key={id}
                                id={id}
                                img={img}
                                name={name}
                                email={email}
                                cellphone={cellphone}
                                created_at={created_at}
                            />
                        ) :
                        <p>Não há contatos cadastrados</p>
                    }
                </ul>
            </section>
        </StyledDashboard>
    )
}
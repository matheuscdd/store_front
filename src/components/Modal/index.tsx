import { useState } from "react"
import { Button } from "../Button"
import { iModal } from "./types"
import { StyledModal } from "./styles"


export function Modal({ children, title, open, setOpen }: iModal) {
    return (
        <>
        {open && <StyledModal>
            <section>
                <div>
                    <h2>{title}</h2>
                    <Button
                        text="X"
                        action={() => setOpen(false)}
                    />
                </div>
                    {children}
            </section>
        </StyledModal>}
        </>
    )
}
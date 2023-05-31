export interface iModal {
    children: React.ReactNode
    title: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface iFormContactProps {
    id?: string
    isCreate?: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
    action: (data: iFormContactEdit, id: string, setState: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

export interface iFormContactEdit {
    name?: string
    cellphone?: string
    email?: string
}

export interface iFormContactCreate {
    name: string
    cellphone: string
    email: string
}
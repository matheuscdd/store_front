export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function configTokenReq(token: string) {
    return {headers: {Authorization: `Bearer ${token}`}}
}
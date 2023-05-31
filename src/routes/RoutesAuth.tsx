import { useContext } from 'react'
import { Outlet , Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/User'

export function RoutesAuth() {
    const { isAuth } = useContext(UserContext)

    return isAuth ? <Outlet/> : <Navigate to='/'/>
}
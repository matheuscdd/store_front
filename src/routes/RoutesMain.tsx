import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export function RoutesMain() {
    // proteger a rota de dashboard
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/dashboard" element={ <Dashboard/> }/> 
            <Route path="*" element={ <NotFound/> }/>
        </Routes>
    )
}
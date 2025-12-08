import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export const PublicLayout = ()=>{
    return <>
    <Header/>
    <Outlet/>
    </>
}
import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

export const ProtectedLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Fotter />
    </div>
  )
}

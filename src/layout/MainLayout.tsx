import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"
import WhatsAppButton from "@/utils/WhatsAppButton"
import { useLenis } from "@/hooks/useLenis"

export default function MainLayout() {
  useLenis();
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Fotter />
      <WhatsAppButton />
    </div>
  )
}

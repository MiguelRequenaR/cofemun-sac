import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import Home from "@/features/home"
import About from "@/features/about"
import Service from "@/features/service"
import Imports from "@/features/imports"
import Contact from "@/features/contact"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/importaciones" element={<Imports />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

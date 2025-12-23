import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import Home from "@/features/home"
import About from "@/features/about"
import Service from "@/features/service"
import Imports from "@/features/imports"
import Products from "@/features/products"
import ProductDetailPage from "@/features/products/pages/ProductDetailPage"
import Contact from "@/features/contact"
import ProteccionDatos from "@/features/proteccion-de-datos"
import LibroReclamaciones from "@/features/libro-de-reclamaciones"
import ScrollToTop from "@/utils/scrollToTop"
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Service />} />
          <Route path="/distribucion" element={<Imports />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:slug" element={<ProductDetailPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proteccion-de-datos" element={<ProteccionDatos />} />
          <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

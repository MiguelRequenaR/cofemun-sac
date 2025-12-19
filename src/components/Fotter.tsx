import { Phone, Mail, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Fotter() {
  return (
    <footer className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col md:flex-row" data-aos="fade-up">
        <div className="space-y-5 flex-1 items-center md:items-start flex flex-col">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logoCofemun.png" alt="logo" className="w-16 h-16" />
            <h1 className="text-primary font-bold text-4xl uppercase text-center md:text-left">
              COFEMUN S.A.C.
            </h1>
          </Link>
          <p className="text-primary font-bold text-center md:text-left">Contáctanos:</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <p className="text-gray-600">+51 987 654 321</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <p className="text-gray-600">info@cofemun.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-5 text-primary">
            <Facebook className="w-6 h-6 cursor-pointer" />
            <Instagram className="w-6 h-6 cursor-pointer" />
            <Linkedin className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className="my-8 md:my-0 md:mx-8 border-t-2 md:border-t-0 md:border-l-2 border-primary h-0 md:h-auto"></div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-primary">
          <ul>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/nosotros" className="hover:underline">Nosotros</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/servicios" className="hover:underline">Servicios</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/importaciones" className="hover:underline">Importaciones</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/lineas" className="hover:underline">Líneas</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/marcas" className="hover:underline">Marcas</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/catalogos" className="hover:underline">Catálogos</a>
            </li>
          </ul>
        </div>
        <div className="my-8 md:my-0 md:mx-8 border-t-2 md:border-t-0 md:border-l-2 border-primary h-0 md:h-auto"></div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-4 text-primary">
          <ul>
          <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/proteccion-de-datos" className="hover:underline">Protección de datos</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a href="/libro-de-reclamaciones" className="hover:underline">Libro de reclamaciones</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-primary my-5 border-b" />
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-primary text-center md:text-left">© 2025 COFEMUN S.A.C. Todos los derechos reservados.</p>
        </div>
        <div className="text-primary text-center md:text-left">
          Desarrollado por <a href="https://groblestudio.com" target="_blank" className="hover:underline">Grobles Studio.</a>
        </div>
      </div>
    </footer>
  )
}

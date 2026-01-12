import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react"
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
              <p className="text-blue-500">+51 981 067 345</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <p className="text-blue-500">info@cofemun.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-10 h-10 text-primary" />
              <p className="text-blue-500">Av. San Juan Carlos Nro. 170 URB. Santa Lima - Lima - San Miguel, Perú</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-5 text-primary">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
          </div>
        </div>
        <div className="my-8 md:my-0 md:mx-8 border-t-2 md:border-t-0 md:border-l-2 border-primary h-0 md:h-auto"></div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-primary">
          <ul>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <Link to="/nosotros" className="hover:underline">Nosotros</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <Link to="/servicios" className="hover:underline">Servicios</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <Link to="/distribucion" className="hover:underline">Distribución</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <Link to="/productos" className="hover:underline">Productos</Link>
            </li>
          </ul>
        </div>
        <div className="my-8 md:my-0 md:mx-8 border-t-2 md:border-t-0 md:border-l-2 border-primary h-0 md:h-auto"></div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-4 text-primary">
          <ul>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <Link to="/proteccion-de-datos" className="hover:underline">Protección de datos</Link>
            </li>
            <li className="flex items-center gap-2 pt-5">
              <Link to="/libro-de-reclamaciones" className="flex items-center gap-2 hover:underline">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pfp.com.pe%2Fwp-content%2Fuploads%2F2023%2F04%2FICONO-LIBRO-min.png&f=1&nofb=1&ipt=76933fd55d38d7f044512aa6ead95bb7b7ed5bbac125de55e28c3299bebe8f3e" alt="Logo de Libro de reclamaciones" className="md:w-fit h-15" />
                <p className="text-primary">Libro de reclamaciones</p>
              </Link>
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

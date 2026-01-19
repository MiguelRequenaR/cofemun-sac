import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      label: "Nosotros",
      link: "/nosotros",
    },
    {
      label: "Servicios",
      link: "/servicios",
    },
    {
      label: "Distribución",
      link: "/distribucion",
    },
    {
      label: "Productos",
      link: "/productos"
    },
    {
      label: "Marcas",
      link: "/marcas",
    }
  ];

  return (
    <header className="bg-primary relative">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src="/logoCofemun.png" alt="Logo de la empresa de suministros industriales COFEMUN S.A.C." className="w-10 md:w-16 h-10 md:h-16" />
            <h1 className="text-lg md:text-2xl font-bold text-white uppercase">COFEMUN S.A.C.</h1>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="text-white flex gap-5 font-semibold">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="relative group transition-colors duration-500 cursor-pointer hover:text-secondary"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link to="/contacto">
            <button
              className="relative overflow-hidden bg-primary text-white px-5 py-2 uppercase cursor-pointer border border-white group transition-colors duration-500 hover:text-gray-600 rounded-full"
            >
              <span
                className="
                  absolute inset-0 
                  bg-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
              />
              <span
                className="relative z-10 transition-colors duration-500"
              >
                Contacto
              </span>
            </button>
          </Link>
        </div>
        {/* Botón del menú hamburguesa para móvil */}
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile - Overlay */}
      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-primary z-40 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-5">
          {/* <img src="/logoFoodie.svg" alt="logo" /> */}
          <h1 className="text-2xl font-bold text-white uppercase">COFEMUN S.A.C.</h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Mobile nav */}
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-2xl font-semibold">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="relative group cursor-pointer transition-colors duration-300 hover:text-secondary"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pb-8">
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>
            <button
              className="relative overflow-hidden bg-secondary px-8 py-3 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white text-base"
            >
              <span
                className="
                  absolute inset-0 
                  bg-primary
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
              />
              <span
                className="relative z-10 transition-colors duration-500"
              >
                Contacto
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Consolidación",
    description: "Permitimos a nuestros clientes consolidar las compras de miles de suministros industriales en un solo proveedor eficiente, flexible y confiable.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nosotros",
  },
  {
    id: 2,
    title: "Cargos Directos",
    description: "Ponemos a disposición de nuestros clientes un equipo logístico con experiencia en gestión de compras e importaciones de suministros industriales. Ofrecemos los servicios requeridos para la fabricación, importación, traslado, instalación, capacitación y puesta en marcha de equipos.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nosotros",
  },
  {
    id: 3,
    title: "Acuerdos Comerciales",
    description: "Desarrollamos alianzas estratégicas con nuestros clientes para reducir su carga operativa de compras frecuentes a través de acuerdos de precios, consignación de materiales, tercerización de compras y gestión de almacenes.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nosotros",
  },
  {
    id: 4,
    title: "Compras Internacionales",
    description: "Contamos con un equipo con amplia experiencia en gestión de negocios internacionales, especializado en ofrecer soluciones de abastecimiento globales. Nuestra flexibilidad nos permite adaptarnos a las necesidades de nuestros clientes.",
    image: "https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nosotros",
  },
]

export default function ServicesGrid() {
  return (
    <section
    className='bg-[#62a830] text-white py-20'>
      <div
      className="max-w-7xl mx-auto">
        <h3
        className="text-2xl md:text-3xl uppercase mb-4 text-center">
          Central de Compras de <br /> <span className="font-bold">Suministros Industriales</span>
        </h3>
        <hr className="mb-4 w-30 mx-auto border-2" />
        <p
        className="text-center text-base md:text-lg py-10">
          Disponemos del portafolio más amplio de suministros para mantenimiento, reparación y operaciones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative border mx-2 md:mx-0 border-white p-5 overflow-hidden h-[280px] cursor-pointer flex flex-col"
              style={{ display: 'block' }}
            >
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full h-full object-cover
                      opacity-0
                      scale-100
                      group-hover:opacity-100
                      group-hover:scale-110
                      transition-all duration-500 ease-in-out
                      rounded
                    "
                  />
                  <div className="absolute inset-0 bg-[#62a830]/70"></div>
                </div>
                <span
                  className="
                    absolute inset-0 bg-[#1c5008]/90 
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-300 ease-in-out
                    pointer-events-none
                  "
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 relative z-20">
                {service.title}
              </h3>
              <p className="mb-4 text-base md:text-lg relative z-20">
                {service.description}
              </p>
              <span className="absolute bottom-4 right-20 z-20 transition-all duration-500 group-hover:translate-x-10">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

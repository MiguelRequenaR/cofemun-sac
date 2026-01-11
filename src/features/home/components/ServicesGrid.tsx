import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Materiales de Ferretería Industrial",
    description: "Amplio catálogo de suministros, abrasivos, sujeciones y consumibles diversos para la industria. Todo lo necesario para el mantenimiento industrial y operaciones continuas.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bricocee.com%2Fimages%2Fbricocee%2Fferreteria-materiales-construccion-cee.jpg&f=1&nofb=1&ipt=0c7234ddf57e6a6eb244ceb1facf5800c9c97dfbaf1106263a7d7de36f9e08da",
    link: "/productos",
  },
  {
    id: 2,
    title: "Herramientas Electricas y Manuales",
    description: "Equipos de alto rendimiento para uso industrial y profesional. Desde taladros y amoladoras hasta herramientas manuales certificadas para garantizar precisión y seguridad en operaciones industriales.",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos",
  },
  {
    id: 3,
    title: "Valvulas y Conexiones",
    description: "Especialistas en conducción de fluidos para la industria. Suministro de tuberías, válvulas y conexiones (PVC, CPVC, Acero) para proyectos industriales y sistemas de alta presión.",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos",
  },
  {
    id: 4,
    title: "Logística y Transporte Industrial",
    description: "Servicio de distribución integrado a tu compra. Coordinamos la entrega de tus materiales directamente en tu planta, campamento minero o centro de operaciones para optimizar tus tiempos.",
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/contacto",
  },
]

export default function ServicesGrid() {
  return (
    <section
    className='bg-primary text-white py-20'>
      <div
      className="max-w-7xl mx-auto">
        <h3
        className="text-2xl md:text-3xl uppercase mb-4 text-center mx-4 md:mx-0" data-aos="fade-up">
          Soluciones Integrales para <br /> <span className="font-bold">Tu Industria y Operaciones</span>
        </h3>
        <hr className="mb-4 w-30 mx-auto border-2" data-aos="fade-up" />
        <p
        className="text-center text-base md:text-lg py-10" data-aos="fade-up" data-aos-delay="100">
          Desde el abastecimiento de materiales hasta el mantenimiento de instalaciones industriales. Somos tu aliado estratégico que simplifica tu operatividad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative border mx-2 md:mx-0 border-white p-5 overflow-hidden h-[280px] cursor-pointer flex flex-col"
              style={{ display: 'block' }}
              data-aos="fade-up" data-aos-delay="200"
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
                  <div className="absolute inset-0 bg-primary/70"></div>
                </div>
                <span
                  className="
                    absolute inset-0 bg-primary/90 
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

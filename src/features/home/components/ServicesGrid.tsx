import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Abastecimiento de Ferretería",
    description: "Consolidamos tus requerimientos de obra en un solo lugar. Ofrecemos un amplio catálogo en materiales de construcción, herramientas, fontanería, eléctricos y acabados para proyectos de cualquier escala.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/catalogo",
  },
  {
    id: 2,
    title: "Servicios Generales y Limpieza",
    description: "Más allá de los suministros, brindamos soluciones de limpieza integral y mantenimiento para edificios e instalaciones industriales (Facility Management), asegurando ambientes operativos y seguros.",
    image: "https://images.unsplash.com/photo-1421940943431-d392fcc1079f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/servicios",
  },
  {
    id: 3,
    title: "Logística y Transporte",
    description: "Contamos con capacidad logística y de transporte para asegurar la entrega puntual de tus materiales directamente en obra o almacén, reduciendo tiempos muertos en tu ejecución.",
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/servicios",
  },
  {
    id: 4,
    title: "Atención Corporativa B2B",
    description: "Diseñado para empresas y contratistas. Ofrecemos facilidades de facturación, líneas de crédito, atención a licitaciones y acuerdos comerciales por volumen para optimizar tu presupuesto.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/contacto",
  },
]

export default function ServicesGrid() {
  return (
    <section
    className='bg-[#62a830] text-white py-20'>
      <div
      className="max-w-7xl mx-auto">
        <h3
        className="text-2xl md:text-3xl uppercase mb-4 text-center" data-aos="fade-up">
          Soluciones Integrales para <br /> <span className="font-bold">Tu Empresa y Proyectos</span>
        </h3>
        <hr className="mb-4 w-30 mx-auto border-2" data-aos="fade-up" />
        <p
        className="text-center text-base md:text-lg py-10" data-aos="fade-up" data-aos-delay="100">
          Desde el abastecimiento de materiales hasta el mantenimiento de instalaciones. 
          Somos el aliado estratégico que simplifica tu operatividad.
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

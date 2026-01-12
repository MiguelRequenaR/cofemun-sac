import { Package, Truck } from "lucide-react"
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Suministro de Materiales Industriales",
    description: "Proveemos todos los materiales necesarios para tus operaciones industriales. Ferretería industrial, herramientas, EPP y más, todo en un solo proveedor.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Logística y Transporte Industrial",
    description: "Servicio de distribución integrado a tu compra. Coordinamos la entrega de tus materiales directamente en tu planta, campamento minero o centro de operaciones con protocolos de seguridad.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function ServicesGeneralesGrid() {
  return (
    <section className='bg-white py-20'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl uppercase mb-4 text-center text-blue-500 font-bold" 
          data-aos="fade-up"
        >
          Servicios <span className=" text-primary">Industriales</span>
        </h2>
        <hr className="mb-4 w-30 mx-auto border-2 border-primary" data-aos="fade-up" />
        <p
          className="text-center text-base md:text-lg py-6 text-primary max-w-3xl mx-auto" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Ofrecemos soluciones integrales de abastecimiento y logística especializada para empresas mineras, metal mecánica e industria en general.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-10 h-10 mb-2" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold uppercase mb-3 text-primary group-hover:text-blue-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <Link 
            to="/contacto"
            className="relative inline-block overflow-hidden bg-primary text-white px-8 py-3 text-lg uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-primary rounded-full"
          >
            <span
              className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
            />
            <span className="relative z-10 transition-colors duration-500">
              Solicitar Cotización
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Wrench, Zap, PaintBucket, Hammer, Settings, Package } from "lucide-react"
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Gasfitería",
    description: "Instalación, reparación y mantenimiento de sistemas de agua y desagüe. Soluciones profesionales para tuberías, grifería y sistemas sanitarios.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Electricidad",
    description: "Servicios eléctricos completos: instalaciones, mantenimiento preventivo, corrección de fallas y certificaciones. Garantizamos seguridad y eficiencia.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Pintado",
    description: "Acabados profesionales para interiores y exteriores. Preparación de superficies, aplicación técnica y acabados de alta calidad.",
    icon: PaintBucket,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpinturasllorca.es%2Fwp-content%2Fuploads%2F2017%2F06%2FPintura-Industrial-5.jpg&f=1&nofb=1&ipt=d03962d07aee92e93c13f1477309aa280e0eead4d3a7e3e8aa522e1d6ac81255",
  },
  {
    id: 4,
    title: "Albañilería",
    description: "Construcción y reparación de estructuras. Levantamiento de muros, pisos, enchapes y todo tipo de trabajos en concreto y mampostería.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Mantenimiento General",
    description: "Servicio integral de mantenimiento preventivo y correctivo para instalaciones comerciales e industriales. Soluciones rápidas y efectivas.",
    icon: Settings,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ainoxsas.com%2Fwp-content%2Fuploads%2F2022%2F02%2F5-tipos-de-mantenimiento-que-debes-conocer1.png&f=1&nofb=1&ipt=a5ee3c237883a7efb5947624bc3e9a0c5bb35e8c40ce2c9d999a281830983b49",
  },
  {
    id: 6,
    title: "Suministro de Materiales",
    description: "Proveemos todos los materiales necesarios para tus proyectos. Ferretería, acabados, herramientas y más, todo en un solo lugar.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop",
  },
]

export default function ServicesGeneralesGrid() {
  return (
    <section className='bg-white py-20'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl uppercase mb-4 text-center text-blue-500" 
          data-aos="fade-up"
        >
          Servicios <span className="font-bold text-primary">Generales</span>
        </h2>
        <hr className="mb-4 w-30 mx-auto border-2 border-primary" data-aos="fade-up" />
        <p
          className="text-center text-base md:text-lg py-6 text-primary max-w-3xl mx-auto" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Ofrecemos soluciones integrales de mantenimiento y servicios especializados 
          para empresas, industrias y proyectos de construcción.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
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
            className="relative inline-block overflow-hidden bg-primary text-white px-8 py-3 text-lg uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-gray-600 rounded-full"
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

import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Suministro de Materiales Industriales",
    description: "Abastecimiento estratégico de ferretería técnica, herramientas de alto rendimiento y EPP certificado. Garantizamos la disponibilidad de insumos críticos para mantener la continuidad y seguridad de tus operaciones.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Instalaciones Eléctricas Industriales",
    description: "Montaje de tableros eléctricos, cableado de fuerza y control, y mantenimiento de sistemas trifásicos. Aseguramos la continuidad operativa de tu planta cumpliendo con las normativas de seguridad eléctrica vigentes.",
    image: "https://aralux.es/wp-content/uploads/2022/06/Caracteristicas-de-una-instalacion-electrica-industrial.jpg",
  },
  {
    id: 3,
    title: "Pintado y Tarrajeo Industrial",
    description: "Aplicación de pintura epóxica para pisos industriales, recubrimientos anticorrosivos para estructuras metálicas y señalización de seguridad. Servicios de tarrajeo reforzado para industrias y almacenes.",
    image: "https://i.ibb.co/1Y4YKWsH/pintura-tarrajeo.jpg",
  },
  {
    id: 4,
    title: "Abastecimiento industrial Metal Mecánica",
    description: "Suministro de aceros especiales, perfiles estructurales y consumibles para soldadura y corte. Proveemos materiales certificados para procesos de mecanizado, calderería y fabricación de componentes metálicos.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Atención Corporativa y Licitaciones",
    description: "Gestión integral para clientes corporativos y procesos de licitación pública o privada. Ofrecemos homologación de proveedores, documentación técnica certificada y capacidad logística para atender contratos de suministro a gran escala.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Mantenimiento de Maquinaria",
    description: "Programa integral de mantenimiento preventivo y correctivo para equipos de planta. Diagnóstico especializado, reparación de sistemas mecánicos e hidráulicos y gestión de repuestos para minimizar los tiempos de parada y maximizar la productividad.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop",
  }
];

export default function ServicesGeneralesGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado con stats */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 uppercase">
              Servicios <span className="text-primary">Industriales</span>
            </h2>
            <hr className="w-30 border-2 border-primary" />
          </div>
          <p className="text-lg text-primary max-w-2xl mx-auto mb-8">
            <p className="text-lg text-primary max-w-2xl mx-auto mb-8">
              Brindamos soluciones integrales en abastecimiento técnico, mantenimiento electromecánico y servicios de infraestructura para el sector minero, metalmecánico e industrial.
            </p>
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl font-bold text-blue-500">{services.length}+</div>
              <div className="text-sm text-primary uppercase">Servicios</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl font-bold text-blue-500">15+</div>
              <div className="text-sm text-primary uppercase">Años</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-primary uppercase">Garantía</div>
            </div>
          </div>
        </div>

        {/* Grid de servicios con diseño moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                {/* Imagen */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === service.id ? 'scale-110 brightness-75' : 'scale-100'
                      }`}
                  />
                  {/* Gradiente overlay */}
                  <div className="absolute inset-0 bg-black/60 " />

                  {/* Badge de categoría */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-gray-800">
                        Destacado
                      </span>
                    </div>
                  </div>

                  {/* Título en la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white uppercase mb-2 transform transition-all duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className={`text-white/90 text-sm leading-relaxed transition-all duration-500 ${hoveredId === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                      {service.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>

                {/* Borde animado */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${hoveredId === service.id ? 'ring-4 ring-primary ring-offset-2' : ''
                  }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-primary rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Contáctanos y te ayudamos a encontrar la solución perfecta para tu proyecto industrial
            </p>
            <Link
              to="/contacto"
              className="relative inline-block overflow-hidden bg-primary text-white px-8 py-4 uppercase cursor-pointer border border-white group transition-colors duration-500 hover:text-primary rounded-full"
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
      </div>
    </section>
  );
}

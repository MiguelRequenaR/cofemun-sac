import { useState } from "react";
import { ChevronDown } from "lucide-react";

type TabKey = 'compra' | 'negocios';

interface ServiceTabContentProps {
  activeTab: TabKey;
}

interface DropdownSection {
  id: string;
  title: string;
  content: string;
}

const dropdowns: DropdownSection[] = [
  {
    id: "seguridad",
    title: "División de Seguridad Industrial",
    content:
      "Contamos con la distribución de reconocidas marcas de equipos de protección personal, (EPP). Ofrecemos a nuestros clientes productos de alta calidad, con normativas nacionales e internacionales.",
  },
  {
    id: "electricos",
    title: "División de Elétricos e Iluminación",
    content:
      "Distribuimos productos eléctricos y de iluminación de alta calidad, con normativas nacionales e internacionales. Para operaciones y proyectos, brindando soluciones según el tipo de trabajo a realizar.",
  },
  {
    id: "herramientas",
    title: "División de Herramientas Industriales",
    content:
      "Representamos marcas de herramientas industriales de alta calidad, con normativas nacionales e internacionales. Para operaciones y proyectos, brindando soluciones según el tipo de trabajo a realizar.",
  },
];

export default function ServiceTabContent({ activeTab }: ServiceTabContentProps) {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      {activeTab === "compra" &&
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Servicios de Compra" className="w-full h-full object-cover" data-aos="zoom-in" />
            </div>
            <div className="space-y-3" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-600">
                Servicios de <br /> <span className="text-primary">Compra</span>
              </h2>
              <hr className="w-30 border-2 border-primary mb-4" />
              <h3 className="text-2xl font-bold uppercase text-primary">
                Consolidación
              </h3>
              <p className="text-gray-600">
                Permitimos a nuestros clientes consolidar las compras de miles de suministros industriales en un solo proveedor eficiente, flexible y confiable.
              </p>
              <h3 className="text-2xl font-bold uppercase text-primary">
                Cargos Directos
              </h3>
              <p className="text-gray-600">
                Ponemos a disposición de nuestros clientes un equipo logístico con experiencia en gestión de compras e importaciones de suministros industriales. Ofrecemos los servicios requeridos para la fabricación, importación, traslado, instalación, capacitación y puesta en marcha de equipos.
              </p>
              <h3 className="text-2xl font-bold uppercase text-primary">
                Acuerdos Comerciales
              </h3>
              <p className="text-gray-600">
                Desarrollamos alianzas estratégicas con nuestros clientes para reducir su carga operativa de compras frecuentes a través de acuerdos de precios, consignación de materiales, tercerización de compras y gestión de almacenes.
              </p>
              <a href="/contacto"
                className="relative inline-block overflow-hidden bg-primary text-white px-5 py-2 uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-gray-600"
              >
                <span
                  className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
                />
                <span className="relative z-10 transition-colors duration-500">
                  Contactanos
                </span>
              </a>
            </div>
          </div>
        </div>
      }
      {activeTab === "negocios" &&
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-600">
                Desarrollo de <br /> <span className="text-primary">Negocios</span>
              </h2>
              <hr className="w-30 border-2 border-primary mb-4" />
              <div className="mt-5">
                {dropdowns.map((section) => (
                  <div key={section.id} className="mb-3">
                    <button
                      onClick={() => handleToggle(section.id)}
                      className={`
                        w-full text-left py-4 rounded-md
                        text-primary font-semibold transition-colors duration-200 flex items-center justify-between
                        focus:outline-none cursor-pointer
                        `}
                    >
                      <span>{section.title}</span>
                      <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${open === section.id ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    <div
                      className={`
                        transition-all duration-500 overflow-hidden bg-white px-4
                        ${open === section.id ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
                        border-b border-primary/20
                      `}
                      style={{
                        transitionProperty: "max-height, opacity, padding",
                      }}
                    >
                      <p className="text-gray-600 text-base">{section.content}</p>
                    </div>
                  </div>
                ))}
                <a href="/contacto"
                  className="relative inline-block overflow-hidden bg-primary text-white px-5 py-2 uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-gray-600 mt-10"
                >
                  <span
                    className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
                  />
                  <span className="relative z-10 transition-colors duration-500">
                    Contactanos
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Desarrollo de Negocios" className="w-full h-[600px] object-cover" data-aos="zoom-in" />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

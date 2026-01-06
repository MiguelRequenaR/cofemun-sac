import { ShoppingCart, Shield, Hammer, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface Division {
  id: string;
  title: string;
  content: string;
  icon: typeof ShoppingCart;
}

const divisions: Division[] = [
  {
    id: "ferreteria",
    title: "División de Ferretería y Herramientas",
    content:
      "Suministro de equipamiento profesional y consumibles operativos. Contamos con herramientas eléctricas, manuales, abrasivos y elementos de fijación (pernería) de alta resistencia.",
    icon:Hammer
  },
  {
    id: "fluidos",
    title: "División de Valvulas y Conexiones",
    content:
      "Soluciones especializadas para conducción de fluidos. Amplio stock en válvulas industriales, tuberías (PVC, CPVC, SCH40) y conexiones para saneamiento y procesos industriales.",
    icon:Wrench
  },
  {
    id: "seguridad",
    title: "División de Seguridad Industrial (EPP)",
    content:
      "Protección integral para tu equipo de trabajo. Abastecemos cascos, respiradores, guantes, calzado de seguridad y ropa industrial certificada bajo normativa técnica vigente.",
    icon: Shield
  },
];

export default function ServiceTabContent() {

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      {/* Sección de Soluciones de Abastecimiento */}
      <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop" 
              alt="Soluciones de Abastecimiento" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
              data-aos="zoom-in" 
            />
          </div>
          <div className="space-y-5 order-1 md:order-2" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-blue-500">
              Soluciones de <br /> <span className="text-primary">Abastecimiento</span>
            </h2>
            <hr className="w-30 border-2 border-primary mb-4" />
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold uppercase text-primary mb-2">
                  Venta Mayorista Integral
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Centralizamos tus requerimientos. En lugar de lidiar con 10 proveedores distintos para cemento, fierros, limpieza y acabados, nosotros consolidamos todo en una sola orden de compra y una sola factura, simplificando tu gestión administrativa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase text-primary mb-2">
                  Stock y Disponibilidad
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Garantizamos la continuidad de tus operaciones. Mantenemos un inventario rotativo de los productos de mayor demanda para asegurar que tengas los insumos cuando los necesitas, evitando paradas en obra.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase text-primary mb-2">
                  Acuerdos Corporativos B2B
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Adaptamos nuestra propuesta comercial a tu empresa. Ofrecemos líneas de crédito, homologación de proveedores y atención preferencial para áreas de compras y logística.
                </p>
              </div>
            </div>

            <Link 
              to="/contacto"
              className="relative inline-block overflow-hidden bg-primary text-white px-6 py-3 uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-gray-600 mt-4 rounded-full"
            >
              <span
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
              />
              <span className="relative z-10 transition-colors duration-500">
                Contáctanos
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de Unidades de Negocio */}
      <div className="bg-primary text-white rounded-lg p-8 md:p-12" data-aos="fade-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            Unidades de <span className="text-blue-500">Negocio</span>
          </h2>
          <hr className="w-30 border-2 border-secondary mb-4 mx-auto" />
          <p className="text-lg max-w-3xl mx-auto">
            Especializados en tres divisiones estratégicas para cubrir todas tus necesidades de suministro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <div 
                key={division.id} 
                className="bg-white text-gray-600 rounded-lg p-6 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">
                  {division.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  {division.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a 
            href="/productos"
            className="relative inline-block overflow-hidden bg-white text-primary px-6 py-3 uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white rounded-full"
          >
            <span
              className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
            />
            <span className="relative z-10 transition-colors duration-500">
              Ver Productos
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

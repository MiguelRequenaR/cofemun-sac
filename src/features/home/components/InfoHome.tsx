import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft, UserCheck, Target, Wallet, Banknote, ChartLine, Users } from "lucide-react"

const infoItems = [
  {
    id: 1,
    icon: UserCheck,
    title: "Atención Técnica Especializada",
  },
  {
    id: 2,
    icon: Target,
    title: "Soluciones Integrales (Productos + Servicios)",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Precios Mayoristas Competitivos",
  },
  {
    id: 4,
    icon: Banknote,
    title: "Flexibilidad Comercial B2B",
  },
  {
    id: 5,
    icon: ChartLine,
    title: "Logística y Entrega a Tiempo",
  },
  {
    id: 6,
    icon: Users,
    title: "Centralización de Proveedores",
  }
]

export default function InfoHome() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev === infoItems.length - 1 ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? infoItems.length - 1 : prev - 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev === infoItems.length - 1 ? 0 : prev +1)
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section>
      <div className="bg-primary py-16">
        <h2 className="text-2xl text-white font-bold uppercase text-center" data-aos="zoom-in">
          Simplificamos tu Abastecimiento y Mantenimiento
        </h2>
      </div>
      <div className="bg-[#e7f2e0] py-16 relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="flex items-center justify-center gap-10 min-w-full"
                  data-aos="zoom-in"
                >
                  <div className="bg-white rounded-full p-2">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-primary text-lg md:text-2xl font-bold uppercase">
                    {item.title}
                  </h3>
                </div>
              )
            })}
          </div>

          {/* Flecha Izquierda */}
          <button
            onClick={handlePrev}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          {/* Flecha Derecha */}
          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

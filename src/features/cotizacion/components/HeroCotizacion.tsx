import { ShoppingBag, Clock, CheckCircle, TrendingUp } from "lucide-react"

export default function HeroCotizacion() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6" data-aos="fade-down">
          <ShoppingBag className="w-5 h-5 text-white" />
          <span className="text-white font-semibold text-sm uppercase tracking-wide">
            Solicita tu Cotización
          </span>
        </div>

        <h1 
          className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Obtén la Mejor <span className="text-secondary">Cotización</span>
          <br />
          para tu Proyecto
        </h1>

        <p 
          className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto mb-12" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          Completa el formulario y recibe una respuesta personalizada en menos de 24 horas. 
          Productos industriales de calidad al mejor precio del mercado.
        </p>

        {/* Stats */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <Clock className="w-10 h-10 text-secondary mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-white/80 text-sm">Respuesta Rápida</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80 text-sm">Productos Certificados</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80 text-sm">Productos Disponibles</div>
          </div>
        </div>
      </div>
    </section>
  )
}

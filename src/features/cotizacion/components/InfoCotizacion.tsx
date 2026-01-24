import { Headphones } from "lucide-react"

export default function InfoCotizacion() {
  return (
  <section className="max-w-7xl mx-auto">
    <div className="mx-4 md:mx-0">
      {/* CTA adicional */}
      <div className="mt-16 bg-linear-to-r from-primary to-blue-500 rounded-3xl p-12 text-center text-white relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas Asesoría?
          </h3>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución
          </p>
          <a
            href="https://wa.me/51981067345"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-700 shadow-xl hover:scale-105"
          >
            <Headphones className="w-5 h-5" />
            Contactar a un Asesor
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

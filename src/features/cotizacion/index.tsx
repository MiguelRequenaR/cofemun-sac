import HeroCotizacion from "./components/HeroCotizacion"
import FormCotizacion from "./components/FormCotizacion"
import InfoCotizacion from "./components/InfoCotizacion"

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroCotizacion />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FormCotizacion />
        </div>
      </section>

      <InfoCotizacion />
    </div>
  )
}

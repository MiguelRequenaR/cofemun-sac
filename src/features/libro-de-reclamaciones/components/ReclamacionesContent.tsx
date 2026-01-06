import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { whatsappReclamo } from "@/utils/whatsappReclamo"

export default function ReclamacionesContent() {
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoReclamo: "",
    detalle: "",
    pedidoFactura: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappUrl = whatsappReclamo({
      tipoDocumento: formData.tipoDocumento,
      numeroDocumento: formData.numeroDocumento,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      tipoReclamo: formData.tipoReclamo,
      detalle: formData.detalle,
      pedidoFactura: formData.pedidoFactura
    })

    window.open(whatsappUrl, '_blank')

    setIsSubmitted(true)

    // Limpiar el formulario después de 2 segundos
    setTimeout(() => {
      setFormData({
        tipoDocumento: "",
        numeroDocumento: "",
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        direccion: "",
        tipoReclamo: "",
        detalle: "",
        pedidoFactura: ""
      })
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Información */}
        <div className="space-y-8" data-aos="fade-right">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Información del Libro de Reclamaciones</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              De acuerdo con la Ley N° 29571 - Código de Protección y Defensa del Consumidor, todos los establecimientos comerciales deben contar con un Libro de Reclamaciones disponible para los consumidores.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Datos de la Empresa</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Dirección:</p>
                  <p className="text-gray-600">[Dirección completa de la empresa]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Teléfono:</p>
                  <p className="text-gray-600">+51 987 654 321</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">Correo Electrónico:</p>
                  <p className="text-gray-600">reclamaciones@cofemun.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Plazo de Respuesta</h3>
            <p className="text-gray-700">
              Nos comprometemos a responder su reclamo en un plazo máximo de <strong>15 días hábiles</strong> desde la fecha de presentación, de acuerdo con la normativa vigente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Autoridad Competente</h3>
            <p className="text-gray-700 mb-2">
              Si no está conforme con nuestra respuesta, puede acudir a:
            </p>
            <p className="text-gray-700">
              <strong>Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI)</strong><br />
              Dirección: Calle de la Prosa N° 138, San Borja, Lima<br />
              Teléfono: (01) 224-7800<br />
              Web: www.indecopi.gob.pe
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div data-aos="fade-left">
          <div className="bg-white border-2 border-primary rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Presentar Reclamo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tipo de Documento <span className="text-red-500">*</span>
                </label>
                <select
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="">Seleccione</option>
                  <option value="dni">DNI</option>
                  <option value="ce">Carné de Extranjería</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Número de Documento <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombres <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Apellidos <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Dirección <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tipo de Reclamo <span className="text-red-500">*</span>
                </label>
                <select
                  name="tipoReclamo"
                  value={formData.tipoReclamo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="">Seleccione</option>
                  <option value="producto">Producto defectuoso o no conforme</option>
                  <option value="servicio">Mala atención al cliente</option>
                  <option value="entrega">Problema con la entrega</option>
                  <option value="facturacion">Error en facturación</option>
                  <option value="garantia">Problema con garantía</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Número de Pedido o Factura
                </label>
                <input
                  type="text"
                  name="pedidoFactura"
                  value={formData.pedidoFactura}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Detalle del Reclamo <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="detalle"
                  value={formData.detalle}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Describa detalladamente su reclamo..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-green-600 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/90 cursor-pointer'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Enviado
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Reclamo
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


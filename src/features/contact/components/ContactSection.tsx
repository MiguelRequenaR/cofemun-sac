import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import FormContact from "./FormContact"

export default function ContactSection() {
  return (
    <section
    className="max-w-7xl mx-auto py-20">
      <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:px-0">
        <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary">Contáctanos</h2>
            <hr className="w-30 border-2 border-primary mb-4" />
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <p className="text-blue-500 text-lg">info@cofemun.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <p className="text-blue-500 text-lg">+51 981 067 345</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            <p className="text-blue-500 text-lg">Av. San Juan Carlos Nro. 170 URB. Santa Lima - Lima - San Miguel, Perú</p>
          </div>
          <div>
            <h3 className="text-primary text-lg mb-2">También puedes seguirnos en:</h3>
            <div className="flex items-center gap-8 text-primary">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-all duration-500" />
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-up" data-aos-delay="100"> 
            <h2 className="text-2xl font-bold uppercase text-primary">Envíanos un mensaje</h2>
            <hr className="w-30 border-2 border-primary mb-4" />
            <p className="text-primary text-lg mb-4">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  )
}

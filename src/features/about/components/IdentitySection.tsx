
const values = [
  {
    id: 1,
    title: "Compromiso y Formalidad",
    description: "Operamos con total transparencia, garantizando facturación clara y cumplimiento de plazos.",
  },
  {
    id: 2,
    title: "Flexibilidad",
    description: "Nos adaptamos a los requerimientos específicos de cada obra o empresa, ofreciendo soluciones a medida.",
  },
  {
    id: 3,
    title: "Seguridad",
    description: "Priorizamos la calidad de los materiales y la seguridad en nuestros servicios de limpieza y transporte.",
  },
  {
    id: 4,
    title: "Vocación de Servicio",
    description: "Asesoramos técnicamente a nuestros clientes para optimizar sus presupuestos sin sacrificar calidad.",
  },
  {
    id: 5,
    title: "Puntualidad",
    description: "Entendemos que en un proyecto, el tiempo es dinero. Nuestra logística está enfocada en cumplir los cronogramas.",
  },
  {
    id: 6,
    title: "Mejora Continua",
    description: "Mejoramos constantemente nuestros procesos y servicios para ofrecer a nuestros clientes la más alta calidad y eficiencia.",
  }
]

export default function IdentitySection() {
  return (
    <section
    className="max-w-7xl mx-auto py-20">
      <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-4 md:mx-0">
        <div
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Misión</h3>
          <p
          className="text-primary text-lg">
            Proveer soluciones integrales de abastecimiento y servicios generales a nuestros clientes, garantizando la calidad de los productos, la puntualidad en la logística y la eficiencia en el mantenimiento de sus instalaciones, contribuyendo al éxito de sus proyectos.
          </p>
        </div>
        <div
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Visión</h3>
          <p
          className="text-primary text-lg">
            Ser reconocidos como el aliado estratégico más confiable en el sector de construcción y mantenimiento industrial en el Perú, destacándonos por nuestra capacidad de respuesta, formalidad y versatilidad operativa.
          </p>
        </div>
        <div
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Filosofía</h3>
          <p
          className="text-lg text-primary">
            Creemos en la simplificación operativa. No solo vendemos productos; vendemos el tiempo que nuestros clientes ahorran al centralizar sus compras y servicios en un solo proveedor formal y eficiente.
          </p>
        </div>
      </div>
      <div
      className="py-5 md:py-20 mx-4 md:mx-0">
        <h3 className="uppercase text-gray-600 text-3xl md:text-5xl font-bold mb-4 text-center md:text-left" data-aos="fade-up">
          Nuestros <br /><span className="text-primary">Valores</span>
        </h3>
        <hr className="w-30 border-2 border-primary mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="100" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 relative">
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-primary/50"></div>
          {values.map((value) => (
            <div key={value.id} className="relative z-10" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl md:text-2xl font-bold uppercase text-primary text-center md:text-left">{value.title}</h4>
              <p className="text-base md:text-lg text-secondary text-center md:text-left">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

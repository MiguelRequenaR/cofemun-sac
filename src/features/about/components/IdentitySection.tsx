
const values = [
  {
    id: 1,
    title: "Eficiencia",
    description: "Cumplimos con la promesa al cliente optimizando el uso de los recursos disponibles.",
  },
  {
    id: 2,
    title: "Flexibilidad",
    description: "Adaptamos nuestros servicios a las necesidades de nuestros clientes, siempre con la más alta calidad y eficiencia.",
  },
  {
    id: 3,
    title: "Confianza",
    description: "Garantizamos la calidad de nuestros servicios y la confianza de nuestros clientes.",
  },
  {
    id: 4,
    title: "Innovación",
    description: "Innovamos constantemente para ofrecer soluciones de abastecimiento de suministros industriales a la más alta calidad y eficiencia.",
  },
  {
    id: 5,
    title: "Integridad",
    description: "Nos comportamos con ética y transparencia en todas nuestras actividades.",
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
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500"
        data-aos="fade-up">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Misión</h3>
          <p
          className="text-primary text-lg">
            Brindar soluciones de abastecimiento de suministros industriales a nuestros clientes, con la más alta calidad y eficiencia, a través de la consolidación de compras, cargos directos, acuerdos comerciales y compras internacionales.
          </p>
        </div>
        <div
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500"
        data-aos="fade-up" data-aos-delay="100">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Visión</h3>
          <p
          className="text-primary text-lg">
            Ser el mejor aliado de nuestros clientes, ofreciendo soluciones de abastecimiento de suministros industriales a la más alta calidad y eficiencia, a través de la consolidación de compras, cargos directos, acuerdos comerciales y compras internacionales.
          </p>
        </div>
        <div
        className="bg-[#f1ffe8] text-white p-5 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500"
        data-aos="fade-up" data-aos-delay="200">
          <h3
          className="text-3xl text-primary font-bold uppercase mb-4 text-center">Filosofía</h3>
          <p
          className="text-lg text-primary">
            Ofrecer soluciones de abastecimiento de suministros industriales a nuestros clientes, con la más alta calidad y eficiencia, a través de la consolidación de compras, cargos directos, acuerdos comerciales y compras internacionales.
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

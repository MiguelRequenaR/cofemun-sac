
export default function AboutSection() {
  return (
    <section
      className="bg-[#dbdbdb] py-5 md:py-20">
      <div
        className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div data-aos="fade-up" className="mx-4 md:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-gray-600 mb-4 text-center md:text-left">
              ¿Qué <br /> <span className="font-bold text-primary">Hacemos?</span>
            </h2>
            <p className="text-base md:text-lg text-primary">
              Consolidamos compras con cientos de proveedores locales y extranjeros. <br />
              Ofrecemos a nuestros clientes productos de alta calidad, con normativas nacionales e internacionales (ANSI, OSHA, ASTM, EN, y NTP), a menores costos. <br /> <br />
              Ofrecemos en campo levantamiento de información, mapeo de riesgos, homologación de materiales, capacitaciones, y servicios de valor agregado. <br /> <br />
              Escuchamos las necesidades de cada cliente para ofrecer un servicio eficiente, flexible y confiable que permita que su gestión de abastecimiento se enfoque en lo estratégico. <br /> <br />
              Estamos orientados hacia la mejora continua para permitir a nuestros clientes obtener ahorros y productividad en su gestión. <br />
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Section" />
          </div>
        </div>
      </div>
    </section>
  )
}

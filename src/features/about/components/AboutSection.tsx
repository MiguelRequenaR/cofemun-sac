
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
              Centralizamos tus necesidades operativas. Más que un proveedor, somos una extensión de tu equipo de compras. Gestionamos el abastecimiento de insumos críticos para obras civiles e industrias, garantizando el cumplimiento de normativas técnicas.
              <br /> <br />
              Además, complementamos nuestra oferta con servicios generales (Facility Management) y logística propia, lo que nos permite ofrecer soluciones "llave en mano": desde la venta del material hasta su entrega en obra y el mantenimiento posterior de las instalaciones. Nuestro enfoque es reducir la carga administrativa de nuestros clientes unificando proveedores.
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

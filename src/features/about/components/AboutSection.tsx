
export default function AboutSection() {
  return (
    <section
      className="bg-[#dbdbdb] py-5 md:py-20">
      <div
        className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div data-aos="fade-up" className="mx-4 md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-blue-500 mb-4 text-center md:text-left">
              ¿Qué <br /> <span className="font-bold text-primary">Hacemos?</span>
            </h2>
            <p className="text-base md:text-lg text-primary">
              Centralizamos tus necesidades operativas. Más que un proveedor, somos una extensión de tu equipo de compras. Gestionamos el abastecimiento de insumos críticos para empresas mineras, metal mecánica e industrial en general, garantizando siem.
              <br /> <br />
              Además, complementamos nuestra oferta con logística propia, lo que nos permite brindar soluciones integrales: desde la venta hasta su entrega. Nuestro enfoque es reducir la carga administrativa de nuestros clientes unificando proveedores.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="mx-4 md:mx-0">
            <img src="https://images.unsplash.com/photo-1560277090-46659724a489?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Section" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}


export default function HeroProducts() {
  return (
    <section
      className="relative w-full h-[60vh] min-h-80 flex items-center overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full">
        <h1 className="text-white text-3xl md:text-[60px] font-bold mb-4 drop-shadow-lg uppercase" data-aos="fade-up">
          Productos
        </h1>
        <div className="w-full bg-primary/90" data-aos="fade-up" data-aos-delay="100">
          <p className="max-w-7xl mx-auto py-10 text-center text-white text-base md:text-lg">
            Integramos las mejores marcas del mercado para garantizar la durabilidad de tu obra. Desde la cimentación hasta los acabados finales, nuestro inventario cumple con las normas técnicas y los estándares de seguridad.
          </p>
        </div>
      </div>
    </section>
  )
}

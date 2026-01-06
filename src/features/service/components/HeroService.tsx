
export default function HeroAbout() {
  return (
    <section
      className="relative w-full h-[60vh] min-h-80 flex items-center overflow-hidden"
    >
      <img src="https://images.unsplash.com/photo-1600715510174-704fb4791cb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full">
        <h1 className="text-white text-3xl md:text-[60px] font-bold mb-4 drop-shadow-lg uppercase text-center" data-aos="fade-up">
          Soluciones y Servicios <br /> Generales
        </h1>
      </div>
    </section>
  )
}

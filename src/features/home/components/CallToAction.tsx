
export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden z-10">
      
      <img 
        src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Suministros industriales" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 " />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div data-aos="fade-up">
          <h3 className="text-white text-3xl uppercase mb-4 text-center font-bold">
            ¡Suscríbete y conoce <br /> las últimas novedades!
          </h3>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={e => {
            e.preventDefault(); 
          }}
        >
          <div className="flex flex-row mx-2 md:mx-0" data-aos="fade-up" data-aos-delay="100">

            <input
              type="email"
              placeholder="Ingresa tu email"
              required
              className="bg-white h-12 px-4 py-0 outline-none text-lg w-full flex-1 text-gray-600 rounded-l-full"
            />
            <button
              type="submit"
              className="bg-primary text-white h-12 px-6 py-0 uppercase font-semibold  transition cursor-pointer rounded-r-full"
            >
              Suscríbete
            </button>
          </div>
          <p
          className="text-white text-lg p-4 text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
            Deseo recibir correos electrónicos de COFEMUN S.A.C.
          </p>
        </form>
      </div>
    </section>
  )
}

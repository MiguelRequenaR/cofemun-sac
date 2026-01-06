
export default function HeroAbout() {
  return (
    <section
      className="relative w-full h-[60vh] min-h-80 flex items-center overflow-hidden"
    >
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffloorcenter.cl%2Fwp-content%2Fuploads%2Fsurtido-de-herramientas-en-ferreteria-moderna.jpg&f=1&nofb=1&ipt=1fe50128a80ac58c1aab5af303963d7241ce789a8948cc35c7a86b4182232ea2" alt="Hero About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full">
        <h1 className="text-white text-3xl md:text-[60px] font-bold mb-4 drop-shadow-lg uppercase text-center" data-aos="fade-up">
          Marcas con las que <br /> trabajamos
        </h1>
        <div className="w-full bg-primary/90" data-aos="fade-up" data-aos-delay="100">
          <p className="max-w-7xl mx-auto py-10 text-center text-white text-base md:text-lg">
            Contamos con una amplia gama de marcas que nos permiten ofrecerle los mejores productos y servicios para su empresa.
          </p>
        </div>
      </div>
    </section>
  )
}

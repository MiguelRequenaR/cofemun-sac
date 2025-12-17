import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"

const carouselImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv",
    title: "Abastecimiento Industrial",
    description: "Ponemos a disposición el más amplio portafolio de suministros industriales",
    buttonLink: "/nosotros",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv",
    title: "Abastecimiento Industrial",
    description: "Ponemos a disposición el más amplio portafolio de suministros industriales",
    buttonLink: "/nosotros",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv",
    title: "Abastecimiento Industrial",
    description: "Ponemos a disposición el más amplio portafolio de suministros industriales",
    buttonLink: "/nosotros",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv",
    title: "Abastecimiento Industrial",
    description: "Ponemos a disposición el más amplio portafolio de suministros industriales",
    buttonLink: "/nosotros",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dv",
    title: "Abastecimiento Industrial",
    description: "Ponemos a disposición el más amplio portafolio de suministros industriales",
    buttonLink: "/nosotros",
  },
]

export default function HeroHome() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    )
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      )
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[60vh] min-h-[320px] flex items-center overflow-hidden">
      {/* Contenedor de slides */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselImages.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-full shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ height: "60vh" }}
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex justify-center w-full h-full" data-aos="fade-up">
              <div className="flex flex-col max-w-7xl w-full px-4 md:px-0 justify-center">
                <h1 className="text-white text-3xl md:text-7xl font-bold mb-4 drop-shadow-lg uppercase">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-3xl mb-6 drop-shadow">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="relative w-fit overflow-hidden bg-transparent text-white px-5 py-2 uppercase cursor-pointer border border-white group transition-colors duration-500 hover:text-gray-600"
                >
                  <span
                    className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"
                  />
                  <span className="relative z-10 transition-colors duration-500">
                    Conoce Más
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
        aria-label="Anterior"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition cursor-pointer"
        aria-label="Siguiente"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full border border-white transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-white/40"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

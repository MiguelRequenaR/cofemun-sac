import { useState, useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Materiales de Construcción",
    image: "https://images.unsplash.com/photo-1580810734898-5e1753f23337?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/materiales-construccion",
  },
  {
    id: 2,
    title: "Herramientas Profesionales",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/herramientas-profesionales",
  },
  {
    id: 3,
    title: "Gasfitería y Fontanería",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/gasfiteria-fontaneria",
  },
  {
    id: 4,
    title: "EPP y Seguridad Industrial",
    image: "https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/epp-seguridad-industrial",
  },
  {
    id: 5,
    title: "Electricidad e Iluminación",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/electricidad-iluminacion",
  },
  {
    id: 6,
    title: "Pinturas y Acabados",
    image: "https://images.unsplash.com/photo-1652829069968-4ded3e30f411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/pinturas-acabados",
  },
  {
    id: 7,
    title: "Insumos de Limpieza",
    image: "https://images.unsplash.com/photo-1761641428582-b85a085340d1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/productos/insumos-limpieza",
  },
]

export default function ProductsHome() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsToShow);

  const handleNext = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? maxIndex : prev - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      )
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, maxIndex]);

  return (
    <section
      className="bg-linear-to-b from-[#344920] to-[#161a10] py-20">
      <div
        className="flex flex-col md:flex-row ml-0 md:ml-[310px] items-center gap-5 md:gap-30">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full" data-aos="fade-up">
          <h3 className="text-3xl uppercase mb-4 text-white">
            Líneas de <br /> <span className="font-bold text-secondary">Abastecimiento</span>
          </h3>
          <hr className="mb-4 w-30 border-2 text-white mx-auto md:mx-0" />
          <p className="text-white text-lg mb-10">
            Contamos con una amplia variedad de suministros industriales a tu disposición.
          </p>
          <a
            href="/lineas"
            className="inline-block relative w-fit overflow-hidden bg-transparent text-white px-5 py-2 uppercase cursor-pointer border border-white group transition-colors duration-500 hover:text-gray-600"
          >
            <span
              className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"
            />
            <span className="relative z-10 transition-colors duration-500">
              Conoce Más
            </span>
          </a>
        </div>
        <div className="relative overflow-hidden p-10" data-aos="fade-up" data-aos-delay="100">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out group"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {products.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="shrink-0 relative group/card block rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-secondary"
                style={{ 
                  width: `calc((100% - ${(itemsToShow - 1) * 1}rem) / ${itemsToShow})` 
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[450px] object-cover rounded group-hover/card:opacity-80 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover/card:bg-[#6aa635]/80 transition duration-500">
                  <h4 className="text-white text-3xl font-semibold drop-shadow text-center uppercase">
                    {product.title}
                  </h4>
                </div>
                <span
                  className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center justify-center text-white text-lg z-10 transition-all duration-500"
                >
                  Conoce Más
                  <span className="group/card relative">
                    <ArrowRight className="w-4 h-4 text-white ml-2 transition-all duration-500 group-hover/card:translate-x-10" />
                  </span>
                </span>
              </a>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

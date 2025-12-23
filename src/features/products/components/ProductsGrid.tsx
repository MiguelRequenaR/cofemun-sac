import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { productsData } from "../data/productsData"

export default function ProductsGrid() {
  return (
    <section
      className="max-w-7xl mx-auto py-20">
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-5"
        data-aos="fade-up" data-aos-delay="100">
        {
          productsData.map((product) => (
            <Link
              className="relative group"
              key={product.id}
              to={`/productos/${product.slug}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-[#6aa635]/80 transition duration-500">

                <h2
                  className="absolute text-white text-3xl font-semibold drop-shadow text-center uppercase">
                  {product.title}
                </h2>
                <span className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center justify-center text-white text-lg z-10 transition-all duration-500">
                  Ver Más
                  <span className="group relative">
                    <ArrowRight className="w-4 h-4 text-white ml-2 transition-all duration-500 group-hover:translate-x-10" />
                  </span>
                </span>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

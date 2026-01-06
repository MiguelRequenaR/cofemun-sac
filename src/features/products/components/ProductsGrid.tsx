import { ArrowRight, Package, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { productsData } from "../data/productsData"
import { useState } from "react"

export default function ProductsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="catalogo" className="py-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado con stats */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Nuestro <span className="text-primary">Catálogo</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explora nuestra amplia selección de productos profesionales para construcción e industria
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl font-bold text-primary">{productsData.length}+</div>
              <div className="text-sm text-gray-600 uppercase">Categorías</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 uppercase">Productos</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600 uppercase">Calidad</div>
            </div>
          </div>
        </div>

        {/* Grid de productos con diseño moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <Link
              key={product.id}
              to={`/productos/${product.slug}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card principal */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                {/* Imagen */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredId === product.id ? 'scale-110 brightness-75' : 'scale-100'
                    }`}
                  />
                  {/* Gradiente overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Badge de categoría */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-gray-800">
                        {product.relatedProducts.length} Items
                      </span>
                    </div>
                  </div>

                  {/* Título en la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white uppercase mb-2 transform transition-all duration-500 group-hover:translate-x-2">
                      {product.title}
                    </h3>
                    <p className={`text-white/90 text-sm leading-relaxed transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {product.description.substring(0, 80)}...
                    </p>
                  </div>
                </div>

                {/* Sección inferior con productos relacionados */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      Productos Destacados
                    </span>
                    <ArrowRight className={`w-5 h-5 text-primary transition-transform duration-500 ${
                      hoveredId === product.id ? 'translate-x-2' : ''
                    }`} />
                  </div>

                  {/* Mini galería de productos relacionados */}
                  <div className="grid grid-cols-4 gap-2">
                    {product.relatedProducts.slice(0, 4).map((related) => (
                      <div
                        key={related.id}
                        className="aspect-square rounded-lg overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300"
                      >
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón de acción flotante */}
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="bg-white text-primary px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300">
                    <span className="font-semibold">Ver Catálogo</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Borde animado */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
                  hoveredId === product.id ? 'ring-4 ring-primary ring-offset-2' : ''
                }`} />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-primary rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Contáctanos y te ayudamos a encontrar el producto perfecto para tu proyecto
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

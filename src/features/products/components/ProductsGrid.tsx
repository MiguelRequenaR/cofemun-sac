import { ArrowRight, ShoppingBag, X, Tag } from "lucide-react"
import { Link } from "react-router-dom"
import { productsData } from "../data/productsData"
import type { RelatedBrand } from "../data/productsData"
import { useState } from "react"

export default function ProductsGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<RelatedBrand | null>(null);

  return (
    <section id="catalogo" className="py-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado con stats */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 uppercase">
              Nuestro <span className="text-primary">Catálogo</span>
            </h2>
            <hr className="w-30 border-2 border-primary" />
          </div>
          <p className="text-lg text-primary max-w-2xl mx-auto mb-8">
            Explora nuestra amplia selección de productos profesionales para empresas mineras, metal mecánica e industria en general.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl font-bold text-blue-500">{productsData.length}+</div>
              <div className="text-sm text-primary uppercase">Categorías</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl font-bold text-blue-500">500+</div>
              <div className="text-sm text-primary uppercase">Productos</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm text-primary uppercase">Calidad</div>
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
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-gray-800">
                        {product.relatedBrands.length > 0 
                          ? `${product.relatedBrands.length} Marcas` 
                          : 'Sin marcas'}
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

                {/* Sección inferior con marcas relacionadas */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      Marcas Relacionadas
                    </span>
                    <ArrowRight className={`w-5 h-5 text-primary transition-transform duration-500 ${
                      hoveredId === product.id ? 'translate-x-2' : ''
                    }`} />
                  </div>

                  {product.relatedBrands.length > 0 ? (
                    /* Mini galería de marcas relacionadas */
                    <div className="grid grid-cols-4 gap-2">
                      {product.relatedBrands.slice(0, 4).map((brand) => (
                        <div
                          key={brand.id}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedBrand(brand);
                          }}
                          className="aspect-square rounded-lg overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300 cursor-pointer bg-white flex items-center justify-center p-2"
                        >
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Mensaje cuando no hay marcas */
                    <div className="text-center py-4 px-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                      <p className="text-sm text-gray-600 font-medium">
                        Sin marcas disponibles
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Contáctanos para más información
                      </p>
                    </div>
                  )}
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
              className="relative inline-block overflow-hidden bg-primary text-white px-8 py-4 uppercase cursor-pointer border border-white group transition-colors duration-500 hover:text-primary rounded-full"
            >
              <span
                className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
              />
              <span className="relative z-10 transition-colors duration-500">
                Contactanos
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de productos de la marca */}
      {selectedBrand && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBrand(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Encabezado del modal */}
            <div className="sticky top-0 bg-linear-to-r from-primary to-blue-500 text-white p-6 md:p-8 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <img 
                      src={selectedBrand.logo} 
                      alt={selectedBrand.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase">
                      Productos {selectedBrand.name}
                    </h2>
                    <p className="text-white/90 text-sm mt-1">
                      {selectedBrand.products.length} productos disponibles
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Grid de productos */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedBrand.products.map((product) => (
                  <div 
                    key={product.id}
                    className="group bg-white rounded-xl border-2 border-gray-100 hover:border-primary overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Imagen del producto */}
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Información del producto */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-primary mb-2 uppercase line-clamp-2 group-hover:text-blue-500 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Características */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          Características:
                        </h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Badge de disponibilidad */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                            <ShoppingBag className="w-3 h-3" />
                            Disponible
                          </span>
                          <button className="text-xs text-primary hover:text-blue-500 font-semibold uppercase tracking-wide transition-colors duration-300 flex items-center gap-1 group/btn">
                            Ver más
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón de contacto */}
              <div className="mt-8 text-center">
                <Link
                  to={`/cotizacion?marca=${encodeURIComponent(selectedBrand.name)}`}
                  onClick={() => setSelectedBrand(null)}
                  className="relative inline-block overflow-hidden bg-primary text-white px-8 py-3 uppercase cursor-pointer border border-primary group transition-colors duration-500 hover:text-primary rounded-full"
                >
                  <span
                    className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none block"
                  />
                  <span className="relative z-10 transition-colors duration-500 font-semibold">
                    Solicitar Cotización
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

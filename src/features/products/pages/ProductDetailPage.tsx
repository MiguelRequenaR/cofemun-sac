import { useParams, Link } from "react-router-dom"
import { getProductBySlug } from "../data/productsData"
import type { RelatedBrand } from "../data/productsData"
import { ArrowLeft, Check, Package, Star, ShoppingBag, List, X, Tag } from "lucide-react"
import { useState } from "react"

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedBrand, setSelectedBrand] = useState<RelatedBrand | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 to-secondary/10">
        <div className="text-center p-12 bg-white rounded-3xl shadow-2xl" data-aos="fade-up">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe en nuestro catálogo.</p>
          <Link 
            to="/productos" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Mejorado */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
        
        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6" data-aos="fade-up">
              <Star className="w-4 h-4 text-primary fill-white" />
              <span className="text-primary font-semibold text-sm uppercase">Producto Destacado</span>
            </div>
            
            <h1 
              className="text-white text-4xl md:text-[60px] font-bold mb-6 leading-tight drop-shadow-2xl" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              {product.title}
            </h1>
            
            <p 
              className="text-white/95 text-base md:text-lg mb-8 leading-relaxed drop-shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              {product.description}
            </p>

            <div 
              className="flex flex-wrap gap-4 justify-center md:justify-start" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <Link 
                to="/contacto"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Solicitar Cotización
              </Link>
              <Link 
                to="/productos"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <List className="w-5 h-5" />
                Ver Todos los Productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {product.relatedBrands.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-10 md:-mt-16 relative z-20" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-gray-800">Marcas Disponibles</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.relatedBrands.slice(0, 6).map((brand) => (
                <div
                  key={brand.id}
                  className="shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg bg-white flex items-center justify-center p-2"
                >
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
            Marcas <span className="text-primary">Relacionadas</span>
          </h2>
          <hr className="w-30 border-2 border-primary mx-auto" />
          <p className="text-gray-600 text-lg mt-4">
            Explora las principales marcas disponibles en esta categoría
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {product.relatedBrands.map((brand, index) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-32 w-auto max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                  {brand.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">
                    {brand.products.length} {brand.products.length === 1 ? 'Producto' : 'Productos'}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded-full w-20">
                      <div className="h-full w-0 bg-primary rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                    <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Listado de productos de la marca */}
                <div className="space-y-2">
                  {brand.products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{product.name}</span>
                    </div>
                  ))}
                  {brand.products.length > 3 && (
                    <div className="text-xs text-primary font-semibold">
                      +{brand.products.length - 3} más
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="bg-linear-to-r from-primary to-[#021f42] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu Proyecto?
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Contáctanos ahora y obtén una cotización personalizada para tu proyecto
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 ease-in-out uppercase"
              >
                Cotizar Ahora
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-500 ease-in-out uppercase"
              >
                Ver Más Productos
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                {selectedBrand.products.map((brandProduct) => (
                  <div 
                    key={brandProduct.id}
                    className="group bg-white rounded-xl border-2 border-gray-100 hover:border-primary overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                  >
                    {/* Imagen del producto */}
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                      <img
                        src={brandProduct.image}
                        alt={brandProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Información del producto */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-primary mb-2 uppercase line-clamp-2 group-hover:text-blue-500 transition-colors duration-300">
                        {brandProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {brandProduct.description}
                      </p>

                      {/* Características */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          Características:
                        </h4>
                        <ul className="space-y-1">
                          {brandProduct.features.slice(0, 3).map((feature, idx) => (
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
                            <Tag className="w-3 h-3" />
                            Disponible
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón de contacto */}
              <div className="mt-8 text-center">
                <Link
                  to="/contacto"
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
    </div>
  );
}
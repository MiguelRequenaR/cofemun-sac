import { useParams, Link } from "react-router-dom"
import { getProductBySlug } from "../data/productsData"
import { ArrowLeft, Check, Package, Star, ShoppingBag, List } from "lucide-react"

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

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

      {product.relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-10 md:-mt-16 relative z-20" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-gray-800">Vista Rápida de Productos</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.relatedProducts.slice(0, 6).map((related) => (
                <div
                  key={related.id}
                  className="shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <img src={related.image} alt={related.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Productos <span className="text-primary">Relacionados</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explora nuestra línea completa de productos en esta categoría
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          {product.relatedProducts.map((relatedProduct, index) => (
            <div
              key={relatedProduct.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="max-h-52 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full">
                    <div className="h-full w-0 bg-primary rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                  <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    </div>
  );
}
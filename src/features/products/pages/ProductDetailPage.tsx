import { useParams } from "react-router-dom"
import { getProductBySlug } from "../data/productsData"

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600">El producto que buscas no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-96 flex items-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg uppercase text-center" data-aos="fade-up">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        {/* Description */}
        <div className="mb-16" data-aos="fade-up">
          <p className="text-lg text-gray-700 leading-relaxed ">
            {product.description}
          </p>
        </div>

        {/* Productos Relacionados Rediseñados */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 text-center uppercase">
            Productos <span className="text-primary">Relacionados</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full flex flex-col ">
              <ul className="space-y-4">
                {product.relatedProducts.map((relatedProduct) => (
                  <li
                    key={relatedProduct.id}
                    className="flex items-center group transition-colors duration-200"
                  >
                    <span className="block rounded-full w-3 h-3 mr-3 bg-primary"></span>
                    <span className="font-semibold text-lg text-gray-700 group-hover:text-primary transition">
                      {relatedProduct.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="flex flex-col items-center">
                  <div className="w-full h-[350px] flex justify-center items-center bg-white">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Send, Check, Package, Tag, Calendar, Hash } from 'lucide-react';
import { whatsappCotizacion } from '@/utils/whatsappCotizacion';
import { useSearchParams } from 'react-router-dom';

export default function FormCotizacion() {
  const [searchParams] = useSearchParams();
  const productoParam = searchParams.get('producto');
  const marcaParam = searchParams.get('marca');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    producto: productoParam || '',
    marca: marcaParam || '',
    cantidad: '',
    fechaRequerida: '',
    especificaciones: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (productoParam) {
      setFormData(prev => ({ ...prev, producto: productoParam }));
    }
    if (marcaParam) {
      setFormData(prev => ({ ...prev, marca: marcaParam }));
    }
  }, [productoParam, marcaParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const whatsappUrl = whatsappCotizacion({
      name: formData.name,
      company: formData.company || 'No especificada',
      email: formData.email,
      phone: formData.phone,
      producto: formData.producto,
      marca: formData.marca || undefined,
      cantidad: formData.cantidad,
      fechaRequerida: formData.fechaRequerida || undefined,
      especificaciones: formData.especificaciones
    });

    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        producto: '',
        marca: '',
        cantidad: '',
        fechaRequerida: '',
        especificaciones: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Solicita tu Cotización
        </h3>
        <p className="text-gray-600">
          Completa el formulario y nos pondremos en contacto contigo lo antes posible
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Información Personal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nombre y Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Empresa
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Empresa SAC (opcional)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Correo Electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="+51 987 654 321"
            />
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Información del Producto */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
          <h4 className="text-lg font-bold text-blue-500 mb-1 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Detalles del Producto
          </h4>
          <p className="text-sm text-gray-600">
            Especifica el producto que deseas cotizar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Package className="w-4 h-4 text-primary" />
              Producto <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Ej: Válvulas industriales"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Tag className="w-4 h-4 text-primary" />
              Marca
            </label>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Ej: Stanley (opcional)"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Hash className="w-4 h-4 text-primary" />
              Cantidad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Ej: 100 unidades"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              Fecha Requerida
            </label>
            <input
              type="date"
              name="fechaRequerida"
              value={formData.fechaRequerida}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Especificaciones Adicionales <span className="text-red-500">*</span>
          </label>
          <textarea
            name="especificaciones"
            value={formData.especificaciones}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Describe características técnicas, especificaciones, uso previsto, o cualquier detalle adicional que nos ayude a cotizar mejor..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitted}
          className={`w-full text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
            isSubmitted 
              ? 'bg-green-600 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary/90 cursor-pointer'
          }`}
        >
          {isSubmitted ? (
            <>
              <Check className="w-6 h-6" />
              ¡Cotización Enviada!
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              Solicitar Cotización
            </>
          )}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Al enviar este formulario, se abrirá WhatsApp con tu solicitud pre-cargada
        </p>
      </form>
    </div>
  )
}

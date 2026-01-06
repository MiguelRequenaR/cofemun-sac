import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { whatsappMessage } from '@/utils/whatsappMessage';

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const whatsappUrl = whatsappMessage({
      name: formData.name,
      company: formData.company || 'No especificada',
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);

    // Limpiar el formulario después de 2 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="bg-white border-2 border-primary rounded-lg p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nombre y Apellido <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Ingrese su nombre completo"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Nombre de su empresa (opcional)"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="+51 987 654 321"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Escriba su mensaje aquí..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitted}
          className={`w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
            isSubmitted 
              ? 'bg-green-600 cursor-not-allowed' 
              : 'bg-primary hover:bg-primary/90 cursor-pointer'
          }`}
        >
          {isSubmitted ? (
            <>
              <Check className="w-5 h-5" />
              Enviado
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </>
          )}
        </button>
      </form>
    </div>
  )
}

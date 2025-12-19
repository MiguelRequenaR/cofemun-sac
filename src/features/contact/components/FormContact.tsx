import { useState } from 'react';
import { whatsappMessage } from '@/utils/whatsappMessage';

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

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

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <form className="space-y-4" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre y Apellido"
        className="w-full p-2 border-2 border-secondary rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Empresa (Opcional)"
        className="w-full p-2 border-2 border-secondary rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border-2 border-secondary rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Teléfono"
        className="w-full p-2 border-2 border-secondary rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Mensaje"
        className="w-full p-2 border-2 border-secondary rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary h-32"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button 
        type="submit" 
        className="w-full relative overflow-hidden bg-primary text-white px-5 py-2 uppercase cursor-pointer border border-transparent group transition-colors duration-500 hover:text-gray-600 hover:border-primary"
        data-aos="fade-up" data-aos-delay="300"
      >
        <span
          className="
            absolute inset-0 
            bg-secondary
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-500 ease-in-out pointer-events-none
          "
        />
        <span
          className="relative z-10 transition-colors duration-500"
        >
          Enviar Mensaje
        </span>
      </button>

    </form>
  )
}

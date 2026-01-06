interface WhatsAppMessage {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function whatsappMessage(data: WhatsAppMessage) {
  const phone = '51981067345'
  const message = `
    *Nuevo mensaje de contacto*
    Nombre: ${data.name}
    Empresa: ${data.company}
    Email: ${data.email}
    Teléfono: ${data.phone}
    Servicio Solicitado: ${data.service}
    Mensaje: ${data.message}
  `;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
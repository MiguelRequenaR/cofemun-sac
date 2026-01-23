interface WhatsAppCotizacion {
  name: string;
  company: string;
  email: string;
  phone: string;
  producto: string;
  marca?: string;
  cantidad: string;
  fechaRequerida?: string;
  especificaciones: string;
}

export function whatsappCotizacion(data: WhatsAppCotizacion) {
  const phone = '51981067345'
  const message = `
*Nueva Solicitud de Cotización*

*Datos del Solicitante:*
• Nombre: ${data.name}
• Empresa: ${data.company}
• Email: ${data.email}
• Teléfono: ${data.phone}

*Detalles del Producto:*
• Producto: ${data.producto}
${data.marca ? `• Marca: ${data.marca}` : ''}
• Cantidad: ${data.cantidad}
${data.fechaRequerida ? `• Fecha Requerida: ${data.fechaRequerida}` : ''}

*Especificaciones Adicionales:*
${data.especificaciones}

---
_Solicitud generada desde la web_
  `.trim();
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

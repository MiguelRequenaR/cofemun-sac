interface ReclamoData {
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  tipoReclamo: string;
  detalle: string;
  pedidoFactura: string;
}

export function whatsappReclamo(data: ReclamoData) {
  const phone = '51981067345'
  const tipoDocMap: Record<string, string> = {
    'dni': 'DNI',
    'ce': 'Carné de Extranjería',
    'pasaporte': 'Pasaporte'
  };
  
  const tipoReclamoMap: Record<string, string> = {
    'producto': 'Producto defectuoso o no conforme',
    'servicio': 'Mala atención al cliente',
    'entrega': 'Problema con la entrega',
    'facturacion': 'Error en facturación',
    'garantia': 'Problema con garantía',
    'otro': 'Otro'
  };

  const message = `
*NUEVO RECLAMO - LIBRO DE RECLAMACIONES*

*Datos del Reclamante:*
  - Tipo de Documento: ${tipoDocMap[data.tipoDocumento] || data.tipoDocumento}
  - Número de Documento: ${data.numeroDocumento}
  - Nombres: ${data.nombres}
  - Apellidos: ${data.apellidos}
  - Email: ${data.email}
  - Teléfono: ${data.telefono}
  - Dirección: ${data.direccion}

*Detalles del Reclamo:*
  - Tipo: ${tipoReclamoMap[data.tipoReclamo] || data.tipoReclamo}
  - Pedido/Factura: ${data.pedidoFactura || 'No especificado'}
  - Detalle:
${data.detalle}

---
Fecha: ${new Date().toLocaleString('es-PE')}
  `;
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

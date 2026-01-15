export interface RelatedProduct {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  relatedProducts: RelatedProduct[];
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "Materiales de Ferretería Industrial",
    slug: "materiales-ferreteria",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bricocee.com%2Fimages%2Fbricocee%2Fferreteria-materiales-construccion-cee.jpg&f=1&nofb=1&ipt=0c7234ddf57e6a6eb244ceb1facf5800c9c97dfbaf1106263a7d7de36f9e08da",
    description: "Materiales de ferretería industrial para empresas mineras, metal mecánica e industria en general.",
    relatedProducts: [
      {
        id: 1,
        name: "Electrodo Soldadura 6011 (Punto Azul)",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
      },
    ]
  },
  {
    id: 2,
    title: "Herramientas Electricas",
    slug: "herramientas-electricas",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de alto rendimiento para los trabajos más exigentes. Ofrecemos potencia, seguridad y eficiencia garantizada para maximizar la productividad en proyectos industriales.",
    relatedProducts: [
      {
        id: 1,
        name: "Taladros",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
      },
    ]
  },
  {
    id: 3,
    title: "Herramientas Manuales",
    slug: "herramientas-manuales",
    image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Precisión y resistencia en tus manos. Amplia gama de herramientas ergonómicas y duraderas, indispensables para cualquier labor de ajuste, reparación o montaje.",
    relatedProducts: [
      {
        id: 1,
        name: "Destornilladores",
        image: "https://images.unsplash.com/photo-1645639554326-6d738cf1695b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ]
  },
  {
    id: 4,
    title: "Valvulas y Conexiones",
    slug: "valvulas-conexiones",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Componentes esenciales para el control eficiente de fluidos. Garantizamos estanqueidad y resistencia en sistemas hidráulicos, con un amplia gama de materiales y medidas.",
    relatedProducts: [
      {
        id: 1,
        name: "Válvulas",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpromart.vteximg.com.br%2Farquivos%2Fids%2F7281754-275-275%2F152132.jpg%3Fv%3D638248676109800000&f=1&nofb=1&ipt=4e1d8b932c4fa770596e5ce3b5c0f85932141f5590d708102b803752524f105a"
      },
    ]
  },
  {
    id: 5,
    title: "Pernos y Productos de Fijación",
    slug: "pernos-productos-fijacion",
    image: "https://www.pernosyabrazaderasperu.com/images/servicios/1025.jpg",
    description: "Fijación segura resistente para cualquier estructura. Amplio stock de pernos, anclajes y sujeciones de alta resistencia, ideales para aplicaciones industriales.",
    relatedProducts: [
      {
        id: 1,
        name: "Pernos Hexagonales",
        image: "https://images.unsplash.com/photo-1759159092038-d414f661dbf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ]
  },
  {
    id: 4,
    title: "EPP y Seguridad Industrial",
    slug: "epp-seguridad-industrial",
    image: "https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de Protección Personal (EPP) y elementos de seguridad industrial. Priorizamos la seguridad de los trabajadores en operaciones mineras e industriales.",
    relatedProducts: [
      {
        id: 1,
        name: "Cascos",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.preciocombustible.com%2Fwp-content%2Fuploads%2F2024%2F10%2FtcfXoFW1_acOhJMUn7OlD.png&f=1&nofb=1&ipt=4b5c6a3c8e5df3c692501671dfc9b3707c8b99d84223b59f4927e35a7b3c055d"
      },
    ]
  },
  {
    id: 5,
    title: "Electricidad e Iluminación",
    slug: "electricidad-iluminacion",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Materiales eléctricos e iluminación para instalaciones industriales. Productos certificados y de alta calidad para operaciones continuas",
    relatedProducts: [
      {
        id: 1,
        name: "Cables",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcircuitos-electricos.com%2Fwp-content%2Fuploads%2Fcables-electricos-1.jpg&f=1&nofb=1&ipt=42bf7dffa16a8695f49bb76d67a758585058b7a50e7bb6767fd0aabe56c0f891"
      },
    ]
  },
  {
    id: 6,
    title: "Pinturas y Acabados",
    slug: "pinturas-acabados",
    image: "https://images.unsplash.com/photo-1652829069968-4ded3e30f411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pinturas industriales y recubrimientos de alta calidad. Amplia gama de productos para protección y mantenimiento de estructuras y equipos industriales.",
    relatedProducts: [
      {
        id: 1,
        name: "Pintura Latex",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferreteriavidri.com%2Fimages%2Fitems%2Flarge%2F90428.jpg&f=1&nofb=1&ipt=2930021e3611cead87049e83279b076829d9452a747708e2c94a04ea1d410e96"
      },
    ]
  },
  {
    id: 7,
    title: "Insumos de Limpieza",
    slug: "insumos-limpieza",
    image: "https://images.unsplash.com/photo-1761641428582-b85a085340d1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Insumos y productos de limpieza industrial para mantenimiento de plantas e instalaciones. Productos eficientes y de calidad para la industria.",
    relatedProducts: [
      {
        id: 1,
        name: "Detergentes",
        image: "https://industriaslyf.com/wp-content/uploads/DETERCLEAN-POR-20-LITROS.jpg"
      },
    ]
  }
];

export const getProductById = (id: string | undefined): Product | undefined => {
  if (!id) return undefined;
  return productsData.find(product => product.id === parseInt(id));
};

export const getProductBySlug = (slug: string | undefined): Product | undefined => {
  if (!slug) return undefined;
  return productsData.find(product => product.slug === slug);
};
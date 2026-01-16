export interface BrandProduct {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface RelatedBrand {
  id: number;
  name: string;
  logo: string;
  products: BrandProduct[];
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  relatedBrands: RelatedBrand[];
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "Materiales de Ferretería Industrial",
    slug: "materiales-ferreteria",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bricocee.com%2Fimages%2Fbricocee%2Fferreteria-materiales-construccion-cee.jpg&f=1&nofb=1&ipt=0c7234ddf57e6a6eb244ceb1facf5800c9c97dfbaf1106263a7d7de36f9e08da",
    description: "Materiales de ferretería industrial para empresas mineras, metal mecánica e industria en general.",
    relatedBrands: [
      {
        id: 1,
        name: "SOLDEXA",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_54.webp",
        products: [
          {
            id: 1,
            name: "Electrodo Soldadura 6011 (Punto Azul)",
            description: "Electrodo de soldadura para acero al carbono, ideal para posiciones vertical, horizontal y sobrecabeza",
            features: [
              "Diámetro: 1/8\", 5/32\", 3/16\"",
              "Aplicación: Acero al carbono",
              "Certificación AWS E6011",
              "Alta penetración"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
          },
          {
            id: 2,
            name: "Electrodo Soldadura 7018",
            description: "Electrodo de bajo hidrógeno para soldaduras de alta calidad y resistencia",
            features: [
              "Diámetro: 1/8\", 5/32\", 3/16\"",
              "Bajo contenido de hidrógeno",
              "Certificación AWS E7018",
              "Para aceros de alta resistencia"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
          }
        ]
      },
      {
        id: 2,
        name: "LINCOLN ELECTRIC",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_58.webp",
        products: [
          {
            id: 3,
            name: "Disco de Corte 4.5\"",
            description: "Disco de corte para metal de alta velocidad y durabilidad",
            features: [
              "Diámetro: 4.5 pulgadas",
              "Espesor: 1/16\"",
              "RPM máximo: 13,300",
              "Para acero y metal"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
          }
        ]
      },
      {
        id: 3,
        name: "TRUPER",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_59.webp",
        products: [
          {
            id: 4,
            name: "Kit de Herramientas Manuales",
            description: "Set completo de herramientas manuales para mantenimiento industrial",
            features: [
              "Incluye llaves, destornilladores",
              "Material: Acero cromo vanadio",
              "Estuche resistente incluido",
              "Garantía de por vida"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
          }
        ]
      },
      {
        id: 4,
        name: "DEWALT",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_62.webp",
        products: [
          {
            id: 5,
            name: "Tornillos Autorroscantes",
            description: "Tornillos de alta resistencia para aplicaciones industriales",
            features: [
              "Material: Acero templado",
              "Recubrimiento anticorrosivo",
              "Medidas variadas disponibles",
              "Alta resistencia al torque"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnx.jumpseller.com%2Fbarracaolave%2Fimage%2F58230364%2Fresize%2F700%2F700%3F1733946011&f=1&nofb=1&ipt=3937322536cc285828fa42b2fc23023efba7ab593d09e19b9ef938265468c4f7"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Herramientas Electricas",
    slug: "herramientas-electricas",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de alto rendimiento para los trabajos más exigentes. Ofrecemos potencia, seguridad y eficiencia garantizada para maximizar la productividad en proyectos industriales.",
    relatedBrands: [
      {
        id: 4,
        name: "DEWALT",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_62.webp",
        products: [
          {
            id: 1,
            name: "Taladro Percutor 1/2\"",
            description: "Taladro de alta potencia para perforación en concreto, metal y madera",
            features: [
              "Potencia: 850W",
              "Velocidad variable",
              "Mandril de 1/2\"",
              "Función percutor reversible"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
          }
        ]
      },
      {
        id: 5,
        name: "BOSCH",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_68.webp",
        products: [
          {
            id: 2,
            name: "Amoladora Angular 4.5\"",
            description: "Esmeril angular de alta velocidad para corte y desbaste",
            features: [
              "Potencia: 900W",
              "Velocidad: 11,000 RPM",
              "Disco: 4.5 pulgadas",
              "Protector de disco incluido"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
          }
        ]
      },
      {
        id: 6,
        name: "MAKITA",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_71.webp",
        products: [
          {
            id: 3,
            name: "Sierra Circular 7.25\"",
            description: "Sierra circular de precisión para cortes en madera",
            features: [
              "Potencia: 1200W",
              "Profundidad de corte: 65mm",
              "Guía láser incluida",
              "Base de aluminio"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
          }
        ]
      },
      {
        id: 7,
        name: "MILWAUKEE",
        logo: "https://efc.com.pe/wp-content/uploads/2024/02/NATIONAL.jpg",
        products: [
          {
            id: 4,
            name: "Rotomartillo SDS Plus",
            description: "Rotomartillo profesional para perforación en concreto",
            features: [
              "Potencia: 800W",
              "3 modos: rotación/percusión/cincel",
              "Sistema SDS Plus",
              "Maletín incluido"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Herramientas Manuales",
    slug: "herramientas-manuales",
    image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Precisión y resistencia en tus manos. Amplia gama de herramientas ergonómicas y duraderas, indispensables para cualquier labor de ajuste, reparación o montaje.",
    relatedBrands: [
      {
        id: 3,
        name: "TRUPER",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_59.webp",
        products: [
          {
            id: 1,
            name: "Set de Destornilladores Profesional",
            description: "Juego completo de destornilladores de precisión",
            features: [
              "12 piezas incluidas",
              "Mango ergonómico antideslizante",
              "Puntas magnéticas",
              "Acero cromo vanadio"
            ],
            image: "https://images.unsplash.com/photo-1645639554326-6d738cf1695b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        id: 8,
        name: "STANLEY",
        logo: "https://efc.com.pe/wp-content/uploads/2024/02/CEMENTEX.jpg",
        products: [
          {
            id: 2,
            name: "Juego de Llaves Combinadas",
            description: "Set profesional de llaves métricas y SAE",
            features: [
              "24 piezas (8mm - 24mm)",
              "Acabado cromado",
              "Estuche organizador incluido",
              "Garantía de por vida"
            ],
            image: "https://images.unsplash.com/photo-1645639554326-6d738cf1695b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Valvulas y Conexiones",
    slug: "valvulas-conexiones",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Componentes esenciales para el control eficiente de fluidos. Garantizamos estanqueidad y resistencia en sistemas hidráulicos, con un amplia gama de materiales y medidas.",
    relatedBrands: [
      {
        id: 9,
        name: "PARKER",
        logo: "https://efc.com.pe/wp-content/uploads/2024/02/SKIPPER.jpg",
        products: [
          {
            id: 1,
            name: "Válvula de Bola 1/2\"",
            description: "Válvula de paso total para control de fluidos",
            features: [
              "Material: Bronce",
              "Presión: 600 PSI",
              "Rosca NPT",
              "Manija de palanca"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpromart.vteximg.com.br%2Farquivos%2Fids%2F7281754-275-275%2F152132.jpg%3Fv%3D638248676109800000&f=1&nofb=1&ipt=4e1d8b932c4fa770596e5ce3b5c0f85932141f5590d708102b803752524f105a"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Pernos y Productos de Fijación",
    slug: "pernos-productos-fijacion",
    image: "https://www.pernosyabrazaderasperu.com/images/servicios/1025.jpg",
    description: "Fijación segura resistente para cualquier estructura. Amplio stock de pernos, anclajes y sujeciones de alta resistencia, ideales para aplicaciones industriales.",
    relatedBrands: [
      {
        id: 10,
        name: "HILTI",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_81.webp",
        products: [
          {
            id: 1,
            name: "Pernos Hexagonales Grado 8",
            description: "Pernos de alta resistencia para aplicaciones estructurales",
            features: [
              "Material: Acero al carbono",
              "Grado 8 (alta resistencia)",
              "Acabado galvanizado",
              "Medidas: 1/2\" a 1\""
            ],
            image: "https://images.unsplash.com/photo-1759159092038-d414f661dbf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "EPP y Seguridad Industrial",
    slug: "epp-seguridad-industrial",
    image: "https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de Protección Personal (EPP) y elementos de seguridad industrial. Priorizamos la seguridad de los trabajadores en operaciones mineras e industriales.",
    relatedBrands: [
      {
        id: 11,
        name: "3M",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_80.webp",
        products: [
          {
            id: 1,
            name: "Casco de Seguridad Industrial",
            description: "Casco certificado para protección en obras",
            features: [
              "Certificación ANSI Z89.1",
              "Material: ABS de alta resistencia",
              "Sistema de suspensión ajustable",
              "Colores disponibles"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.preciocombustible.com%2Fwp-content%2Fuploads%2F2024%2F10%2FtcfXoFW1_acOhJMUn7OlD.png&f=1&nofb=1&ipt=4b5c6a3c8e5df3c692501671dfc9b3707c8b99d84223b59f4927e35a7b3c055d"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Electricidad e Iluminación",
    slug: "electricidad-iluminacion",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Materiales eléctricos e iluminación para instalaciones industriales. Productos certificados y de alta calidad para operaciones continuas",
    relatedBrands: [
      {
        id: 12,
        name: "INDECO",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_75.webp",
        products: [
          {
            id: 1,
            name: "Cable THW 12 AWG",
            description: "Cable eléctrico para instalaciones residenciales e industriales",
            features: [
              "Calibre: 12 AWG",
              "Tensión: 600V",
              "Aislamiento: PVC",
              "Certificación UL"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcircuitos-electricos.com%2Fwp-content%2Fuploads%2Fcables-electricos-1.jpg&f=1&nofb=1&ipt=42bf7dffa16a8695f49bb76d67a758585058b7a50e7bb6767fd0aabe56c0f891"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Pinturas y Acabados",
    slug: "pinturas-acabados",
    image: "https://images.unsplash.com/photo-1652829069968-4ded3e30f411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pinturas industriales y recubrimientos de alta calidad. Amplia gama de productos para protección y mantenimiento de estructuras y equipos industriales.",
    relatedBrands: [
      {
        id: 13,
        name: "VENCEDOR",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_54-1.webp",
        products: [
          {
            id: 1,
            name: "Pintura Látex Premium",
            description: "Pintura de alta cobertura para interiores y exteriores",
            features: [
              "Rendimiento: 40-45 m²/galón",
              "Secado rápido",
              "Lavable y resistente",
              "Colores variados"
            ],
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferreteriavidri.com%2Fimages%2Fitems%2Flarge%2F90428.jpg&f=1&nofb=1&ipt=2930021e3611cead87049e83279b076829d9452a747708e2c94a04ea1d410e96"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Insumos de Limpieza",
    slug: "insumos-limpieza",
    image: "https://images.unsplash.com/photo-1761641428582-b85a085340d1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Insumos y productos de limpieza industrial para mantenimiento de plantas e instalaciones. Productos eficientes y de calidad para la industria.",
    relatedBrands: [
      {
        id: 14,
        name: "SAPOLIO",
        logo: "https://efc.com.pe/wp-content/uploads/2023/12/rectangle_65-1.webp",
        products: [
          {
            id: 1,
            name: "Detergente Industrial 20L",
            description: "Detergente de alta concentración para limpieza industrial",
            features: [
              "Presentación: 20 litros",
              "pH neutro",
              "Biodegradable",
              "Alta eficiencia de limpieza"
            ],
            image: "https://industriaslyf.com/wp-content/uploads/DETERCLEAN-POR-20-LITROS.jpg"
          }
        ]
      }
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
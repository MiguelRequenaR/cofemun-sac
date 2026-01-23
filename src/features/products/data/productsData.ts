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
        id: 1,
        name: "DEWALT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1280px-DeWalt_Logo.svg.png",
        products: [
          {
            id: 1,
            name: "Sujetador de Succión a Batería Grabo 20v MAX\"",
            description: "Sujete y levante diversos materiales con el sujetador de succión a batería Grabo 20v MAX, este sujetador de succión utiliza una potente bomba de vacío eléctrica para levantar una amplia variedad de materiales pesados.",
            features: [
              "Pantalla de Control LED Brillante",
              "Alamara Sonora",
              "Mantenimiento Automático",
              "Visibilidad a la Luz Solar"
            ],
            image: "https://pe.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/DCE592B/DCE592B_6.jpg?resize=530x530"
          },
          {
            id: 2,
            name: "Taladro Percutor 1/2\" (13mm) Sin Carbones 20V MAX* XR",
            description: "Realice una amplia gama de aplicaciones exigentes con el Taladro Percutor Inalámbrico XR® de 20 V MAX* de 1/2 pulg. sin escobillas (batería y cargador se venden por separado), nuestro taladro percutor de 20 V MAX* de 2 velocidades** más potente.",
            features: [
              "TOOL CONNECT™ CHIP READY™",
              "Brillante luz de trabajo LED",
              "Alta retención de brocas",
              "Maximice la productividad"
            ],
            image: "https://pe.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/DCD806B-B3/DCD806B_2.jpg?resize=530x530"
          },
          {
            id: 3,
            name: "Taladro Atornillador 1/2\" (13mm) 20V MAX*",
            description: "Realice una amplia gama de aplicaciones exigentes con el Taladro Atornillador Inalámbrico XR® de 20 V MAX* de 1/2 pulg. sin escobillas (batería y cargador se venden por separado), nuestro taladro/atornillador de 20 V MAX* de 2 velocidades** más potente.",
            features: [
              "TOOL CONNECT™ CHIP READY™",
              "Brillante luz de trabajo LED",
              "Alta retención de brocas",
              "Maximice la productividad"
            ],
            image: "https://pe.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/DCD801B-B3/DCD801B_1.jpg?resize=530x530"
          },
          {
            id: 4,
            name: "Martillo Demoledor Hexagonal Inalámbrico 60V MAX* 15KG (41J EPTA)",
            description: "Este producto brinda el PODER DE LA ENERGÍA CON CABLES y la LIBERTAD INALÁMBRICA. El motor sin escobillas DEWALT de 60 V ofrece 41 joules de energía de impacto para los trabajos de demolición más duros en el sitio. A pesar de su alto rendimiento, el DCH911 presenta una vibración líder en su clase de 6,1 m/s2 gracias a un mecanismo flotante.",
            features: [
              "Indicador LED de Servicio",
              "Mecanismo Flotante para reducir la vibración",
              "Mangos laterales extraíbles",
              "Portaherramientas HEX De 28 mm"
            ],
            image: "https://pe.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/DCH966B-B3/DCH966KZ2_6.jpg?resize=530x530"
          },
          {
            id: 5,
            name: "Sierra Circular Eléctrica de 7 1/4\" (185mm) de 1500W",
            description: "Nueva sierra circular con cable de 1500W y 7,1/4\" (185mm), centrada en la durabilidad, el rendimiento, la asequibilidad y la facilidad de uso, ampliando la cartera actual de soluciones con una cartera de productos con una buena relación calidad-precio para profesionales.",
            features: [
              "Soplador de polvo",
              "Puerto de extracción de polvo",
              "Mango adicional",
              "Equilibrio ajustable"
            ],
            image: "https://pe.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/DWE5615-B2/DWE5615_1.jpg?resize=530x530"
          }
        ]
      },
      {
        id: 2,
        name: "BOSCH",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png",
        products: [
          {
            id: 1,
            name: "Taladro Percutor Inalámbrico PRO HEAVY DUTY GSB 12V - 30",
            description: "El taladro percutor inalámbrico PRO HEAVY DUTY GSB 12V - 30 es una herramienta versátil y potente, diseñada para trabajos pesados y exigentes. Con su batería de 12V y 30 J de energía de impacto, este taladro es ideal para aplicaciones industriales y de construcción.",
            features: [
              "Motor Brushless",
              "Toque de giro elevado",
              "Velocidad de perforado"
            ],
            image: "https://www.bosch-professional.com/pe/es/ocsmedia/379577-54/application-image/1434x828/taladro-de-percusion-inalambrico-pro-heavy-duty-gsb-12v-30-06019g91e0.png"
          },
          {
            id: 2,
            name: "Pulidora PRO HEAVY DUTY GSH 12V - 125",
            description: "La GPX 12V-125 es ideal para eliminar hologramas y arañazos leves en zonas más grandes. Es compatible con todas las baterías GBA 12V.",
            features: [
              "Rendimiento constante gracias al motor brushless",
              "Comodidad y precisión",
              "Mejor control gracias a la HMI",
              "Comoda de usar con interruptor de bloqueo",
              "Diseño compacto y ergonómico"
            ],
            image: "https://www.bosch-professional.com/pe/es/ocsmedia/518153-54/application-image/1434x828/pulidora-pro-heavy-duty-gpx-12v-125-06019l41k0.png"
          },
          {
            id: 3,
            name: "Martillo Demoledor Inalámbrico PRO HEAVY DUTY GSH 18V - 5",
            description: "El martillo demoledor GSH 18V-5 Professional se utiliza para tareas de cincelado, demolición o corrección, para demoler azulejos, romper y hacer canaletas en concreto, mampostería y ladrillo.",
            features: [
              "Cable de 8.5 J",
              "Relación peso-potencia gracias a su diseño liviano y compacto",
              "Control óptimo de la herramienta Start/Control"
            ],
            image: "https://www.bosch-professional.com/pe/es/ocsmedia/460183-54/application-image/1434x828/martillo-demoledor-inalambrico-con-sds-max-pro-heavy-duty-gsh-18v-5-06119182e0.png"
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "Herramientas Manuales",
    slug: "herramientas-manuales",
    image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Precisión y resistencia en tus manos. Amplia gama de herramientas ergonómicas y duraderas, indispensables para cualquier labor de ajuste, reparación o montaje.",
    relatedBrands: [

    ]
  },
  {
    id: 4,
    title: "Valvulas y Conexiones",
    slug: "valvulas-conexiones",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Componentes esenciales para el control eficiente de fluidos. Garantizamos estanqueidad y resistencia en sistemas hidráulicos, con un amplia gama de materiales y medidas.",
    relatedBrands: [

    ]
  },
  {
    id: 5,
    title: "Pernos y Productos de Fijación",
    slug: "pernos-productos-fijacion",
    image: "https://www.pernosyabrazaderasperu.com/images/servicios/1025.jpg",
    description: "Fijación segura resistente para cualquier estructura. Amplio stock de pernos, anclajes y sujeciones de alta resistencia, ideales para aplicaciones industriales.",
    relatedBrands: [

    ]
  },
  {
    id: 6,
    title: "EPP y Seguridad Industrial",
    slug: "epp-seguridad-industrial",
    image: "https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de Protección Personal (EPP) y elementos de seguridad industrial. Priorizamos la seguridad de los trabajadores en operaciones mineras e industriales.",
    relatedBrands: [

    ]
  },
  {
    id: 7,
    title: "Electricidad e Iluminación",
    slug: "electricidad-iluminacion",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Materiales eléctricos e iluminación para instalaciones industriales. Productos certificados y de alta calidad para operaciones continuas",
    relatedBrands: [

    ]
  },
  {
    id: 8,
    title: "Pinturas y Acabados",
    slug: "pinturas-acabados",
    image: "https://images.unsplash.com/photo-1652829069968-4ded3e30f411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pinturas industriales y recubrimientos de alta calidad. Amplia gama de productos para protección y mantenimiento de estructuras y equipos industriales.",
    relatedBrands: [

    ]
  },
  {
    id: 9,
    title: "Insumos de Limpieza",
    slug: "insumos-limpieza",
    image: "https://images.unsplash.com/photo-1761641428582-b85a085340d1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Insumos y productos de limpieza industrial para mantenimiento de plantas e instalaciones. Productos eficientes y de calidad para la industria.",
    relatedBrands: [

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
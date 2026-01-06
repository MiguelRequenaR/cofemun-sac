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
    title: "Materiales de Ferretería",
    slug: "materiales-ferreteria",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bricocee.com%2Fimages%2Fbricocee%2Fferreteria-materiales-construccion-cee.jpg&f=1&nofb=1&ipt=0c7234ddf57e6a6eb244ceb1facf5800c9c97dfbaf1106263a7d7de36f9e08da",
    description: "Materiales de construcción de alta calidad para todo tipo de proyectos. Contamos con una amplia gama de productos que cumplen con los más altos estándares de calidad y normativas peruanas.",
    relatedProducts: [
      {
        id: 1,
        name: "Cemento",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconcretosguadalajara.com%2Fwp-content%2Fuploads%2F2024%2F03%2FSaco-de-cemento-Portland-en-obra-de-construccion.jpg&f=1&nofb=1&ipt=36191ef450059534722e372a3a881b858ae93fed3a645c76c4abf885a8ba8815"
      },
      {
        id: 2,
        name: "Ladrillos",
        image: "https://images.unsplash.com/photo-1629608444154-6d052691632f?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 3,
        name: "Arena",
        image: "https://images.unsplash.com/photo-1681880511033-b9582a379ce2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: 4,
        name: "Piedra",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffoto-gratis%2Fpiedra-materiales-construccion-piedra-triturada_44527-571.jpg&f=1&nofb=1&ipt=ece296f73c984e1d2327438c32b74974c424d787922b690c9dfa98d60a2811f1"
      },
      {
        id: 5,
        name: "Hierro",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifeder.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fmateriales-ferrosos-foto-min-1024x768.jpg&f=1&nofb=1&ipt=5ade168327b093a69c4b747cc30a3fb11eedae7c4de5e26790d1c8af3cde6bd1"
      },
      {
        id: 6,
        name: "Tubos PVC",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpoceria-madrid.es%2Fwp-content%2Fuploads%2F2022%2F09%2FTipos-de-tuberia-de-plastico-y-sus-caracteristicas.jpg&f=1&nofb=1&ipt=6be62d36a012f149deb659e9c66616af556c46955fe2fe526f9e9fd92b82edc2"
      }
    ]
  },
  {
    id: 2,
    title: "Herramientas Electricas y Manuales",
    slug: "herramientas-electricas-manuales",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Herramientas profesionales de las mejores marcas para trabajos de construcción, carpintería y más. Garantizamos durabilidad y precisión en cada herramienta.",
    relatedProducts: [
      {
        id: 1,
        name: "Taladros",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaduamateriales.com%2Fwp-content%2Fuploads%2Fque-tipo-de-broca-se-necesita-para-aluminio.webp&f=1&nofb=1&ipt=9699e1ec3da2aad6dbe03225483491edfc96aaa3cc467142b150ef6898b7c8a3"
      },
      {
        id: 2,
        name: "Martillos",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.corporacionjabin.com%2Fwp-content%2Fuploads%2F2021%2F05%2FMartillo-con-mango-de-madera.jpg&f=1&nofb=1&ipt=2bf86baaa425b6df937d0ebf6dcc2dc602176024a4e1834680cb6dc34d0dee60"
      },
      {
        id: 3,
        name: "Destornilladores",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoolmania.cl%2F28888-medium_default%2Fjuego-de-destornilladores-puntas-plana-y-phillips-5-pzs-bahco-p-3000-5.jpg&f=1&nofb=1&ipt=2099a019b669012188be9408ed44edbf454314133736608f150a15a9d572f13e"
      },
      {
        id: 4,
        name: "Sierras",
        image: "https://promart.vteximg.com.br/arquivos/ids/8638293/imageUrl_1.jpg?v=638767617832100000"
      }
    ]
  },
  {
    id: 3,
    title: "Valvulas, Conexiones y Pernos",
    slug: "valvulas-conexiones",
    image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Todo lo necesario para instalaciones de gasfitería y fontanería. Productos de calidad para sistemas de agua, drenaje y calefacción.",
    relatedProducts: [
      {
        id: 1,
        name: "Válvulas",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpromart.vteximg.com.br%2Farquivos%2Fids%2F7281754-275-275%2F152132.jpg%3Fv%3D638248676109800000&f=1&nofb=1&ipt=4e1d8b932c4fa770596e5ce3b5c0f85932141f5590d708102b803752524f105a"
      },
      {
        id: 2,
        name: "Codos y Tés",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferreman.pe%2Fwp-content%2Fuploads%2F2023%2F07%2Fcodo-1.png&f=1&nofb=1&ipt=41e037b9ed9e3a4ca767d32acc668a8c704579f2eedca4bc17c7c07011d3c077"
      },
      {
        id: 3,
        name: "Grifos",
        image: "https://promart.vteximg.com.br/arquivos/ids/7468201-380-380/19739.jpg?v=638301585674100000"
      },
      {
        id: 4,
        name: "Cañerías",
        image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: 4,
    title: "EPP y Seguridad Industrial",
    slug: "epp-seguridad-industrial",
    image: "https://images.unsplash.com/photo-1755925193287-275aa7fe64f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equipos de Protección Personal (EPP) y elementos de seguridad industrial. Priorizamos la seguridad de los trabajadores en cada proyecto.",
    relatedProducts: [
      {
        id: 1,
        name: "Cascos",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.preciocombustible.com%2Fwp-content%2Fuploads%2F2024%2F10%2FtcfXoFW1_acOhJMUn7OlD.png&f=1&nofb=1&ipt=4b5c6a3c8e5df3c692501671dfc9b3707c8b99d84223b59f4927e35a7b3c055d"
      },
      {
        id: 2,
        name: "Chalecos",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_712727-MLM44233829621_122020-F.jpg&f=1&nofb=1&ipt=cd305c2babfd3d1ab92dcfd765c763ca83a1185ea0c697d908723ef4ce80fd7b"
      },
      {
        id: 3,
        name: "Guantes",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2FA1imG8LY4IL._AC_SL1500_.jpg&f=1&nofb=1&ipt=b474785bd12f11f9c2d86c1972bba83c20170ab4242d2f4ac39299b6634da93f"
      },
      {
        id: 4,
        name: "Gafas",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Findustriaferrehierro.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fgafas-industriales-1.jpg&f=1&nofb=1&ipt=d5074f6c49ff0f8501da3289342dc5e4f74d2ff2d27e556a1ac9705eaf87aca8"
      }
    ]
  },
  {
    id: 5,
    title: "Electricidad e Iluminación",
    slug: "electricidad-iluminacion",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Materiales eléctricos e iluminación para instalaciones residenciales e industriales. Productos certificados y de alta calidad.",
    relatedProducts: [
      {
        id: 1,
        name: "Cables",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcircuitos-electricos.com%2Fwp-content%2Fuploads%2Fcables-electricos-1.jpg&f=1&nofb=1&ipt=42bf7dffa16a8695f49bb76d67a758585058b7a50e7bb6767fd0aabe56c0f891"
      },
      {
        id: 2,
        name: "Interruptores",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felectricidad-basica.com%2Fwp-content%2Fuploads%2F2024%2F02%2FInterruptor-termomagnetico.jpg&f=1&nofb=1&ipt=ff8d0d467ae90fb0979dd01bab247b75481777ba8a8c84bc03e398d5161d83e2"
      },
      {
        id: 3,
        name: "Luminarias",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.varielec.mx%2Fassets%2Fimages%2Fluminarias-industrial-comercial.jpg&f=1&nofb=1&ipt=71e5950c48f7812dd06f5cd1e4a57d35a442832e137d294d3336fea6bb9972d0"
      },
      {
        id: 4,
        name: "Bombillas LED",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.adeo.com%2Fmkp%2F980c74f96b750da6ca45b3d43ddd21aa%2Fmedia.jpg&f=1&nofb=1&ipt=abe21646dc49821e34bf78ba5472165e4ec2daf2f0f363a8c2cab8b1f3f3c43a"
      }
    ]
  },
  {
    id: 6,
    title: "Pinturas y Acabados",
    slug: "pinturas-acabados",
    image: "https://images.unsplash.com/photo-1652829069968-4ded3e30f411?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pinturas y acabados de alta calidad para interiores y exteriores. Amplia gama de colores y texturas para dar el toque final a tu proyecto.",
    relatedProducts: [
      {
        id: 1,
        name: "Pintura Latex",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferreteriavidri.com%2Fimages%2Fitems%2Flarge%2F90428.jpg&f=1&nofb=1&ipt=2930021e3611cead87049e83279b076829d9452a747708e2c94a04ea1d410e96"
      },
      {
        id: 2,
        name: "Pintura Epóxica",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.i_WyrY8j1LG8Og3Ym0ZOXwHaHa%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=9034b924cc517766a45fe7147ba5a1dabe264b9ea1ef9d00a5046a7f430c171c"
      },
      {
        id: 3,
        name: "Barnices",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3bsindustriales.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fbarniz-dielectrico-clase-h1.png&f=1&nofb=1&ipt=a78cc11955407d89c1b2d3108ca2e66687bfa8b4ef3af3103460ae51d419ebaf"
      },
      {
        id: 4,
        name: "Impermeabilizantes",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.W_uLe5ooCa0gCJnulBK0lwHaHa%3Fpid%3DApi&f=1&ipt=617918dcd36b9af0f0959e076f79f1c40f48fb1045c93860ef21afbd1f648283"
      }
    ]
  },
  {
    id: 7,
    title: "Insumos de Limpieza",
    slug: "insumos-limpieza",
    image: "https://images.unsplash.com/photo-1761641428582-b85a085340d1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Insumos y productos de limpieza profesional para mantenimiento de obras y espacios. Productos eficientes y de calidad.",
    relatedProducts: [
      {
        id: 1,
        name: "Detergentes",
        image: "https://industriaslyf.com/wp-content/uploads/DETERCLEAN-POR-20-LITROS.jpg"
      },
      {
        id: 2,
        name: "Desinfectantes",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.luminwall.pt%2Fcliente%2Fcatalogo%2Fgel_23_xl.jpg&f=1&nofb=1&ipt=f49cca3bfb0d0ecdacff2b5b156be60de42f1ce5125489b8613b8f6c689a279c"
      },
      {
        id: 3,
        name: "Escobas y Mopas",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F815JFTNaJVL._AC_SL1500_.jpg&f=1&nofb=1&ipt=70ec05846c24b97127f5293fb1e38a52e5c6761af46e27bcf84b5247b9220002"
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
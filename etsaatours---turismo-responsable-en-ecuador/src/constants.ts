import { Tour } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Exclusive Amazon Tour – Achuar Luxury Experience',
    region: 'Amazonía',
    location: 'Comunidad Achuar de Sharamentsa',
    duration: '4 Días / 3 Noches',
    price: 1580,
    image: 'https://picsum.photos/seed/amazon1/1200/800',
    tag: 'Luxury Experience',
    description: 'Una experiencia amazónica de lujo auténtico, diseñada para viajeros exigentes que buscan conexión profunda con la selva, la cultura ancestral Achuar y el confort en un entorno natural exclusivo.',
    operation: 'Todos los días del año, incluidos feriados',
    groupSize: 'Programa privado / grupos reducidos',
    itinerary: [
      { day: 1, title: 'Bienvenida ancestral & conexión espiritual', description: 'Llegada a la comunidad Achuar, ceremonia de bienvenida, almuerzo típico, caminata por el Sendero Mente y fogata ancestral nocturna.' },
      { day: 2, title: 'Naturaleza sagrada & sabiduría ancestral', description: 'Observación de aves, visita a la Cascada Sagrada Achuar, taller de artesanías con mujeres Achuar y caminata nocturna.' },
      { day: 3, title: 'Ríos, lagunas sagradas & ritual de despedida', description: 'Saladero de loros, caminata por el Sendero Wayusentsa, laguna sagrada, descenso en balsa tradicional y ceremonia cultural de despedida.' },
      { day: 4, title: 'Últimos encuentros & salida', description: 'Observación de aves al amanecer, exposición de artesanías y salida de la comunidad.' }
    ],
    included: [
      'Alojamiento 3 noches en eco-lodge comunitario categoría superior',
      'Alimentación completa (desayunos, almuerzos y cenas)',
      'Guías locales Achuar certificados y bilingües',
      'Transporte fluvial interno',
      'Actividades culturales y rituales Achuar',
      'Agua purificada durante el programa',
      'Contribución directa al desarrollo comunitario Achuar'
    ],
    notIncluded: [
      'Transporte aéreo o terrestre hasta el punto de inicio',
      'Bebidas alcohólicas y snacks premium',
      'Gastos personales y compras de artesanías',
      'Seguro de viaje y/o asistencia médica',
      'Propinas'
    ],
    priceNote: 'Base doble | Programa privado | Mínimo 2 pasajeros',
    isLuxury: true
  },
  {
    id: '2',
    title: 'Extended Experience – Achuar Luxury Immersion',
    region: 'Amazonía',
    location: 'Kapawi Eco-Lodge & Reserve',
    duration: '5 Días / 4 Noches',
    price: 3450,
    image: 'https://picsum.photos/seed/amazon2/1200/800',
    tag: 'Luxury Immersion',
    description: 'Una experiencia amazónica extendida, íntima y transformadora, creada para viajeros de lujo que buscan autenticidad, exclusividad y conexión espiritual profunda.',
    operation: 'Todo el año',
    groupSize: 'Programa exclusivo | Grupos reducidos (máx. 8 pasajeros)',
    itinerary: [
      { day: 1, title: 'Llegada al mundo Achuar', description: 'Traslado aéreo interno de Shell hacia Kapawi, recepción personalizada y caminata de orientación ecológica.' },
      { day: 2, title: 'Selva viva & conocimiento ancestral', description: 'Caminata profunda, interpretación de plantas medicinales, canotaje silencioso y caminata nocturna.' },
      { day: 3, title: 'Espiritualidad, cultura & comunidad', description: 'Ritual matutino (opcional), visita a comunidad Achuar, taller de cerámica y noche cultural.' },
      { day: 4, title: 'Naturaleza prístina & contemplación', description: 'Observación de aves, senderos remotos de bosque primario y cena de despedida especial.' },
      { day: 5, title: 'Despedida & retorno', description: 'Última caminata corta o canotaje al amanecer y traslado aéreo de salida.' }
    ],
    included: [
      'Alojamiento 4 noches en Kapawi Eco-Lodge – cabaña privada',
      'Alimentación completa gourmet',
      'Traslados aéreos internos Shell a Kapawi',
      'Traslados terrestre de Quito a Shell',
      'Guías Achuar certificados',
      'Visitas comunitarias y actividades culturales',
      'Agua potable, café y té ilimitados'
    ],
    notIncluded: [
      'Vuelos internacionales o domésticos hasta el punto de conexión',
      'Bebidas alcohólicas premium',
      'Spa o terapias especiales',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base doble | Programa exclusivo | Lodge Kapawi',
    isLuxury: true
  },
  {
    id: '3',
    title: 'Cultural & Adventure Tours – Achuar Signature Experience',
    region: 'Amazonía',
    location: 'Sharamentsa → Kapawi → Wachirpas',
    duration: '8 Días / 7 Noches',
    price: 5200,
    image: 'https://picsum.photos/seed/amazon3/1200/800',
    tag: 'Signature Experience',
    description: 'Un viaje único en el mundo que combina confort selecto, aventura guiada, espiritualidad y convivencia real con el pueblo Achuar.',
    operation: 'Todo el año',
    groupSize: 'Grupos reducidos (máx. 6–8 pasajeros)',
    itinerary: [
      { day: 1, title: 'Llegada a Sharamentsa', description: 'Traslado aéreo/fluvial, recepción ceremonial y fogata ancestral.' },
      { day: 2, title: 'Naturaleza sagrada & saberes ancestrales', description: 'Observación de aves, cascada sagrada y taller de artesanías.' },
      { day: 3, title: 'Transición al lujo', description: 'Saladero de loros y traslado fluvial hacia Kapawi Eco-Lodge.' },
      { day: 4, title: 'Selva prístina & confort absoluto', description: 'Excursión profunda, canotaje silencioso y tiempo libre.' },
      { day: 5, title: 'Cultura viva & espiritualidad', description: 'Ritual matutino, visita comunitaria y noche cultural.' },
      { day: 6, title: 'Aventura hacia laguna Pitsacocha', description: 'Traslado fluvial, picnic en la selva y visita a comunidad Suwa.' },
      { day: 7, title: 'Vida Achuar auténtica', description: 'Traslado a Wachirpas, caminata espiritual y ceremonia de despedida.' },
      { day: 8, title: 'Amanecer amazónico & salida', description: 'Visita a saladero de loros y retorno.' }
    ],
    included: [
      '7 noches de alojamiento (lodges de lujo + camping premium)',
      'Alimentación completa gourmet y tradicional',
      'Guías Achuar certificados y guía naturalista bilingüe',
      'Traslados fluviales y aéreos internos',
      'Equipo completo para camping',
      'Contribución directa a comunidades Achuar'
    ],
    notIncluded: [
      'Vuelos internacionales o domésticos hasta punto de inicio',
      'Bebidas alcohólicas premium',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base doble | Programa exclusivo',
    isLuxury: true
  },
  {
    id: '4',
    title: 'Birding Tour – Achuar Pristine Rainforest Experience',
    region: 'Amazonía',
    location: 'Sharamentsa → Kapawi → Wachirpas',
    duration: '8 Días / 7 Noches',
    price: 5800,
    image: 'https://picsum.photos/seed/birding/1200/800',
    tag: 'Birding Expedition',
    description: 'Diseñado para observar aves emblemáticas y endémicas de la Amazonía como el hoatzin, cotingas y el águila harpía.',
    operation: 'Todo el año',
    groupSize: 'Grupos reducidos: máx. 6 pasajeros',
    itinerary: [
      { day: 1, title: 'Llegada y primera salida', description: 'Ceremonia de bienvenida y birding al atardecer.' },
      { day: 2, title: 'Ecosistemas acuáticos', description: 'Observación al amanecer y fotografía en collpas naturales.' },
      { day: 3, title: 'Transición a Kapawi', description: 'Traslado fluvial y observación desde torres naturales.' },
      { day: 4, title: 'Aves raras & confort', description: 'Birding intensivo (cotingas, rapaces) y canoa silenciosa.' },
      { day: 5, title: 'Rapaces mayores', description: 'Búsqueda de águila harpía en zonas estratégicas.' },
      { day: 6, title: 'Expedición a Wachirpas', description: 'Birding extremo en zonas intactas y campamento premium.' },
      { day: 7, title: 'Selva virgen & cultura', description: 'Birding en bosque primario remoto e interacción cultural.' },
      { day: 8, title: 'Última sesión & salida', description: 'Sesión final de birding y retorno.' }
    ],
    included: [
      '7 noches de alojamiento especializado',
      'Alimentación completa gourmet',
      'Guías Achuar especialistas y guía naturalista experto en birding',
      'Traslados aéreos y fluviales internos',
      'Uso de canoas silenciosas y senderos exclusivos'
    ],
    notIncluded: [
      'Vuelos internacionales o domésticos',
      'Equipos personales de fotografía / óptica',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base doble | Grupo reducido | Programa especializado',
    isLuxury: true
  },
  {
    id: '5',
    title: 'Cueva de los Tayos – Legendary Exploration Experience',
    region: 'Amazonía',
    location: 'Cordillera del Cóndor',
    duration: '4 Días / 3 Noches',
    price: 2900,
    image: 'https://picsum.photos/seed/tayos/1200/800',
    tag: 'Adventure Expedition',
    description: 'Una expedición de aventura de lujo al lugar mítico visitado por Neil Armstrong. Exploración subterránea en un entorno remoto.',
    operation: 'Bajo programación especial',
    groupSize: 'Grupos ultra reducidos: máx. 6–8 pasajeros',
    itinerary: [
      { day: 1, title: 'Llegada a la Amazonía profunda', description: 'Navegación por ríos Namangoza y Santiago, caminata a Kuankus y descenso a la cueva.' },
      { day: 2, title: 'Expedición subterránea', description: 'Exploración de salas: Daylight, Arco de Moricz, Cueva del Diablo y cascadas internas.' },
      { day: 3, title: 'Misterio ancestral', description: 'Continuación de la exploración y rituales Shuar del tabaco y ayahuasca.' },
      { day: 4, title: 'Ascenso y retorno', description: 'Ascenso mediante polipastos, acto cultural en Kuankus y retorno a Macas.' }
    ],
    included: [
      '3 noches de alojamiento en campamento premium equipado',
      'Alimentación completa gourmet de expedición',
      'Guías profesionales especializados en espeleología',
      'Equipo técnico certificado',
      'Permisos y logística de ingreso',
      'Contribución a comunidades locales'
    ],
    notIncluded: [
      'Vuelos nacionales o internacionales',
      'Seguro de viaje y rescate (obligatorio)',
      'Gastos personales',
      'Propinas'
    ],
    priceNote: 'Base doble | Grupo reducido | Operación especial',
    isLuxury: true
  },
  {
    id: '6',
    title: 'Luxury Rafting & Kayaking Expedition – Río Pastaza',
    region: 'Amazonía',
    location: 'Puerto Copataza → Río Pastaza → Sharamentsa',
    duration: '4 Días / 3 Noches',
    price: 2450,
    image: 'https://picsum.photos/seed/rafting/1200/800',
    tag: 'Adventure Luxury',
    description: 'Combina rafting y kayaking técnico, gastronomía premium y cultura Achuar, con un retorno escénico en avioneta.',
    operation: 'Todo el año',
    groupSize: 'Grupo reducido (máx. 8 pasajeros)',
    itinerary: [
      { day: 1, title: 'Rafting & Kayaking', description: 'Descenso clase III–IV, almuerzo gourmet en playa amazónica y recepción Achuar.' },
      { day: 2, title: 'Cultura Achuar', description: 'Ceremonia de bienvenida, caminata interpretativa y fogata ancestral.' },
      { day: 3, title: 'Exploración natural', description: 'Observación de aves, visita a cascada sagrada y cena de despedida.' },
      { day: 4, title: 'Retorno aéreo escénico', description: 'Vuelo en avioneta Sharamentsa – punto de conexión.' }
    ],
    included: [
      '3 noches de alojamiento en lodge Achuar categoría superior',
      'Alimentación completa gourmet y tradicional',
      'Guías profesionales certificados en rafting y kayaking',
      'Vuelo en avioneta desde Sharamentsa (retorno)',
      'Equipos completos de rafting y kayak'
    ],
    notIncluded: [
      'Transporte hasta Puerto Copataza',
      'Seguro de viaje y deportes de aventura (obligatorio)',
      'Gastos personales',
      'Propinas'
    ],
    priceNote: 'Base doble | Grupo reducido | Retorno aéreo incluido',
    isLuxury: true
  },
  {
    id: '7',
    title: 'Luxury Andes Experience – Ecuador',
    region: 'Andes',
    location: 'Quito → Cotopaxi → Otavalo',
    duration: '4 Días / 3 Noches',
    price: 4200,
    image: 'https://picsum.photos/seed/andes/1200/800',
    tag: 'Andean Luxury',
    description: 'Alojamiento en hoteles boutique y haciendas patrimoniales. Quito colonial, Volcán Cotopaxi y el mercado de Otavalo.',
    operation: 'Privado',
    groupSize: 'Mínimo 2 pasajeros',
    itinerary: [
      { day: 1, title: 'Quito Patrimonial', description: 'Recepción VIP, tour privado por el Centro Histórico y cena de autor.' },
      { day: 2, title: 'Volcán Cotopaxi', description: 'Laguna de Limpiopungo, caminata en el páramo y almuerzo en Hacienda San Agustín.' },
      { day: 3, title: 'Cultura & Bienestar', description: 'Cabalgata privada, spa andino y visita a comunidades artesanales.' },
      { day: 4, title: 'Otavalo Exclusivo', description: 'Mercado artesanal, Laguna de Cuicocha y almuerzo en Hacienda Zuleta.' }
    ],
    included: [
      'Alojamiento de lujo en hoteles boutique y haciendas',
      'Traslados privados terrestres SUV premium',
      'Guía profesional bilingüe especializado',
      'Alimentación gourmet según itinerario',
      'Experiencias de bienestar (spa/cabalgata)'
    ],
    notIncluded: [
      'Boletos aéreos',
      'Gastos personales',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base 2 pasajeros – temporada media',
    isLuxury: true
  },
  {
    id: '8',
    title: 'Luxury Pacific Experience – Ecuador',
    region: 'Costa',
    location: 'Guayaquil → Manabí → Machalilla',
    duration: '4 Días / 3 Noches',
    price: 3900,
    image: 'https://picsum.photos/seed/pacific/1200/800',
    tag: 'Coastal Luxury',
    description: 'Hospitalidad de lujo en Guayaquil, spa frente al mar en Manabí y naturaleza marina en el Parque Nacional Machalilla.',
    operation: 'Servicio privado',
    groupSize: 'Mínimo 2 pasajeros',
    itinerary: [
      { day: 1, title: 'Guayaquil Exclusivo', description: 'Recepción VIP, Hotel del Parque, city tour privado y cena de autor.' },
      { day: 2, title: 'Ruta del Spondylus', description: 'Traslado a Manabí, check-in en Tanusas Retreat y spa holístico.' },
      { day: 3, title: 'Naturaleza Marina', description: 'Excursión privada a Isla de la Plata y avistamiento de fauna.' },
      { day: 4, title: 'Retorno', description: 'Mañana de descanso en playa y traslado de retorno.' }
    ],
    included: [
      'Alojamiento de lujo en hotel boutique y eco-lodge premium',
      'Traslados privados terrestres SUV premium',
      'Guía profesional bilingüe',
      'Excursión marítima privada a Isla de la Plata',
      'Alimentación gourmet'
    ],
    notIncluded: [
      'Boletos aéreos',
      'Gastos personales',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base 2 pasajeros – temporada media',
    isLuxury: true
  },
  {
    id: '9',
    title: 'Galápagos Signature Luxury Experience',
    region: 'Galápagos',
    location: 'Isla Santa Cruz',
    duration: '5 Días / 4 Noches',
    price: 4800,
    image: 'https://picsum.photos/seed/galapagos_luxury/1200/800',
    tag: 'Signature Luxury',
    description: 'Experiencia land-based premium en Isla Santa Cruz. Conservación, playas icónicas y navegación privada de lujo.',
    operation: 'Servicio privado',
    groupSize: 'Mínimo 2 pasajeros',
    itinerary: [
      { day: 1, title: 'Llegada a Galápagos', description: 'Recepción VIP en Baltra y traslado privado a Puerto Ayora.' },
      { day: 2, title: 'Conservación & Playas', description: 'Estación Charles Darwin y caminata natural a Tortuga Bay.' },
      { day: 3, title: 'Naturaleza Costera', description: 'Playa El Garrapatero y recorrido por Academy Bay.' },
      { day: 4, title: 'Navegación Privada', description: 'Yate privado de lujo, snorkeling premium y fauna marina.' },
      { day: 5, title: 'Despedida & Retorno', description: 'Traslado privado al aeropuerto de Baltra.' }
    ],
    included: [
      'Alojamiento de lujo en hotel boutique premium',
      'Guía naturalista bilingüe certificado',
      'Navegación en yate privado de alta gama',
      'Equipo de snorkeling premium',
      'Alimentación gourmet completa'
    ],
    notIncluded: [
      'Boletos aéreos',
      'Entrada al Parque Nacional Galápagos (USD 100)',
      'Tarjeta de Control de Tránsito (TCT) (USD 20)',
      'Seguro de viaje',
      'Propinas'
    ],
    priceNote: 'Base 2 pasajeros | Temporada media',
    isLuxury: true
  },
  {
    id: '10',
    title: 'Ecuador Grand Luxury Experience',
    region: 'Ecuador',
    location: 'Andes – Amazonía – Galápagos',
    duration: '15 Días / 14 Noches',
    price: 18500,
    image: 'https://picsum.photos/seed/ecuador_grand/1200/800',
    tag: 'Ultra Luxury',
    description: 'El viaje definitivo por Ecuador. Combina lo mejor de los Andes, la Amazonía y Galápagos con estándares de ultra lujo.',
    operation: 'Servicio 100 % privado',
    groupSize: 'Mínimo 2 pasajeros',
    itinerary: [
      { day: '1-6', title: 'Andes del Ecuador', description: 'Quito patrimonial, Cotopaxi y haciendas históricas.' },
      { day: '7-10', title: 'Amazonía Ecuatoriana', description: 'Parque Nacional Yasuní y Napo Wildlife Center.' },
      { day: '11-15', title: 'Islas Galápagos', description: 'Isla Santa Cruz, navegación privada y fauna única.' }
    ],
    included: [
      '14 noches en hoteles boutique y eco-lodges ultra lujo',
      'Todos los traslados privados y vuelos internos',
      'Excursiones privadas personalizadas en las 3 regiones',
      'Guías naturalistas certificados bilingües',
      'Alimentación completa gourmet'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Impuestos de entrada a Parques Nacionales',
      'Seguro de viaje internacional',
      'Gastos personales',
      'Propinas'
    ],
    priceNote: 'Nivel lujo integral | Programa 100% personalizable',
    isLuxury: true
  }
];

export const REGIONS = ['All Regions', 'Amazonía', 'Andes', 'Costa', 'Galápagos', 'Ecuador'];

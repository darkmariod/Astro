import { createClient } from '@sanity/client'

const TOURS = [
  { id: '1', title: 'Exclusive Amazon Tour – Achuar Luxury Experience', region: 'Amazonía', location: 'Comunidad Achuar de Sharamentsa', duration: '4 Días / 3 Noches', price: 1580, tag: 'Luxury Experience', description: 'Una experiencia amazónica de lujo auténtico', operation: 'Todos los días del año', groupSize: 'Programa privado / grupos reducidos', priceNote: 'Base doble | Mínimo 2 pasajeros', isLuxury: true, included: ['Alojamiento 3 noches en eco-lodge','Alimentación completa','Guías locales Achuar'], notIncluded: ['Transporte aéreo','Seguro de viaje'], itinerary: [{day:'1',title:'Bienvenida ancestral',description:'Llegada a la comunidad Achuar'}] },
  { id: '2', title: 'Extended Experience – Achuar Luxury Immersion', region: 'Amazonía', location: 'Kapawi Eco-Lodge', duration: '5 Días / 4 Noches', price: 3450, tag: 'Luxury Immersion', description: 'Una experiencia amazónica extendida', operation: 'Todo el año', groupSize: 'Máx. 8 pasajeros', priceNote: 'Base doble | Lodge Kapawi', isLuxury: true, included: ['Alojamiento 4 noches','Alimentación completa gourmet'], notIncluded: ['Vuelos internacionales','Seguro de viaje'], itinerary: [{day:'1',title:'Llegada al mundo Achuar',description:'Traslado aéreo interno'}] },
  { id: '3', title: 'Cultural & Adventure Tours – Achuar Signature Experience', region: 'Amazonía', location: 'Sharamentsa → Kapawi → Wachirpas', duration: '8 Días / 7 Noches', price: 5200, tag: 'Signature Experience', description: 'Un viaje único que combina confort y aventura', operation: 'Todo el año', groupSize: 'Máx. 6–8 pasajeros', priceNote: 'Base doble | Programa exclusivo', isLuxury: true, included: ['7 noches de alojamiento','Alimentación completa'], notIncluded: ['Vuelos internacionales','Seguro de viaje'], itinerary: [{day:'1',title:'Llegada a Sharamentsa',description:'Traslado aéreo/fluvial'}] },
  { id: '4', title: 'Birding Tour – Achuar Pristine Rainforest Experience', region: 'Amazonía', location: 'Sharamentsa → Kapawi → Wachirpas', duration: '8 Días / 7 Noches', price: 5800, tag: 'Birding Expedition', description: 'Diseñado para observar aves emblemáticas', operation: 'Todo el año', groupSize: 'Máx. 6 pasajeros', priceNote: 'Base doble | Programa especializado', isLuxury: true, included: ['7 noches de alojamiento especializado','Guías expertos en birding'], notIncluded: ['Vuelos internacionales','Seguro de viaje'], itinerary: [{day:'1',title:'Llegada y primera salida',description:'Ceremonia de bienvenida'}] },
  { id: '5', title: 'Cueva de los Tayos – Legendary Exploration Experience', region: 'Amazonía', location: 'Cordillera del Cóndor', duration: '4 Días / 3 Noches', price: 2900, tag: 'Adventure Expedition', description: 'Expedición al lugar mítico visitado por Neil Armstrong', operation: 'Bajo programación especial', groupSize: 'Máx. 6–8 pasajeros', priceNote: 'Base doble | Operación especial', isLuxury: true, included: ['3 noches campamento premium','Equipo técnico certificado'], notIncluded: ['Vuelos nacionales','Seguro de viaje'], itinerary: [{day:'1',title:'Llegada a la Amazonía profunda',description:'Navegación por ríos'}] },
  { id: '6', title: 'Luxury Rafting & Kayaking Expedition – Río Pastaza', region: 'Amazonía', location: 'Puerto Copataza → Río Pastaza → Sharamentsa', duration: '4 Días / 3 Noches', price: 2450, tag: 'Adventure Luxury', description: 'Combina rafting y kayaking técnico con cultura Achuar', operation: 'Todo el año', groupSize: 'Máx. 8 pasajeros', priceNote: 'Base doble | Retorno aéreo incluido', isLuxury: true, included: ['3 noches en lodge Achuar','Equipos de rafting y kayak'], notIncluded: ['Transporte hasta Puerto Copataza','Seguro de viaje'], itinerary: [{day:'1',title:'Rafting & Kayaking',description:'Descenso clase III–IV'}] },
  { id: '7', title: 'Luxury Andes Experience – Ecuador', region: 'Andes', location: 'Quito → Cotopaxi → Otavalo', duration: '4 Días / 3 Noches', price: 4200, tag: 'Andean Luxury', description: 'Hoteles boutique y haciendas patrimoniales', operation: 'Privado', groupSize: 'Mínimo 2 pasajeros', priceNote: 'Base 2 pasajeros – temporada media', isLuxury: true, included: ['Alojamiento de lujo','Traslados privados SUV'], notIncluded: ['Boletos aéreos','Seguro de viaje'], itinerary: [{day:'1',title:'Quito Patrimonial',description:'Recepción VIP'}] },
  { id: '8', title: 'Luxury Pacific Experience – Ecuador', region: 'Costa', location: 'Guayaquil → Manabí → Machalilla', duration: '4 Días / 3 Noches', price: 3900, tag: 'Coastal Luxury', description: 'Hospitalidad de lujo en Guayaquil y Manabí', operation: 'Servicio privado', groupSize: 'Mínimo 2 pasajeros', priceNote: 'Base 2 pasajeros – temporada media', isLuxury: true, included: ['Alojamiento boutique','Excursión marítima privada'], notIncluded: ['Boletos aéreos','Seguro de viaje'], itinerary: [{day:'1',title:'Guayaquil Exclusivo',description:'Recepción VIP'}] },
  { id: '9', title: 'Galápagos Signature Luxury Experience', region: 'Galápagos', location: 'Isla Santa Cruz', duration: '5 Días / 4 Noches', price: 4800, tag: 'Signature Luxury', description: 'Experiencia land-based premium en Isla Santa Cruz', operation: 'Servicio privado', groupSize: 'Mínimo 2 pasajeros', priceNote: 'Base 2 pasajeros | Temporada media', isLuxury: true, included: ['Alojamiento boutique premium','Navegación en yate privado'], notIncluded: ['Boletos aéreos','Entrada Parque Nacional $100'], itinerary: [{day:'1',title:'Llegada a Galápagos',description:'Recepción VIP en Baltra'}] },
  { id: '10', title: 'Ecuador Grand Luxury Experience', region: 'Ecuador', location: 'Andes – Amazonía – Galápagos', duration: '15 Días / 14 Noches', price: 18500, tag: 'Ultra Luxury', description: 'El viaje definitivo por Ecuador', operation: 'Servicio 100% privado', groupSize: 'Mínimo 2 pasajeros', priceNote: 'Nivel lujo integral | 100% personalizable', isLuxury: true, included: ['14 noches ultra lujo','Todos los traslados privados'], notIncluded: ['Vuelos internacionales','Seguro de viaje'], itinerary: [{day:'1-6',title:'Andes del Ecuador',description:'Quito patrimonial y Cotopaxi'}] }
]

const client = createClient({
  projectId: 'vci1cijn',
  dataset: 'production',
  token: 'skwK5JOn35HCDcPE28aRbdex7XuOw8EqJcIH7umS4fL3tpHkPHtzlc3mdfmex1tMbBSCbkvwoGbeCgXYCvv0R0INAaP0wyH2FnVMby7KqmxVNvZb7a85lbeRIozHakLkW2d3TM27KyfNax3jlU7PZmYgh6riXifZ1iWNy36Jug7Ld8Ri5R9M',
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function importTours() {
  for (const tour of TOURS) {
    await client.create({
      _type: 'tour',
      ...tour,
      whatsapp: '593961906731',
      itinerary: tour.itinerary.map(i => ({ _key: String(i.day), ...i }))
    })
    console.log(`✅ ${tour.title}`)
  }
  console.log('🎉 Todos los tours importados!')
}

importTours()

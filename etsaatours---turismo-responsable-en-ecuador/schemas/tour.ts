export default {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre del Tour',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'region',
      title: 'Región',
      type: 'string',
      options: {
        list: ['Amazonía', 'Andes', 'Costa', 'Galápagos', 'Ecuador', 'Comunidad']
      }
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duración',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Precio (USD)',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Foto del Tour',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'tag',
      title: 'Etiqueta',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'operation',
      title: 'Operación',
      type: 'string'
    },
    {
      name: 'groupSize',
      title: 'Tamaño del Grupo',
      type: 'string'
    },
    {
      name: 'priceNote',
      title: 'Nota de Precio',
      type: 'string'
    },
    {
      name: 'isLuxury',
      title: '¿Es Luxury?',
      type: 'boolean'
    },
    {
      name: 'whatsapp',
      title: 'Número WhatsApp',
      type: 'string',
      description: 'Ej: 593987654321 (con código de país, sin +)'
    },
    {
      name: 'included',
      title: '¿Qué incluye?',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'notIncluded',
      title: '¿Qué NO incluye?',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'itinerary',
      title: 'Itinerario',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', title: 'Día', type: 'string' },
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text' }
        ]
      }]
    }
  ]
}

// src/sanity/schemas/sectionCard.ts
export default {
  name: 'sectionCard',
  title: 'Card de Sección',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'variant',
      title: 'Variante',
      type: 'string',
      options: {
        list: [
          { title: 'Testimonios', value: 'testimonios' },
          { title: 'Casos', value: 'casos' },
          { title: 'Podcast', value: 'podcast' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
}
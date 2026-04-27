// src/sanity/schemas/heroSection.ts
export default {
  name: 'heroSection',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    {
      name: 'titleLine1',
      title: 'Título Línea 1',
      type: 'string',
      description: 'Texto antes del highlight',
    },
    {
      name: 'highlight1',
      title: 'Highlight 1',
      type: 'string',
      description: 'Palabra resaltada en línea 1',
    },
    {
      name: 'titleLine2',
      title: 'Título Línea 2',
      type: 'string',
      description: 'Texto después del highlight',
    },
    {
      name: 'highlight2',
      title: 'Highlight 2',
      type: 'string',
      description: 'Palabra resaltada en línea 2',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Segundo bloque de texto',
    },
    {
      name: 'highlight3',
      title: 'Highlight 3',
      type: 'string',
      description: 'Palabra resaltada en subtítulo',
    },
    {
      name: 'highlight4',
      title: 'Highlight 4',
      type: 'string',
      description: 'Otra palabra resaltada',
    },
    {
      name: 'highlight5',
      title: 'Highlight 5',
      type: 'string',
      description: 'Otra palabra resaltada',
    },
    {
      name: 'ctaPrimary',
      title: 'Botón Principal',
      type: 'object',
      fields: [
        { name: 'label', title: 'Texto', type: 'string' },
        { name: 'link', title: 'URL', type: 'string' },
      ],
    },
    {
      name: 'ctaSecondary',
      title: 'Botón Secundario',
      type: 'object',
      fields: [
        { name: 'label', title: 'Texto', type: 'string' },
        { name: 'link', title: 'URL', type: 'string' },
      ],
    },
  ],
}
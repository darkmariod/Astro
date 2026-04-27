// sanity/schemas/heroSection.ts
export default {
  name: 'heroSection',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    { name: 'titleLine1', title: 'Título Línea 1', type: 'string' },
    { name: 'highlight1', title: 'Highlight 1', type: 'string' },
    { name: 'titleLine2', title: 'Título Línea 2', type: 'string' },
    { name: 'highlight2', title: 'Highlight 2', type: 'string' },
    { name: 'subtitle', title: 'Subtítulo', type: 'text' },
    { name: 'highlight3', title: 'Highlight 3', type: 'string' },
    { name: 'highlight4', title: 'Highlight 4', type: 'string' },
    { name: 'highlight5', title: 'Highlight 5', type: 'string' },
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
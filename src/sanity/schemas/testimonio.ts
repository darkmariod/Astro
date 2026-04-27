// src/sanity/schemas/testimonio.ts
export default {
  name: 'testimonio',
  title: 'Testimonio',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Cliente',
      type: 'string',
    },
    {
      name: 'cargo',
      title: 'Cargo/Ocupación',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Link a Instagram u otra red social',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
}
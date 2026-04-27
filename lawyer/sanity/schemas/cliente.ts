// sanity/schemas/cliente.ts
export default {
  name: 'cliente',
  title: 'Cliente / Logo',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre de la Empresa', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
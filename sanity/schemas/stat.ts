// sanity/schemas/stat.ts
export default {
  name: 'stat',
  title: 'Estadística',
  type: 'document',
  fields: [
    { name: 'label', title: 'Etiqueta', type: 'string' },
    { name: 'value', title: 'Valor Numérico', type: 'number' },
    { name: 'isText', title: 'Es Texto Libre', type: 'boolean', initialValue: false },
    { name: 'textValue', title: 'Valor como Texto', type: 'string' },
    { name: 'prefix', title: 'Prefijo', type: 'string' },
    { name: 'suffix', title: 'Sufijo', type: 'string' },
    { name: 'icon', title: 'Ícono', type: 'image' },
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
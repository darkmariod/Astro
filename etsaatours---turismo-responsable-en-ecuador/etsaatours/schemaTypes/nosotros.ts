export default {
  name: 'nosotros',
  title: 'Nosotros',
  type: 'document',
  fields: [
    { name: 'historia', title: 'Historia (párrafo principal)', type: 'text' },
    { name: 'anos', title: 'Años de experiencia', type: 'string' },
    { name: 'tours', title: 'Tours realizados', type: 'string' },
    { name: 'mision', title: 'Misión', type: 'text' },
    { name: 'vision', title: 'Visión', type: 'text' },
    { name: 'valores', title: 'Valores', type: 'text' },
    { name: 'imagen', title: 'Foto Nosotros', type: 'image', options: { hotspot: true } },
  ]
}

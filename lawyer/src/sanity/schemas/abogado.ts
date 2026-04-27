// src/sanity/schemas/abogado.ts
export default {
  name: 'abogado',
  title: 'Abogado',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'especialidad',
      title: 'Especialidad',
      type: 'string',
    },
    {
      name: 'telefono',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'perfilLink',
      title: 'Link al Perfil',
      type: 'string',
    },
  ],
}
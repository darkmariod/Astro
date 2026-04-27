// src/sanity/schemas/caso.ts
export default {
  name: 'caso',
  title: 'Caso Relevante',
  type: 'document',
  fields: [
    {
      name: 'numero',
      title: 'Número de Proceso',
      type: 'string',
    },
    {
      name: 'titulo',
      title: 'Título del Caso',
      type: 'string',
    },
    {
      name: 'nombre',
      title: 'Nombre del Cliente',
      type: 'string',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sentencia',
      title: 'Link a Sentencia (PDF)',
      type: 'file',
      title: 'Archivo PDF de la Sentencia',
    },
    {
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Mostrar en el header de la página',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
}
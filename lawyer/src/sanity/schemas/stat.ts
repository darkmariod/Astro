// src/sanity/schemas/stat.ts
export default {
  name: 'stat',
  title: 'Estadística',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Etiqueta',
      type: 'string',
      description: 'Texto que describe la estadística',
    },
    {
      name: 'value',
      title: 'Valor Numérico',
      type: 'number',
      description: 'Número a mostrar (opcional si es texto)',
    },
    {
      name: 'isText',
      title: 'Es Texto Libre',
      type: 'boolean',
      description: 'Si está activado, muestra el texto en lugar del número',
      initialValue: false,
    },
    {
      name: 'textValue',
      title: 'Valor como Texto',
      type: 'string',
      description: 'Usa esto si esText está activado',
    },
    {
      name: 'prefix',
      title: 'Prefijo',
      type: 'string',
      description: 'Símbolo antes del número (ej: +)',
    },
    {
      name: 'suffix',
      title: 'Sufijo',
      type: 'string',
      description: 'Símbolo después del número (ej: %)',
    },
    {
      name: 'icon',
      title: 'Ícono',
      type: 'image',
      description: 'Ícono SVG o imagen de la estadística',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición',
    },
  ],
}
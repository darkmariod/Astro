// sanity/schemas/siteSettings.ts - Schema para Sanity Studio
export default {
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Nombre de la Empresa',
      type: 'string',
      initialValue: 'Centeno - Firma de Abogados',
    },
    {
      name: 'logo',
      title: 'Logo Principal',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'logoWhite',
      title: 'Logo Blanco (Footer)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'whatsapp',
      title: 'Número de WhatsApp',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email de Contacto',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'text',
    },
    {
      name: 'addressLink',
      title: 'Link de Google Maps',
      type: 'url',
    },
    {
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Plataforma', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'companyName',
    },
  },
}
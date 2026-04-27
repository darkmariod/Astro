// sanity/structure/structure.ts
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Centeno Abogados - CMS')
    .items([
      S.documentTypeListItem('siteSettings').title('Configuración del Sitio'),
      S.documentTypeListItem('heroSection').title('Sección Hero'),
      S.divider(),
      S.documentTypeListItem('stat').title('Estadísticas'),
      S.documentTypeListItem('testimonio').title('Testimonios'),
      S.documentTypeListItem('cliente').title('Clientes / Logos'),
      S.divider(),
      S.documentTypeListItem('caso').title('Casos Relevantes'),
      S.documentTypeListItem('abogado').title('Abogados'),
      S.documentTypeListItem('sectionCard').title('Cards de Sección'),
    ])
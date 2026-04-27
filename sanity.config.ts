// sanity.config.ts - Configuración de Sanity Studio
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { structure } from './sanity/structure/structure'

export default defineConfig({
  name: 'lawyer-cms',
  title: 'Centeno Abogados CMS',
  projectId: 'bc6tsimv',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || '8n5kn6tw',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: import.meta.env.SANITY_TOKEN,
})

const builder = createImageUrlBuilder({
  projectId: import.meta.env.SANITY_PROJECT_ID || '8n5kn6tw',
  dataset: import.meta.env.SANITY_DATASET || 'production',
})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  heroSection: `*[_type == "heroSection"][0]`,
  stats: `*[_type == "stat"] | order(order asc)`,
  testimonios: `*[_type == "testimonio"] | order(order asc)`,
  clientes: `*[_type == "cliente"] | order(order asc)`,
  casos: `*[_type == "caso"] | order(order asc)`,
  casoFeatured: `*[_type == "caso" && featured == true][0]`,
  abogado: `*[_type == "abogado"][0]`,
  sectionCards: `*[_type == "sectionCard"] | order(order asc)`,
}

// Fetch helpers
export async function getSiteSettings() {
  return sanityClient.fetch(queries.siteSettings)
}

export async function getHeroSection() {
  return sanityClient.fetch(queries.heroSection)
}

export async function getStats() {
  return sanityClient.fetch(queries.stats)
}

export async function getTestimonios() {
  return sanityClient.fetch(queries.testimonios)
}

export async function getClientes() {
  return sanityClient.fetch(queries.clientes)
}

export async function getCasos() {
  return sanityClient.fetch(queries.casos)
}

export async function getCasoFeatured() {
  return sanityClient.fetch(queries.casoFeatured)
}

export async function getAbogado() {
  return sanityClient.fetch(queries.abogado)
}

export async function getSectionCards() {
  return sanityClient.fetch(queries.sectionCards)
}

# Sanity CMS Integration Exploration Report

## Project: lawyer
## Change: sanity-cms-integration
## Date: 2026-04-21

---

## Goal

Make ALL content editable by the lawyer from Sanity Studio:
- All text content (headings, descriptions, buttons, labels)
- All images
- All links
- Statistics/numbers
- Lists (testimonios, casos, logos)

---

## 1. Full Content Inventory

### 1.1 Navigation (NavbarClient.jsx)

| Content Type | Hardcoded Value | Location |
|--------------|-----------------|----------|
| Logo path | /logo.svg | Line 25 |
| Nav links | Inicio, Testimonios, Casos Relevantes, Contacto | Lines 6-10 |
| Link URLs | /, /testimonios, /casos-relevantes, /contacto | Lines 6-10 |
| Link colors | #f08f0a, #312780 | Line 41 |

### 1.2 Hero Section (HeroClient.jsx)

| Content Type | Hardcoded Value | Location |
|--------------|-----------------|----------|
| Main heading (part 1) | "Nos caracterizamos por el uso permanente de tecnologia e inmediatez en la gestion procesal" | Lines 24-41 |
| Main heading (highlight 1) | "tecnologia" | Line 31 |
| Main heading (highlight 2) | "gestion procesal" | Line 40 |
| Secondary heading | "Somos abogados comprometidos en asegurar la actividad productiva y laboral de quienes confian en nuestros servicios" | Lines 51-87 |
| Secondary highlights | "asegurar", "actividad", "productiva", "laboral" | Lines 58-85 |
| CTA Button 1 | "Agenda tu cita" -> /agendarcita | Lines 98-110 |
| CTA Button 2 | "Conoce nuestras Membresias" -> /membresias | Lines 112-122 |
| Background gradient | from-[#4533ce] to-[#5b44d4] | Line 6 |
| Accent color | #f08f0a | Multiple |

### 1.3 Statistics Bar (StatsBarClient.jsx)

| Stat | Label | Value | Prefix/Suffix | Icon |
|------|-------|-------|---------------|------|
| Stat 1 | "12 anos litigando contra el Estado" | text | isText: true | /trophy.svg |
| Stat 2 | "Casos Ganados" | 98 | suffix: % | /trophy.svg |
| Stat 3 | "Cobertura Nacional" | 100 | suffix: % | /ecuador.svg |
| Stat 4 | "Virtual" | 100 | suffix: % | /laptop.svg |
| Stat 5 | "Clientes Satisfechos" | 437 | prefix: + | /thumb-up.svg |
| Section Title | "Nuestra experiencia" | - | - | Line 59 |

### 1.4 Testimonios (TestimoniosGridClient.jsx)

| # | Nombre | Cargo | Imagen | Link |
|---|--------|-------|--------|------|
| 1 | Patricia Leon | Funcionaria Registro Civil | /testimonios/patricia-leon.webp | https://www.instagram.com/centeno.abogados/ |
| 2 | Raquel Silva | Extrabajadora del CNE | /testimonios/raquel-silva.webp | https://www.instagram.com/centeno.abogados/ |
| 3 | Juan Falconi | Gerente de IAF Industrias | /testimonios/juan-falconi.webp | https://www.instagram.com/centeno.abogados/ |
| 4 | Cristina Munoz | Medico del IESS | /testimonios/cristina-munoz.webp | https://www.instagram.com/centeno.abogados/ |
| - | Link text | "Ver Mas" | - | Line 75 |

### 1.5 Logo Carousel (LogoCarouselClient.jsx)

| # | Business Name | Logo Path |
|---|--------------|----------|
| 1 | Cacpeco | /logos/cacpeco.svg |
| 2 | Banco ProCredit | /logos/banco-procredit.svg |
| 3 | Nexo Growth Marketing | /logos/nexo.svg |
| 4 | Burocracia CEAP | /logos/burocracia-ceap.svg |
| 5 | Cupido Viajero | /logos/cupido-viajero.svg |
| 6 | Fernando Daquilema | /logos/fernando-daquilema.svg |
| 7 | Giro Digital | /logos/giro-digital.svg |
| 8 | IAF Industrias | /logos/iaf-industrias.svg |
| 9 | Jatunwasi | /logos/jatunwasi.svg |
| 10 | UEA Nazareno | /logos/nazareno.svg |
| 11 | Red Ecuatoriana de Pedagogia | /logos/red-ec-pedagogia.svg |
| 12 | San Jorge | /logos/san-jorge.svg |
| 13 | UEA Visandes | /logos/visandes.svg |
| 14 | Agua Chimborazo | /logos/agua-chimborazo.svg |
| Section Title | "Empresas que confian en nosotros" | Line 28 |

### 1.6 Footer (FooterClient.jsx)

| Content Type | Value | Location |
|------------|-------|----------|
| Logo | /logo-white.svg | Line 36 |
| Copyright | "Centeno - Abogados" | Line 70 |
| Facebook URL | https://www.facebook.com/centenoabogados | Line 5 |
| Instagram URL | https://www.instagram.com/centeno.abogados | Line 6 |
| TikTok URL | https://www.tiktok.com/@centenoabogados | Line 7 |
| YouTube URL | https://www.youtube.com/@centenoabogados | Line 8 |
| WhatsApp URL | https://wa.me/+593995845324 | Line 16 |

### 1.7 Contacto Actions (ContactoActionsClient.jsx)

| Action | Label | Link | Icon | Background |
|--------|-------|------|------|-----------|
| CALL | LLAMAR | tel:0995845324 | /contacto/phone.svg | bg-[#312780] |
| WHATSAPP | WHATSAPP | https://wa.me/+593995845324 | /contacto/whatsapp.svg | bg-[#25D366] |
| EMAIL | EMAIL | mailto:info@centenoabogados.com | /contacto/email.svg | bg-[#f08f0a] |
| LOCATION | UBICACION | Google Maps Embed URL | /contacto/location.svg | bg-red-600 |

### 1.8 Abogado Card (AbogadoCardClient.jsx)

| Field | Value |
|-------|-------|
| Nombre | Pablo Rivadeneira |
| Especialidad | DERECHO PUBLICO |
| Telefono | 0992579425 |
| Imagen | /images/abogados/paul-centeno.png |
| Perfil Link | /contacto/paul-centeno |
| Button "Llamar" | "Llamar" (label) |
| Button "Perfil" | "Perfil" (label) |

### 1.9 Location (contacto.astro)

| Field | Value |
|-------|-------|
| Address Line 1 | Primera Constituyente 27-38 entre Rocafuerte y Pichincha |
| Address Line 2 | Edificio Axxius Plaza. 3 er piso, oficina 305 |
| Address Line 3 | Riobamba, Ecuador |
| Location Title | "UBICACION" |
| Google Maps Link | https://www.google.com/maps?ll=-1.669975,-78.651908... |
| Link Text | "Ver en Google Maps ->" |

### 1.10 Casos Relevantes (casos-relevantes.astro)

| # | Numero | Titulo | Nombre | Descripcion | Imagen | Sentencia |
|---|--------|-------|--------|------------|--------|---------|----------|
| 1 | 02241-2022-00011 | Regreso Triunfal! Indemnizacion y Disculpas para Raquel Silva | Raquel Silva | Tras 5 anos de desviacion en el CNE... | /images/casos/raquel-silva.webp | /sentencias/SENTENCIA_SILVA_RAQUEL.pdf |
| 2 | 06335-2019-03171 | Triunfo en Avalon Park! Estela Chavarrea Defiende su Propiedad... | Estela Chavarrea | Poderosos sectores ekonomicos demandaron... | /images/casos/estela-chavarrea.webp | /sentencias/SENTENCIA_CHAVARREA_ESTELA.pdf |
| 3 | 06171-2023-00079 | Profesor Restituido: La ESPOCH Pierde Batalla Legal... | Marcelo Montufar | La ESPOCH mediante sancion disciplinaria... | /images/casos/marcelo-montufar.webp | /sentencias/SENTENCIA_MONTUFAR_MARCELO.pdf |
| 4 | RPC-SO-13-No.240-2024 | La Red Ecuatoriana de Pedagogia Gana! Proceso Sancionador Archivado... | Red Ecuatoriana de Pedagogia | En una investigacion administrativa se probo... | /images/casos/red-pedagogia.webp | null |
| 5 | 06335-2021-03174 | Cupido Viajero Sale Victorioso! Demanda Infundada Desestimada! | Cupido Viajero | Se reconocio que la empresa Cupido Viajero... | /images/casos/cupido-viajero.webp | /sentencias/SENTENCIA_CUPIDO_VIAJERO.pdf |
| 6 | 06571-2023-00777 | Reincorporacion Triunfal! Cristina Silva Regresa al MIES con Disculpas Publicas! | Cristina Silva | Pese a tener nombramiento provisional en el MIES... | /images/casos/cristina-silva.webp | /sentencias/SENTENCIA_CRISTINA_SILVA.pdf |

### 1.11 Page Titles and Meta (Layout.astro + pages)

| Page | Title | Default Description |
|------|-------|-----------------|
| index.astro | "Centeno - Firma de Abogados" | "Firma de Abogados" |
| contacto.astro | "Contactos | Centeno - Firma de Abogados" |
| testimonios.astro | "Testimonios | Centeno Abogados" |
| casos-relevantes.astro | "Casos Relevantes | Centeno" |

### 1.12 Section Cards (index.astro)

| Card | Title | Subtitle | Description | Image | Link |
|------|-------|----------|-----------|-----------|-------|------|
| Card 1 | TESTIMONIOS | NUESTROS CLIENTES | "te lo cuentan" | /images/TestimoniosImg.jpg | /testimonios |
| Card 2 | CASOS RELEVANTES | MIRA NUESTROS | "" | /images/CasosImg.jpg | /casos-relevantes |

---

## 2. Technical Recommendations

### Packages Needed

| Package | Version | Purpose |
|---------|---------|---------|
| @sanity/astro | ^2.0.0 | Official Astro integration |
| @sanity/client | ^7.0.0 | Custom queries (included) |
| @sanity/image-url | ^1.0.0 | Image transformations |
| @portabletext/react | ^3.0.0 | Rich text rendering |
| groq | ^3.0.0 | Type-safe GROQ queries |

### Installation

npm install @sanity/astro @sanity/image-url @portabletext/react groq

### Environment Variables

Create .env file:

SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01

### Configuration

astro.config.mjs:

```javascript
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      useCdn: false, // false for static builds
      studioBasePath: "/admin", // Optional: embed Studio
    }),
  ],
});
```

---

## 3. Schema Structure Proposal

### Document Types Overview

```
lawyer/
├── siteSettings          # Global site configuration
├── navigation         # Main navigation
├── stat              # Statistics
├── testimonio       # Client testimonials
├── cliente          # Business logos (carousel)
├── abogado          # Lawyer profiles
├── caso             # Relevant legal cases
├── page             # Flexible pages
└── hero            # Hero content variants
```

### Detailed Schema Definitions

#### 3.1 siteSettings

```typescript
defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Configuracion del Sitio',
  fields: [
    { name: 'logo', type: 'image', title: 'Logo Principal' },
    { name: 'logoWhite', type: 'image', title: 'Logo Blanco (Footer)' },
    { name: 'whatsappNumber', type: 'string', title: 'Numero WhatsApp' },
    { name: 'contactEmail', type: 'string', title: 'Email de Contacto' },
    { name: 'mainPhone', type: 'string', title: 'Telefono Principal' },
    { name: 'address', type: 'text', title: 'Direccion' },
    { name: 'addressMapLink', type: 'url', title: 'Enlace de Google Maps' },
    { name: 'companyName', type: 'string', title: 'Nombre de la Empresa' },
    { name: 'defaultDescription', type: 'string', title: 'Descripcion por Defecto' },
  ],
});
```

#### 3.2 navigation

```typescript
defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navegacion',
  fields: [
    { name: 'links', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' },
      { name: 'href', type: 'string' },
      { name: 'color', type: 'string' },
    ]}]},
  ],
});
```

#### 3.3 stat

```typescript
defineType({
  name: 'stat',
  type: 'document',
  title: 'Estadistica',
  fields: [
    { name: 'label', type: 'string' },
    { name: 'value', type: 'number' },
    { name: 'prefix', type: 'string' },
    { name: 'suffix', type: 'string' },
    { name: 'isText', type: 'boolean' },
    { name: 'icon', type: 'image' },
  ],
});
```

#### 3.4 testimonio

```typescript
defineType({
  name: 'testimonio',
  type: 'document',
  title: 'Testimonio',
  fields: [
    { name: 'nombre', type: 'string' },
    { name: 'cargo', type: 'string' },
    { name: 'imagen', type: 'image' },
    { name: 'link', type: 'url' },
  ],
});
```

#### 3.5 cliente

```typescript
defineType({
  name: 'cliente',
  type: 'document',
  title: 'Cliente (Logo)',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'logo', type: 'image' },
  ],
});
```

#### 3.6 abogado

```typescript
defineType({
  name: 'abogado',
  type: 'document',
  title: 'Abogado',
  fields: [
    { name: 'nombre', type: 'string' },
    { name: 'especialidad', type: 'string' },
    { name: 'telefono', type: 'string' },
    { name: 'imagen', type: 'image' },
    { name: 'perfilLink', type: 'url' },
  ],
});
```

#### 3.7 caso

```typescript
defineType({
  name: 'caso',
  type: 'document',
  title: 'Caso Relevante',
  fields: [
    { name: 'numero', type: 'string' },
    { name: 'titulo', type: 'string' },
    { name: 'nombre', type: 'string' },
    { name: 'descripcion', type: 'text' },
    { name: 'imagen', type: 'image' },
    { name: 'sentencia', type: 'file' },
  ],
});
```

#### 3.8 heroSection

```typescript
defineType({
  name: 'heroSection',
  type: 'object',
  title: 'Hero Section',
  fields: [
    { name: 'headingMain', type: 'string' },
    { name: 'headingHighlight1', type: 'string' },
    { name: 'headingHighlight2', type: 'string' },
    { name: 'headingSecondary', type: 'string' },
    { name: 'ctaPrimary', type: 'object', fields: [
      { name: 'label', type: 'string' },
      { name: 'link', type: 'string' },
      { name: 'variant', type: 'string' },
    ]},
    { name: 'ctaSecondary', type: 'object', fields: [
      { name: 'label', type: 'string' },
      { name: 'link', type: 'string' },
      { name: 'variant', type: 'string' },
    ]},
    { name: 'accentColor', type: 'string' },
  ],
});
```

---

## 4. Data Fetching Strategy

### Static Site Generation (SSG)

Astro fetches all content at build time using the Sanity client in frontmatter. Content changes require a site rebuild.

### GROQ Queries File

Create src/lib/sanity.ts:

```typescript
import { sanityClient } from "sanity:client";
import { defineQuery } from "groq";

export const navigationQuery = defineQuery(`*[_type == "navigation"][0]`);
export const statsQuery = defineQuery(`*[_type == "stat"] | order(_createdAt)`);
export const testimoniosQuery = defineQuery(`*[_type == "testimonio"]`);
export const clientesQuery = defineQuery(`*[_type == "cliente"]`);
export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`);
export const abogadoQuery = defineQuery(`*[_type == "abogado"][0]`);
export const casosQuery = defineQuery(`*[_type == "caso"] | order(_createdAt desc)`);

// Utility functions
export async function getNavigation() { return await sanityClient.fetch(navigationQuery); }
export async function getStats() { return await sanityClient.fetch(statsQuery); }
export async function getTestimonios() { return await sanityClient.fetch(testimoniosQuery); }
export async function getClientes() { return await sanityClient.fetch(clientesQuery); }
export async function getSiteSettings() { return await sanityClient.fetch(siteSettingsQuery); }
export async function getAbogado() { return await sanityClient.fetch(abogadoQuery); }
export async function getCasos() { return await sanityClient.fetch(casosQuery); }
```

### Fetching Example in Astro

src/pages/index.astro:

```astro
---
import { sanityClient } from "sanity:client";
import { getStats, getTestimonios, getClientes, getSiteSettings } from "../lib/sanity";

const stats = await getStats();
const testimonios = await getTestimonios();
const clientes = await getClientes();
const siteSettings = await getSiteSettings();
---

<Layout title={siteSettings?.companyName || "Centeno - Firma de Abogados"}>
  <!-- components receiving data via props -->
</Layout>
```

### getStaticPaths for Dynamic Routes

For casos-relevantes.astro:

```astro
---
import { sanityClient } from "sanity:client";

export async function getStaticPaths() {
  const casos = await sanityClient.fetch(
    `*[_type == "caso"]{
      numero,
      titulo,
      nombre,
      descripcion,
      "imagenUrl": imagen.asset->url,
      "sentenciaUrl": sentencia.asset->url
    }`
  );

  return casos.map((caso) => ({
    params: { numero: caso.numero },
    props: { caso },
  }));
}

const { caso } = Astro.props;
---

<CasoCard numero={caso.numero} ... />
```

### Image Handling

Create src/lib/images.ts:

```typescript
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || "production";

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source) { return builder.image(source); }

export function getImageUrl(source, width) {
  return builder.image(source).width(width).auto("format").url();
}

export function getImageSrcSet(source, widths = [400, 800, 1200]) {
  return widths
    .map((w) => `${builder.image(source).width(w).auto("format").url()} ${w}w`)
    .join(", ");
}
```

---

## 5. Migration Strategy

### Phase 1: Setup (Week 1)
- Install Sanity packages
- Configure astro.config.mjs
- Set up environment variables
- Create Sanity Studio project
- Define schema types in Studio
- Deploy Sanity Studio

### Phase 2: Content Migration (Week 1-2)
- Create siteSettings document
- Create navigation document
- Create 5 stat documents
- Create 4 testimonio documents
- Create 14 cliente documents
- Create 1 abogado document
- Create 6 caso documents
- Upload all images to Sanity
- Upload all PDF sentencias

### Phase 3: Frontend Updates (Week 2)
- Create src/lib/sanity.ts with queries
- Create src/lib/images.ts for image URLs
- Update all Client components to fetch from Sanity
- Update all Astro pages to pass props

### Phase 4: Testing (Week 2)
- Verify all content displays
- Verify images load correctly
- Verify links work
- Test responsive behavior
- Test build process

### Phase 5: Build and Deploy (Week 3)
- Run production build
- Deploy to hosting
- Set up webhook for rebuilds (optional)

---

## 6. Rebuild Strategy

Content changes require a full rebuild. Options:

### Option A: Webhook + Hosting (Recommended)
- Configure Sanity webhook on content changes
- Connect to hosting provider (Vercel, Netlify) rebuild hook
- Automatic rebuild on every content publish

### Option B: Manual Rebuild Script
Create a deploy script that runs build + deploy commands.

---

## Summary

The site has approximately 50+ content items that are currently hardcoded:

- 4 navigation links
- 1 logo (2 variants)
- 1 hero section (headings, CTAs, colors)
- 5 statistics
- 9 social/contact links
- 4 testimonios
- 14 business logos
- 1 lawyer profile
- 1 address/location
- 6 legal cases
- 2 section cards
- 1 testimonials header
- 6 page titles/descriptions

Sanity integration approach:
1. Install packages: @sanity/astro, @sanity/image-url, @portabletext/react, groq
2. Define schema types in Sanity Studio
3. Fetch data at build time using getStaticPaths / frontmatter
4. Build images via @sanity/image-url
5. Full rebuild required for content changes

---

## Next Steps

1. Run /sdd-continue sanity-cms-integration to move to proposal/spec phase
2. Review and finalize schema types
3. Define exact component props interfaces
4. Plan Sanity Studio embedding (optional)
5. Set up rebuild webhook strategy

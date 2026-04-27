// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID || '8n5kn6tw',
      dataset: process.env.SANITY_DATASET || 'production',
      useCdn: false,
      apiVersion: '2024-01-01',
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
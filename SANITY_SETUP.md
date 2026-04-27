# Sanity CMS - Centeno Abogados

## 🎯 Objetivo
El abogado puede editar TODO el contenido del sitio desde Sanity Studio.

---

## 🚀 Pasos para empezar

### 1. Iniciar sesión en Sanity
```bash
npm run sanity:login
```
Esto abrirá el navegador para que inicies sesión con tu cuenta de Sanity.

### 2. Iniciar Studio local (opcional)
```bash
npm run sanity:studio
```
Esto abre el Studio en http://localhost:3333

### 3. O usar Studio online
Ve a: https://studio.sanity.io/project/bc6tsimv

---

## 📝 Contenido editable

| Sección | Tipo de documento |
|---------|-------------------|
| **Configuración del Sitio** | Logo, nombre, redes sociales, WhatsApp, email, dirección |
| **Sección Hero** | Títulos, highlights, botones CTA |
| **Estadísticas** | 5 estadísticas con valores, íconos |
| **Testimonios** | 4 testimonios con foto, nombre, cargo |
| **Clientes / Logos** | 14 logos de empresas |
| **Casos Relevantes** | 6 casos completos |
| **Abogados** | Perfil del abogado |
| **Cards de Sección** | Cards de navegación |

---

## 🔄 Cómo editar

1. Ve a https://studio.sanity.io/project/bc6tsimv
2. Click en el documento que querés editar
3. Modificá los campos
4. Click en **Publish** (publicar)

---

## ⚡ Rebuild automático

Cuando el abogado publica cambios en Sanity, el sitio se rebuilda automáticamente.

Para esto, necesitás configurar un **webhook** en Sanity que apunte a tu hosting (Vercel, Netlify, etc.).

---

## 📁 Estructura de archivos

```
lawyer/
├── sanity/
│   ├── schemas/          # Schemas de contenido
│   │   ├── siteSettings.ts
│   │   ├── heroSection.ts
│   │   ├── stat.ts
│   │   ├── testimonio.ts
│   │   ├── cliente.ts
│   │   ├── caso.ts
│   │   ├── abogado.ts
│   │   └── sectionCard.ts
│   └── structure/
│       └── structure.ts  # Menú del Studio
├── src/
│   ├── lib/sanity.ts     # Cliente de Sanity
│   └── sanity/schemas/   # (duplicado, para el sitio)
└── sanity.config.ts      # Config del Studio
```

---

## ✅ Checklist del abogado

- [ ] Ir a https://studio.sanity.io/project/bc6tsimv
- [ ] Editar "Configuración del Sitio" con datos reales
- [ ] Editar "Sección Hero" con textos personalizados
- [ ] Editar las 5 "Estadísticas"
- [ ] Editar los "Testimonios" (4 clientes)
- [ ] Editar "Clientes / Logos" (14 empresas)
- [ ] Editar "Casos Relevantes" (6 casos)
- [ ] Editar "Abogados" (perfil del abogado)
- [ ] Click en **Publish** en cada documento

---

## ❓ Problemas comunes

**No puedo editar imágenes**
→ Asegurate de tener las imágenes en formato JPG o PNG

**No aparecen los cambios en el sitio**
→ Verificá que hayas hecho click en **Publish** en Sanity
→ Si usás hosting, verificá que el webhook esté configurado

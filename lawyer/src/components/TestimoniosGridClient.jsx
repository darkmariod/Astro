// src/components/TestimoniosGridClient.jsx
import { motion } from 'framer-motion';

// Default testimonios when Sanity data is not available
const defaultTestimonios = [
  {
    nombre: 'Patricia León',
    cargo: 'Funcionaria Registro Civil',
    imagen: '/testimonios/patricia-leon.webp',
    link: 'https://www.instagram.com/centeno.abogados/',
  },
  {
    nombre: 'Raquel Silva',
    cargo: 'Extrabajadora del CNE',
    imagen: '/testimonios/raquel-silva.webp',
    link: 'https://www.instagram.com/centeno.abogados/',
  },
  {
    nombre: 'Juan Falconi',
    cargo: 'Gerente de IAF Industrias',
    imagen: '/testimonios/juan-falconi.webp',
    link: 'https://www.instagram.com/centeno.abogados/',
  },
  {
    nombre: 'Cristina Muñoz',
    cargo: 'Médico del IESS',
    imagen: '/testimonios/cristina-munoz.webp',
    link: 'https://www.instagram.com/centeno.abogados/',
  },
];

// Helper para obtener URL de imagen
const getImageUrl = (imagen) => {
  if (!imagen) return '/testimonios/patricia-leon.webp';
  if (typeof imagen === 'string') return imagen;
  if (imagen.asset?.url) return imagen.asset.url;
  return '/testimonios/patricia-leon.webp';
};

export default function TestimoniosGridClient({ testimonios }) {
  const data = testimonios || defaultTestimonios;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {data.map((testimonio, index) => (
        <motion.a
          key={testimonio.nombre || index}
          href={testimonio.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {/* Imagen */}
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={getImageUrl(testimonio.imagen)}
              alt={testimonio.nombre || 'Cliente'}
              className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#312780]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <img
                src="/megafono.svg"
                alt="Ver más"
                className="w-10 h-10 text-white"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              {testimonio.nombre || 'Cliente'}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {testimonio.cargo || ''}
            </p>

            {/* Ver más link */}
            <div className="mt-3 inline-flex items-center gap-1 text-[#f08f0a] font-semibold text-sm">
              <span>Ver Más</span>
              <span>→</span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
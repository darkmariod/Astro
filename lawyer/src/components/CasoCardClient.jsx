// src/components/CasoCardClient.jsx
import { motion } from 'framer-motion';

export default function CasoCardClient({ numero, titulo, nombre, descripcion, imagen, sentencia }) {
  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Imagen */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <p className="text-xs text-gray-500 mb-2 font-mono">Proceso {numero}</p>
        
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {titulo}
        </h3>

        <p className="text-lg font-semibold text-[#312780] mb-4">
          {nombre}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {descripcion}
        </p>

        {sentencia && (
          <a
            href={sentencia}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#312780] text-white font-semibold rounded-lg hover:bg-[#493cb3] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Sentencia
          </a>
        )}
      </div>
    </motion.article>
  );
}
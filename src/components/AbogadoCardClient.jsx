// src/components/AbogadoCardClient.jsx
import { motion } from 'framer-motion';

export default function AbogadoCardClient({ nombre, especialidad, telefono, imagen, perfilLink }) {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src={imagen}
            alt={nombre}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#312780]"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {nombre}
          </h3>

          <p className="text-[#312780] font-semibold text-lg mt-1">
            {especialidad}
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
            <a
              href={`tel:${telefono}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#f08f0a] text-white font-semibold rounded-lg hover:bg-[#d97908] transition-colors"
            >
              <img src="/contacto/phone.svg" alt="Llamar" className="w-5 h-5" />
              Llamar
            </a>

            {perfilLink && (
              <a
                href={perfilLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#312780] text-white font-semibold rounded-lg hover:bg-[#493cb3] transition-colors"
              >
                <img src="/contacto/resume.svg" alt="Perfil" className="w-5 h-5" />
                Perfil
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
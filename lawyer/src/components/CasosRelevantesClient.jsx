// src/components/CasosRelevantesClient.jsx
import { motion } from 'framer-motion';
import CasoCardClient from './CasoCardClient.jsx';

export default function CasosRelevantesClient({ casos }) {
  return (
    <>
      {/* Header con caso destacado */}
      <div className="bg-[#312780] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ¡Reincorporación con una indemnización y disculpas públicas para Raquel Silva!
            </motion.h1>
            <motion.a
              href="#lista-casos"
              className="inline-flex items-center gap-2 mt-4 text-[#f08f0a] font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: 5 }}
            >
              <span>Ver Más</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Casos Grid */}
      <div id="lista-casos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {casos.map((caso, index) => (
            <motion.div
              key={caso.numero}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <CasoCardClient
                numero={caso.numero}
                titulo={caso.titulo}
                nombre={caso.nombre}
                descripcion={caso.descripcion}
                imagen={caso.imagen}
                sentencia={caso.sentencia}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
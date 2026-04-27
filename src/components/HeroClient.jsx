// src/components/HeroClient.jsx
import { motion } from 'framer-motion';

// Default values for when Sanity data is not available
const defaultHero = {
  titleLine1: 'Nos caracterizamos por el uso permanente de',
  highlight1: 'tecnología',
  titleLine2: 'e inmediatez en la',
  highlight2: 'gestión procesal',
  subtitle: 'Somos abogados comprometidos en',
  highlight3: 'asegurar',
  highlight4: 'la',
  highlight5: 'actividad productiva y laboral',
  ctaPrimary: { label: 'Agenda tu cita', link: '/agendarcita' },
  ctaSecondary: { label: 'Conoce nuestras Membresías', link: '/membresias' },
}

export default function HeroClient({ hero = defaultHero }) {
  const h = { ...defaultHero, ...hero }

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-[#4533ce] to-[#5b44d4] overflow-hidden z-10 min-h-[70vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Primer texto */}
          <motion.div
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>{h.titleLine1} </span>
            <motion.span
              className="text-[#f08f0a]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {h.highlight1}
            </motion.span>
            <span> {h.titleLine2} </span>
            <motion.span
              className="text-[#f08f0a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {h.highlight2}
            </motion.span>
          </motion.div>

          {/* Segundo texto */}
          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span>{h.subtitle} </span>
            <motion.span
              className="text-[#f08f0a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {h.highlight3}
            </motion.span>
            <span> {h.highlight4} </span>
            <motion.span
              className="text-[#f08f0a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {h.highlight4 === 'la' ? '' : h.highlight4}
            </motion.span>
            <motion.span
              className="text-[#f08f0a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {h.highlight5}
            </motion.span>
            <span> de quienes confían en nuestros servicios</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href={h.ctaPrimary?.link || '/agendarcita'}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#f08f0a] text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-xl"
              whileHover={{
                backgroundColor: '#d97908',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {h.ctaPrimary?.label || 'Agenda tu cita'}
            </motion.a>

            <motion.a
              href={h.ctaSecondary?.link || '/membresias'}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-[#4533ce] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {h.ctaSecondary?.label || 'Conoce nuestras Membresías'}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
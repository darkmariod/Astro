// src/components/SectionCardClient.jsx
import { motion } from 'framer-motion';

export default function SectionCardClient({ title, subtitle, description, image, link, variant }) {
  const isEven = variant === 'podcast' || variant === 'casos';
  const accentColor = isEven ? '#312780' : '#f08f0a';

  return (
    <motion.a
      href={link}
      className="group relative block overflow-hidden rounded-2xl h-[350px] md:h-[400px]"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Subtitle / Label */}
        <motion.p
          className="text-sm font-bold uppercase tracking-wider mb-2"
          style={{ color: accentColor }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {subtitle || title}
        </motion.p>
        
        {/* Title */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        {description && (
          <motion.p
            className="text-white/80 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}

        {/* Ver más */}
        <motion.div
          className="mt-4 inline-flex items-center gap-2 text-white font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span>Ver más</span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.a>
  );
}
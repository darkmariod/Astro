// src/components/StatsBarClient.jsx
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Default stats when Sanity data is not available
const defaultStats = [
  { label: '12 años litigando contra el Estado', icon: '/trophy.svg', isText: true },
  { label: 'Casos Ganados', value: 98, icon: '/trophy.svg', suffix: '%' },
  { label: 'Cobertura Nacional', value: 100, icon: '/ecuador.svg', suffix: '%' },
  { label: 'Virtual', value: 100, icon: '/laptop.svg', suffix: '%' },
  { label: 'Clientes Satisfechos', value: 437, icon: '/thumb-up.svg', prefix: '+' },
];

function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(value * easeOut);
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value]);
  
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function StatsBarClient({ stats: rawStats }) {
  const stats = rawStats || defaultStats;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Helper para obtener la URL del icono desde Sanity
  const getIconUrl = (icon) => {
    if (!icon) return '/trophy.svg';
    if (typeof icon === 'string') return icon;
    if (icon.asset) {
      // Si viene de Sanity, construir la URL
      return icon.asset.url || '/trophy.svg';
    }
    return '/trophy.svg';
  };

  return (
    <div ref={containerRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nuestra experiencia
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Icono */}
              <div className="flex justify-center mb-4">
                <img
                  src={getIconUrl(stat.icon)}
                  alt={stat.label}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>

              {/* Número */}
              <div className="text-[#312780]">
                {stat.isText || stat.textValue ? (
                  <p className="text-2xl md:text-3xl font-bold">{stat.textValue || stat.label}</p>
                ) : (
                  <AnimatedNumber
                    value={stat.value || 0}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                )}
              </div>

              {/* Label */}
              <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
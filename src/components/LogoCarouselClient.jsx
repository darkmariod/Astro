// src/components/LogoCarouselClient.jsx
import { motion } from 'framer-motion';

// Default logos when Sanity data is not available
const defaultLogos = [
  { name: 'Cacpeco', src: '/logos/cacpeco.svg' },
  { name: 'Banco ProCredit', src: '/logos/banco-procredit.svg' },
  { name: 'Nexo Growth Marketing', src: '/logos/nexo.svg' },
  { name: 'Burocracia CEAP', src: '/logos/burocracia-ceap.svg' },
  { name: 'Cupido Viajero', src: '/logos/cupido-viajero.svg' },
  { name: 'Fernando Daquilema', src: '/logos/fernando-daquilema.svg' },
  { name: 'Giro Digital', src: '/logos/giro-digital.svg' },
  { name: 'IAF Industrias', src: '/logos/iaf-industrias.svg' },
  { name: 'Jatunwasi', src: '/logos/jatunwasi.svg' },
  { name: 'UEA Nazareno', src: '/logos/nazareno.svg' },
  { name: 'Red Ecuatoriana de Pedagogía', src: '/logos/red-ec-pedagogia.svg' },
  { name: 'San Jorge', src: '/logos/san-jorge.svg' },
  { name: 'UEA Visandes', src: '/logos/visandes.svg' },
  { name: 'Agua Chimborazo', src: '/logos/agua-chimborazo.svg' },
];

// Helper para obtener URL del logo
const getLogoUrl = (logo) => {
  if (!logo) return '';
  if (typeof logo === 'string') return logo;
  if (logo.asset?.url) return logo.asset.url;
  return '';
};

export default function LogoCarouselClient({ clientes = defaultLogos }) {
  // Si vienen objetos con logo.image, transformarlos
  const logos = clientes.map(c => ({
    name: c.name || c.title || 'Cliente',
    src: c.logo ? getLogoUrl(c.logo) : (c.src || c.image || '')
  }));

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Empresas que confían en nosotros
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradients en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Track animado */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
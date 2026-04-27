// src/components/ContactoActionsClient.jsx
import { motion } from 'framer-motion';

const actions = [
  {
    label: 'LLAMAR',
    href: 'tel:0995845324',
    icon: '/contacto/phone.svg',
    bg: 'bg-[#312780]',
  },
  {
    label: 'WHATSAPP',
    href: 'https://wa.me/+593995845324',
    icon: '/contacto/whatsapp.svg',
    bg: 'bg-[#25D366]',
  },
  {
    label: 'EMAIL',
    href: 'mailto:info@centenoabogados.com',
    icon: '/contacto/email.svg',
    bg: 'bg-[#f08f0a]',
  },
  {
    label: 'UBICACIÓN',
    href: 'https://www.google.com/maps?ll=-1.669975,-78.651908&z=19&t=m&hl=en&gl=EC&mapclient=embed&q=Primera+Constituyente+27-38+Riobamba',
    icon: '/contacto/location.svg',
    bg: 'bg-red-600',
  },
];

export default function ContactoActionsClient() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          target={action.label === 'UBICACIÓN' || action.label === 'WHATSAPP' ? '_blank' : undefined}
          rel={action.label === 'WHATSAPP' ? 'noopener noreferrer' : undefined}
          className={`${action.bg} text-white p-4 md:p-6 rounded-xl flex flex-col items-center gap-3`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={action.icon}
            alt={action.label}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="font-bold text-sm md:text-base">{action.label}</span>
        </motion.a>
      ))}
    </div>
  );
}
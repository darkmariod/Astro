// src/components/FooterClient.jsx
import { motion } from 'framer-motion';

// Default values when Sanity data is not available
const defaultSocialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/centenoabogados', icon: '/social/fb.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/centeno.abogados', icon: '/social/ig.svg' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@centenoabogados', icon: '/social/tt.svg' },
  { name: 'YouTube', href: 'https://www.youtube.com/@centenoabogados', icon: '/social/yt.svg' },
];

export default function FooterClient({ siteSettings }) {
  const settings = siteSettings || {};
  const socialLinks = settings.socialLinks || defaultSocialLinks;
  const companyName = settings.companyName || 'Centeno - Abogados';
  const whatsapp = settings.whatsapp || '+593995845324';
  const logoWhite = settings.logoWhite;

  // Helper para obtener URL del logo
  const getLogoUrl = (logo) => {
    if (!logo) return '/logo-white.svg';
    if (typeof logo === 'string') return logo;
    if (logo.asset?.url) return logo.asset.url;
    return '/logo-white.svg';
  };

  // Helper para obtener icono de red social
  const getSocialIcon = (platform) => {
    const icons = {
      'Facebook': '/social/fb.svg',
      'Instagram': '/social/ig.svg',
      'TikTok': '/social/tt.svg',
      'YouTube': '/social/yt.svg',
    };
    return icons[platform] || '/social/fb.svg';
  };

  return (
    <footer className="bg-[#312780] text-white">
      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${whatsapp}`}
        className="fixed bottom-6 right-6 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src="/whatsapp.svg"
          alt="WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16"
        />
      </motion.a>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={getLogoUrl(logoWhite)}
              alt={companyName}
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name || social.platform}
                href={social.url || social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={getSocialIcon(social.platform || social.name)}
                  alt={social.platform || social.name}
                  className="w-6 h-6"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} | {companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
// src/components/NavbarClient.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio', color: '#f08f0a' },
  { href: '/testimonios', label: 'Testimonios', color: '#312780' },
  { href: '/casos-relevantes', label: 'Casos Relevantes', color: '#f08f0a' },
  { href: '/contacto', label: 'Contacto', color: '#312780' },
];

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Desktop */}
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="relative flex mx-auto pb-6 px-4 md:px-6 max-w-7xl items-center justify-end">
          {/* Logo */}
          <div className="top-0 left-0 lg:w-[250px] w-full p-2 h-[100px] lg:absolute lg:mx-auto">
            <a href="/" className="max-h-[100px] mx-auto overflow-visible block">
              <span className="sr-only">Centeno</span>
              <img
                src="/logo.svg"
                alt="Logo"
                className="py-4 h-full mx-auto object-contain"
                style={{ height: '90px' }}
              />
            </a>
          </div>

          {/* Links Desktop */}
          <div className="hidden lg:flex lg:flex-1 justify-end gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative flex justify-center items-center pt-4 pb-2 px-4 text-sm font-black uppercase rounded-b-3xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(to bottom, ${link.color}, ${link.color}99)`;
                  e.currentTarget.style.backgroundSize = '100% 100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-gray-900">
                  <motion.div
                    className="flex text-nowrap text-xs"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-center pt-3 pb-2 tracking-wide">{link.label}</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden absolute top-4 right-4">
            <motion.button
              type="button"
              className="p-2 rounded-lg text-gray-700"
              onClick={() => setIsOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[21] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[55] w-full max-w-xs bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-xl font-bold text-[#312780]">Menú</span>
                <motion.button
                  type="button"
                  className="p-2 rounded-full bg-gray-100"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="p-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block py-4 px-6 text-center font-bold uppercase rounded-xl text-sm text-white"
                    style={{ backgroundColor: link.color }}
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
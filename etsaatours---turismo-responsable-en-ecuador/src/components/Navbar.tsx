import React, { useState, useEffect } from "react";
import { Mountain, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Page } from "../types";

export const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Inicio" },
    { id: "tours", label: "Tours" },
    { id: "about", label: "Nosotros" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled || currentPage !== "home" 
        ? "bg-background-dark/80 nav-blur py-4 shadow-lg" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage("home")}
        >
          <div className="text-primary transition-transform duration-300 group-hover:scale-110">
            <Mountain size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            ETSAA<span className="text-primary">TOURS</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id as Page)}
              className={`text-sm font-semibold tracking-wide transition-all hover:text-primary relative py-1 ${
                currentPage === link.id ? "text-primary" : "text-white/90"
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
          <button className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Contactar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background-dark/95 nav-blur border-t border-white/10 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setPage(link.id as Page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-bold text-left py-2 ${
                    currentPage === link.id ? "text-primary" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button className="bg-primary text-white py-4 rounded-xl font-bold mt-2">
                Contactar Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

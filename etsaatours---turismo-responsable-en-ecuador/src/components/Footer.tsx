import React from "react";
import { Mountain, Instagram, MessageSquare, Share2, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Mountain className="text-primary" size={32} />
              <h2 className="text-2xl font-black tracking-tighter">ETSAA<span className="text-primary">TOURS</span></h2>
            </div>
            <p className="text-white/50 leading-relaxed mb-8 font-medium">
              Tu puerta de entrada a las experiencias más auténticas y responsables en el corazón de Ecuador.
            </p>
            <div className="flex gap-4">
              {[Instagram, MessageSquare, Share2].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><button className="hover:text-primary transition-colors">Inicio</button></li>
              <li><button className="hover:text-primary transition-colors">Nuestros Tours</button></li>
              <li><button className="hover:text-primary transition-colors">Sobre Nosotros</button></li>
              <li><button className="hover:text-primary transition-colors">Blog de Viajes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight">Contacto</h4>
            <ul className="space-y-6 text-white/60 font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>Quito, Ecuador<br/>Av. Amazonas y Colón</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+593 99 999 9999</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@etsaatours.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm font-medium">Suscríbete para recibir ofertas exclusivas y guías de viaje.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 outline-none focus:border-primary transition-all text-sm"
              />
              <button className="bg-primary hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold transition-all">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 ETSAATOURS. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacidad</button>
            <button className="hover:text-white transition-colors">Términos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

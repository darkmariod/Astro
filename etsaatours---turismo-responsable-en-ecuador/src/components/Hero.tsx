import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Search } from "lucide-react";
import { Page } from "../types";

export const Hero = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/ecuador/1920/1080?blur=2" 
          className="w-full h-full object-cover scale-105"
          alt="Ecuador Landscape"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter text-shadow">
            Turismo responsable que conecta <span className="text-primary">naturaleza, cultura y comunidad</span>
          </h2>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed text-shadow">
            Vive el Ecuador de manera auténtica, responsable y consciente con experiencias diseñadas para impactar positivamente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">
            <button 
              onClick={() => setPage("tours")}
              className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl shadow-primary/40"
            >
              Explorar Tours
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 nav-blur text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all border border-white/20">
              Ver Destinos
            </button>
          </div>
        </motion.div>
      </div>

      {/* Search Bar */}
      <div className="relative z-20 w-full px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2">
          <div className="flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 md:border-r border-slate-100">
            <MapPin className="text-primary shrink-0 w-6 h-6 md:w-7 md:h-7" />
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ubicación</span>
              <input 
                type="text" 
                placeholder="¿A dónde quieres ir?" 
                className="bg-transparent border-none outline-none text-slate-800 font-bold placeholder:text-slate-400 w-full text-sm md:text-lg"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 md:border-r border-slate-100">
            <Calendar className="text-primary shrink-0 w-6 h-6 md:w-7 md:h-7" />
            <div className="flex flex-col flex-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fecha</span>
              <span className="text-slate-800 font-bold text-sm md:text-lg">Cualquier fecha</span>
            </div>
          </div>
          <button className="bg-brand-deep hover:bg-slate-800 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-[2rem] font-bold flex items-center justify-center gap-3 transition-all text-base md:text-lg">
            <Search className="w-5 h-5 md:w-6 md:h-6" />
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </section>
  );
};

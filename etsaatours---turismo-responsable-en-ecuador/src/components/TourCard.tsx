import React from "react";
import { motion } from "motion/react";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Tour } from "../types";

export const TourCard = ({ tour, showDescription = false, onSelect }: { tour: Tour, showDescription?: boolean, onSelect: (t: Tour) => void, key?: string | number }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 flex flex-col h-full border border-slate-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 nav-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin size={14} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{tour.region}</span>
        </div>
        {tour.tag && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
            {tour.tag}
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            <span className="text-white text-xs font-bold ml-1">5.0</span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
          {tour.title}
        </h3>
        {showDescription && (
          <p className="text-slate-500 text-sm mb-4 line-clamp-3 leading-relaxed">
            {tour.description}
          </p>
        )}
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Desde</span>
            <span className="text-2xl font-black text-primary">${tour.price}</span>
          </div>
          <button 
            onClick={() => onSelect(tour)}
            className="bg-slate-900 hover:bg-primary text-white p-3 rounded-2xl transition-all transform group-hover:rotate-[-5deg]"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

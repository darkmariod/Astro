import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, ShieldCheck, Calendar, Users, ArrowRight, XCircle } from "lucide-react";
import { Tour, Page } from "../types";

export const TourDetailPage = ({ tour, setPage }: { tour: Tour, setPage: (p: Page) => void }) => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => setPage("tours")}
          className="flex items-center gap-2 text-primary font-black mb-12 hover:gap-4 transition-all uppercase tracking-widest text-xs"
        >
          <ArrowRight className="rotate-180" size={20} /> Volver a los tours
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl mb-8">
              <img 
                src={tour.image} 
                className="w-full h-full object-cover"
                alt={tour.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <MapPin size={16} /> {tour.region}
              </div>
              <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Clock size={16} /> {tour.duration}
              </div>
              {tour.tag && (
                <div className="bg-brand-deep text-white px-4 py-2 rounded-full font-bold text-sm">
                  {tour.tag}
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              {tour.title}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              {tour.description}
            </p>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">¿Qué incluye?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium text-sm md:text-base">
                      <ShieldCheck className="text-primary shrink-0" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/30 p-8 md:p-10 rounded-[2.5rem] border border-red-100/50">
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">No incluye</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 font-medium text-sm md:text-base">
                      <XCircle className="text-red-400 shrink-0" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:pl-12"
          >
            <div className="sticky top-32">
              <div className="bg-brand-deep p-8 md:p-12 rounded-[3rem] text-white shadow-2xl mb-12">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Reserva tu lugar</span>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-4xl md:text-5xl font-black text-primary">${tour.price}</span>
                  <span className="text-white/50 font-bold mb-2">/ persona</span>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Fecha de salida</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                      <span className="font-bold">Seleccionar fecha</span>
                      <Calendar size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Pasajeros</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                      <span className="font-bold">2 Personas</span>
                      <Users size={20} className="text-primary" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/20">
                  Reservar Ahora
                </button>
                {tour.priceNote && (
                  <p className="text-center text-white/30 text-[10px] mt-6 font-bold uppercase tracking-widest leading-relaxed">
                    {tour.priceNote}
                  </p>
                )}
              </div>

              <div className="border-l-4 border-primary pl-8 space-y-12">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Itinerario</h3>
                {tour.itinerary.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[42px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm" />
                    <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2 block">Día {item.day}</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

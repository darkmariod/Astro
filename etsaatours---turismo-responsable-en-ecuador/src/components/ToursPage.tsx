import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tour } from "../types";
import { TOURS, REGIONS } from "../constants";
import { TourCard } from "./TourCard";

export const ToursPage = ({ onTourSelect }: { onTourSelect: (t: Tour) => void }) => {
  const [filter, setFilter] = useState("Todos");
  const filteredTours = filter === "Todos" ? TOURS : TOURS.filter(t => t.region === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Catálogo Completo</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Encuentra tu próxima <span className="text-primary">aventura</span>
          </h2>
          
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4">
            {["Todos", ...REGIONS].map((region) => (
              <button
                key={region}
                onClick={() => setFilter(region)}
                className={`px-8 py-3.5 rounded-2xl font-bold text-sm transition-all whitespace-nowrap shadow-sm ${
                  filter === region 
                    ? "bg-primary text-white shadow-primary/30" 
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TourCard tour={tour} showDescription onSelect={onTourSelect} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

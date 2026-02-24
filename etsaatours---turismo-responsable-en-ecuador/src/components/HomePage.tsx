import React from "react";
import { ArrowRight } from "lucide-react";
import { Tour, Page } from "../types";
import { TOURS } from "../constants";
import { Hero } from "./Hero";
import { TourCard } from "./TourCard";
import { ValuesStrip } from "./ValuesStrip";

export const HomePage = ({ setPage, onTourSelect }: { setPage: (p: Page) => void, onTourSelect: (t: Tour) => void }) => {
  return (
    <div className="relative">
      <Hero setPage={setPage} />

      {/* Featured Tours */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Experiencias Destacadas</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter">
              Nuestros tours más populares
            </h2>
          </div>
          <button 
            onClick={() => setPage("tours")}
            className="flex items-center gap-2 text-primary font-black hover:gap-4 transition-all"
          >
            VER TODOS LOS TOURS <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.slice(0, 3).map((tour) => (
            <TourCard key={tour.id} tour={tour} onSelect={onTourSelect} />
          ))}
        </div>
      </section>

      <ValuesStrip />
    </div>
  );
};

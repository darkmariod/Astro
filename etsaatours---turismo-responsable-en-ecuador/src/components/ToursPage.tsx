import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tour } from "../types";
import { TourCard } from "./TourCard";
import { client } from "../sanityClient";

const REGIONS = ['Todos', 'Amazonía', 'Andes', 'Costa', 'Galápagos', 'Ecuador'];

export const ToursPage = ({ onTourSelect }: { onTourSelect: (t: Tour) => void }) => {
  const [filter, setFilter] = useState("Todos");
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "tour"] | order(_createdAt asc) {
      "id": _id,
      title,
      region,
      location,
      duration,
      price,
      tag,
      description,
      operation,
      groupSize,
      priceNote,
      isLuxury,
      whatsapp,
      included,
      notIncluded,
      itinerary,
      "image": coalesce(image.asset->url, image)
    }`).then((data) => {
      setTours(data);
      setLoading(false);
    });
  }, []);

  const filteredTours = filter === "Todos" ? tours : tours.filter(t => t.region === filter);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <p className="text-xl text-slate-600">Cargando tours...</p>
    </div>
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Catálogo Completo</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Encuentra tu próxima <span className="text-primary">aventura</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4">
          {REGIONS.map((region) => (
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
  );
};

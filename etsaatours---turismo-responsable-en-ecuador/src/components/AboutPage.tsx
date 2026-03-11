import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Eye, Compass, ShieldCheck } from "lucide-react";
import { client } from "../sanityClient";

export const AboutPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "nosotros"][0]{
      historia, anos, tours, mision, vision, valores,
      "imagen": imagen.asset->url
    }`).then(setData);
  }, []);

  const historia = data?.historia || "ETSAATOURS nació de la pasión por mostrar la belleza inigualable de nuestro país mientras protegemos sus ecosistemas y empoderamos a sus comunidades locales.";
  const anos = data?.anos || "10+";
  const tours = data?.tours || "500+";
  const mision = data?.mision || "Fomentar el turismo responsable como motor de desarrollo sostenible en las comunidades ecuatorianas.";
  const vision = data?.vision || "Ser la operadora líder en experiencias auténticas que transforman la vida de viajeros y anfitriones.";
  const valores = data?.valores || "Integridad, respeto cultural, conservación ambiental y excelencia en el servicio al cliente.";
  const imagen = data?.imagen || "";

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Nuestra Historia</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Comprometidos con el <span className="text-primary">Ecuador real</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">{historia}</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">{anos}</h4>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Años de Experiencia</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">{tours}</h4>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Tours Realizados</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img src={imagen} className="w-full h-full object-cover" alt="About Us" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary rounded-[2rem] -z-10 -rotate-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Misión", icon: <Eye />, text: mision },
            { title: "Visión", icon: <Compass />, text: vision },
            { title: "Valores", icon: <ShieldCheck />, text: valores },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all group">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { size: 48 })}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

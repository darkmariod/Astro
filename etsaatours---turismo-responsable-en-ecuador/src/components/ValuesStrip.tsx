import React from "react";
import { Leaf, Users, ShieldCheck, Globe } from "lucide-react";

export const ValuesStrip = () => {
  return (
    <section className="bg-brand-deep py-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-primary blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Leaf />, label: "Sostenible", desc: "Impacto positivo" },
            { icon: <Users />, label: "Comunitario", desc: "Apoyo local" },
            { icon: <ShieldCheck />, label: "Seguro", desc: "Guías certificados" },
            { icon: <Globe />, label: "Auténtico", desc: "Cultura viva" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-white font-black text-xl mb-2 tracking-tight">{item.label}</h4>
              <p className="text-white/50 text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

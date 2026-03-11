import React, { useState } from "react";
import { motion } from "motion/react";

export const ContactPage = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", telefono: "", pais: "", fecha: "", mensaje: "" });

  const handleWhatsApp = () => {
    const texto = `Hola! Me interesa un tour.\nNombre: ${form.nombre} ${form.apellido}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nPaís: ${form.pais}\nFecha tentativa: ${form.fecha}\nMensaje: ${form.mensaje}`;
    window.open(`https://wa.me/59398123456678?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Contáctanos</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-4">
            Diseña tu <span className="text-primary">experiencia</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12 font-medium">Completa el formulario y uno de nuestros asesores te contactará a la brevedad.</p>

          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Nombres</label>
                <input value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})}
                  placeholder="Juan" className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Apellidos</label>
                <input value={form.apellido} onChange={e => setForm({...form, apellido: e.target.value})}
                  placeholder="Pérez" className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Email</label>
                <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  type="email" placeholder="juan@email.com" className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Teléfono</label>
                <input value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})}
                  placeholder="+593 99 999 9999" className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">País de residencia</label>
                <select value={form.pais} onChange={e => setForm({...form, pais: e.target.value})}
                  className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium bg-white">
                  <option value="">Selecciona tu país</option>
                  <option>Ecuador</option><option>Colombia</option><option>Perú</option>
                  <option>Estados Unidos</option><option>España</option><option>Alemania</option>
                  <option>Francia</option><option>Reino Unido</option><option>Otro</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Fecha tentativa de viaje</label>
                <input value={form.fecha} onChange={e => setForm({...form, fecha: e.target.value})}
                  type="date" className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">¿Qué experiencia buscas?</label>
              <textarea value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})}
                rows={4} placeholder="Cuéntanos qué tipo de tour te interesa..." className="w-full border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-primary transition-all text-slate-900 font-medium resize-none" />
            </div>
            <button onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

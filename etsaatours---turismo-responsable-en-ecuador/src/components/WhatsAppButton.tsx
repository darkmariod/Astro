import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center"
    onClick={() => window.open("https://wa.me/593999999999", "_blank")}
  >
    <MessageCircle size={32} fill="currentColor" />
  </motion.button>
);

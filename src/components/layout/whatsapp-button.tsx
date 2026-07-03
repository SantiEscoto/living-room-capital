"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/brand-icons";

const WHATSAPP_URL = "https://wa.me/5215585370697";

export function WhatsAppButton() {
  return (
    <div className="group fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#111111] px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 sm:block"
      >
        Escríbenos por WhatsApp
      </span>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Escríbenos por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#20bd5a]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Escríbenos por WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>
    </div>
  );
}

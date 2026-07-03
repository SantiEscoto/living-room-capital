"use client";

import { motion } from "framer-motion";
import { Factory, MapPin, Ruler } from "lucide-react";

export function AboutUs() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Sobre Nosotros
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Somos una tienda de fábrica especializada en la venta sobre medida
              y diseño de muebles para el hogar. Ubicados en el Mercado de
              Muebles Vasco de Quiroga, Tlalpan. Fabricación propia con precios
              directos y diseño a tu medida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
          >
            {[
              {
                icon: Factory,
                label: "Fábrica propia",
                desc: "Precios directos sin intermediarios",
              },
              {
                icon: MapPin,
                label: "Mercado CREA",
                desc: "Local 102, Vasco de Quiroga",
              },
              {
                icon: Ruler,
                label: "A tu medida",
                desc: "Diseño y fabricación personalizada",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/5 bg-[#111111] p-5 text-center lg:text-left"
              >
                <item.icon className="mx-auto mb-3 h-6 w-6 text-[#3B82F6] lg:mx-0" />
                <p className="font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

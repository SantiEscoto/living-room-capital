"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Truck, Ruler, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MapPin,
    title: "Showroom en Mercado CREA",
    description: "Visítanos en Local 102, Mercado Vasco de Quiroga, Tlalpan.",
  },
  {
    icon: Ruler,
    title: "Fabricación a medida",
    description: "Diseñamos y fabricamos muebles personalizados para tu espacio.",
  },
  {
    icon: Truck,
    title: "Entrega a domicilio",
    description: "Servicio de entrega en CDMX y Estado de México.",
  },
  {
    icon: Sparkles,
    title: "Realidad Aumentada",
    description: "Visualiza el mueble en tu hogar antes de comprar.",
  },
];

export function CtaSection() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Tu sala perfecta te espera en Tlalpan
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Somos fábrica propia con más de 558 seguidores en Facebook y
              excelentes reseñas en Google. Precios directos, sin
              intermediarios. Desde salas modulares hasta reclinables premium.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-[#FFA500] text-black hover:bg-[#ffb733] font-semibold"
              >
                <Link href="/personalizar">Personalizar mueble</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5"
              >
                <Link href="/contacto">Visítanos</Link>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/5 bg-[#111111] p-5"
              >
                <feature.icon className="mb-3 h-6 w-6 text-[#3B82F6]" />
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Sala moderna con sofá elegante"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-white/20 bg-black/30 text-white backdrop-blur-sm px-4 py-1"
            >
              <Star className="mr-1 h-3 w-3 fill-[#FFA500] text-[#FFA500]" />
              {BUSINESS.googleRating} en Google · Mercado CREA, Tlalpan
            </Badge>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mb-6"
          >
            <h1>
              <span className="block text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-7xl">
                Living Room
              </span>
              <span className="block text-5xl font-bold tracking-tight text-[#3B82F6] drop-shadow-lg sm:text-7xl">
                Capital
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-4 text-xl font-medium tracking-wide text-zinc-100 sm:text-2xl"
          >
            {BUSINESS.slogan}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mb-10 text-base text-zinc-300 sm:text-lg"
          >
            Fábrica propia de salas, sillones, futones y más. Muebles en
            Tlalpan con precios directos y diseño a tu medida.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group bg-[#3B82F6] px-8 text-base hover:bg-[#2563eb] shadow-lg shadow-blue-500/25"
            >
              <Link href="/ar">
                <Sparkles className="mr-2 h-5 w-5" />
                Visualiza en tu hogar con Realidad Aumentada
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-black/30 px-8 text-base text-white backdrop-blur-sm hover:bg-white/10"
            >
              <Link href="/catalogo">Ver Catálogo</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

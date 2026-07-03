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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] max-h-[900px] w-full items-center overflow-hidden sm:min-h-[85vh] sm:max-h-none">
      <Image
        src={HERO_IMAGE}
        alt="Sala moderna con sofá elegante"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <motion.div
          className="mx-auto w-full max-w-3xl text-center"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-4 max-w-full whitespace-normal border-white/20 bg-black/40 px-3 py-1 text-[11px] leading-snug text-white backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-xs"
            >
              <Star className="mr-1 inline h-3 w-3 shrink-0 fill-[#FFA500] text-[#FFA500]" />
              {BUSINESS.googleRating} en Google · Mercado CREA, Tlalpan
            </Badge>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mb-3 sm:mb-6"
          >
            <h1 className="leading-[1.1]">
              <span className="block text-[clamp(2rem,9vw,4.5rem)] font-bold tracking-tight text-white drop-shadow-lg">
                Living Room
              </span>
              <span className="block text-[clamp(2rem,9vw,4.5rem)] font-bold tracking-tight text-[#3B82F6] drop-shadow-lg">
                Capital
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
            className="mb-2 text-base font-medium tracking-wide text-zinc-100 sm:mb-4 sm:text-xl md:text-2xl"
          >
            {BUSINESS.slogan}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
            className="mb-6 text-sm leading-relaxed text-zinc-300 sm:mb-10 sm:text-base md:text-lg"
          >
            Fábrica propia de salas, sillones, futones y más. Muebles en
            Tlalpan con precios directos y diseño a tu medida.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-auto min-h-11 w-full whitespace-normal px-4 py-3 text-sm leading-snug sm:w-auto sm:px-8 sm:text-base bg-[#3B82F6] hover:bg-[#2563eb] shadow-lg shadow-blue-500/25"
            >
              <Link href="/ar" className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Visualiza con AR</span>
                <span className="hidden sm:inline">
                  Visualiza en tu hogar con Realidad Aumentada
                </span>
                <ArrowRight className="hidden h-4 w-4 shrink-0 sm:block" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 w-full border-white/30 bg-black/40 text-sm text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="/catalogo">Ver Catálogo</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

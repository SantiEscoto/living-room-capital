"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/catalog/product-image";
import { PRODUCTS } from "@/lib/constants";

const featured = [...PRODUCTS.filter((p) => p.featured)].sort(
  (a, b) => (b.seedLikes ?? 0) - (a.seedLikes ?? 0)
);

export function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-4xl">
              Productos Destacados
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
              Salas, sillones y reclinables de fábrica propia en Tlalpan, CDMX
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-white/10 text-white hover:bg-white/5"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-white/10 text-white hover:bg-white/5"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
        >
          <div className="grid auto-cols-[minmax(240px,280px)] grid-flow-col grid-rows-2 gap-4">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-start"
              >
                <Card className="group h-full overflow-hidden border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ProductImage src={product.image} alt={product.name} />
                    <Badge className="absolute left-2 top-2 bg-[#3B82F6] text-[10px] text-white sm:left-3 sm:top-3 sm:text-xs">
                      {product.category}
                    </Badge>
                    {product.realPhoto && (
                      <Badge className="absolute right-2 top-2 bg-[#FFA500] text-[9px] text-black sm:right-3 sm:top-3 sm:text-xs">
                        Catálogo real
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
                    <CardTitle className="line-clamp-1 text-sm text-white sm:text-lg">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-xs sm:text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-3 pb-1 sm:px-4 sm:pb-2">
                    <p className="text-xs font-semibold text-[#25D366] sm:text-sm">
                      {product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0 sm:p-4 sm:pt-0">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="h-8 w-full text-xs text-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] sm:text-sm"
                    >
                      <Link href="/catalogo">Ver detalle</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-zinc-600 sm:hidden">
          Desliza para ver más →
        </p>

        <div className="mt-8 text-center sm:mt-10">
          <Button
            asChild
            variant="outline"
            className="border-white/10 text-white hover:bg-white/5"
          >
            <Link href="/catalogo">
              Ver todo el catálogo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

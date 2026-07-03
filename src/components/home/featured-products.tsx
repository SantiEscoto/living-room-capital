"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { PRODUCTS, type Product } from "@/lib/constants";

const featured = [...PRODUCTS.filter((p) => p.featured)].sort(
  (a, b) => (b.seedLikes ?? 0) - (a.seedLikes ?? 0)
);

const row1 = featured.filter((_, i) => i % 2 === 0);
const row2 = featured.filter((_, i) => i % 2 === 1);

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <Card className="group border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductImage src={product.image} alt={product.name} />
        <Badge className="absolute left-3 top-3 bg-[#3B82F6] text-xs text-white">
          {product.category}
        </Badge>
      </div>
      <CardHeader className="gap-2">
        <CardTitle className="line-clamp-1 text-base text-white sm:text-lg">
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-2 leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold text-[#25D366]">{product.price}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="h-9 w-full text-sm text-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
        >
          <Link href="/catalogo">Ver detalle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function MarqueeRow({
  products,
  direction,
}: {
  products: Product[];
  direction: "left" | "right";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const loop = [...products, ...products];

  const pause = useCallback(() => {
    pausedRef.current = true;
    setPaused(true);
  }, []);

  const resumeLater = useCallback(() => {
    window.setTimeout(() => {
      pausedRef.current = false;
      setPaused(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (direction === "right") {
      el.scrollLeft = el.scrollWidth / 2;
    }

    const speed = direction === "left" ? 0.6 : -0.6;
    let frame = 0;

    const tick = () => {
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;

        if (direction === "left" && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (direction === "right" && el.scrollLeft <= 0) {
          el.scrollLeft += half;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [direction, products.length]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex touch-pan-x gap-4 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onTouchStart={pause}
        onTouchEnd={resumeLater}
        onWheel={() => {
          pause();
          resumeLater();
        }}
        onMouseEnter={pause}
        onMouseLeave={() => {
          pausedRef.current = false;
          setPaused(false);
        }}
        aria-label={paused ? "Carrusel pausado" : "Carrusel de productos"}
      >
        {loop.map((product, i) => (
          <div
            key={`${product.id}-${i}`}
            className="w-[min(300px,82vw)] shrink-0 sm:w-[280px]"
            aria-hidden={i >= products.length}
          >
            <FeaturedProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-10 sm:text-left"
        >
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-2 text-sm text-zinc-400 sm:mt-3 sm:text-base">
            Salas, sillones y reclinables de fábrica propia en Tlalpan, CDMX
          </p>
        </motion.div>

        <div className="-mx-4 space-y-5 px-4 sm:mx-0 sm:px-0">
          <MarqueeRow products={row1} direction="left" />
          <MarqueeRow products={row2} direction="right" />
        </div>

        <p className="mt-3 text-center text-xs text-zinc-600 sm:hidden">
          Desliza para explorar
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

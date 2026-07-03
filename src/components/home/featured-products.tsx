"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
import { cn } from "@/lib/utils";

const featured = [...PRODUCTS.filter((p) => p.featured)].sort(
  (a, b) => (b.seedLikes ?? 0) - (a.seedLikes ?? 0)
);

const row1 = featured.filter((_, i) => i % 2 === 0);
const row2 = featured.filter((_, i) => i % 2 === 1);

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30">
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
      <CardHeader className="gap-2 p-4 pb-2">
        <CardTitle className="line-clamp-1 text-base text-white sm:text-lg">
          {product.name}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm font-semibold text-[#25D366]">{product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
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
  const loop = [...products, ...products];

  return (
    <div className="relative py-2 [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex w-max items-stretch gap-5 hover:[animation-play-state:paused] motion-reduce:animate-none",
            direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
          )}
        >
          {loop.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="w-[min(320px,88vw)] shrink-0 sm:w-[300px]"
              aria-hidden={i >= products.length}
            >
              <FeaturedProductCard product={product} />
            </div>
          ))}
        </div>
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

        <div className="-mx-4 space-y-6 sm:mx-0">
          <MarqueeRow products={row1} direction="left" />
          <MarqueeRow products={row2} direction="right" />
        </div>

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

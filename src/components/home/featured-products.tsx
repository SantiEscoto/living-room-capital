"use client";

import Image from "next/image";
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
import { PRODUCTS } from "@/lib/constants";

const featured = PRODUCTS.filter((p) => p.featured);

export function FeaturedProducts() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-3 text-zinc-400">
            Salas, sillones y reclinables de fábrica propia en Tlalpan, CDMX
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <Badge className="absolute left-3 top-3 bg-[#3B82F6] text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm font-semibold text-[#25D366]">
                    {product.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
                  >
                    <Link href="/catalogo">Ver detalle</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
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

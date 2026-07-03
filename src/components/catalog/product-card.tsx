"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="group cursor-pointer overflow-hidden border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30"
        onClick={() => onSelect(product)}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <Badge className="absolute left-3 top-3 bg-[#3B82F6] text-white">
            {product.category}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-semibold text-[#25D366]">
            {product.price}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

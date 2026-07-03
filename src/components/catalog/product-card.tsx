"use client";

import { Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductImage } from "@/components/catalog/product-image";
import type { Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  totalLikes: number;
  isLiked: boolean;
  rank: number;
  onSelect: (product: Product) => void;
  onToggleLike: (productId: string) => void;
}

export function ProductCard({
  product,
  totalLikes,
  isLiked,
  rank,
  onSelect,
  onToggleLike,
}: ProductCardProps) {
  const isTop = rank === 0 && totalLikes >= 25;
  const isPopular = rank < 3 && totalLikes >= 20;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(isTop && "sm:col-span-2")}
    >
      <Card
        className={cn(
          "group cursor-pointer overflow-hidden border-white/5 bg-[#111111] transition-colors hover:border-[#3B82F6]/30",
          isTop && "ring-2 ring-[#FFA500]/60 shadow-lg shadow-[#FFA500]/10",
          isPopular && !isTop && "ring-1 ring-[#3B82F6]/40"
        )}
        onClick={() => onSelect(product)}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            isTop ? "aspect-[16/9]" : "aspect-[4/3]"
          )}
        >
          <ProductImage src={product.image} alt={product.name} />
          <Badge className="absolute left-3 top-3 bg-[#3B82F6] text-white">
            {product.category}
          </Badge>
          {isTop && (
            <Badge className="absolute bottom-3 left-3 gap-1 bg-[#FFA500] text-black">
              <TrendingUp className="h-3 w-3" />
              Más popular
            </Badge>
          )}
          <button
            type="button"
            className={cn(
              "absolute bottom-3 right-3 inline-flex h-8 min-w-[3rem] items-center justify-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 text-xs font-medium tabular-nums backdrop-blur-sm transition-colors hover:bg-black/80",
              isLiked ? "text-red-400" : "text-white"
            )}
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike(product.id);
            }}
            aria-label={isLiked ? "Quitar me gusta" : "Me gusta"}
          >
            <Heart
              className={cn("h-3.5 w-3.5 shrink-0", isLiked && "fill-current")}
            />
            <span>{totalLikes}</span>
          </button>
        </div>
        <CardHeader className={cn("gap-2", isTop && "pt-1")}>
          <CardTitle className={cn("text-white", isTop && "text-xl")}>
            {product.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className={cn(isTop && "pb-5")}>
          <p className="mt-1 text-sm font-semibold text-[#25D366]">{product.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

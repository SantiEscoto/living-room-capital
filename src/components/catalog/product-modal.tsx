"use client";

import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductImage } from "@/components/catalog/product-image";
import type { Product } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalLikes: number;
  isLiked: boolean;
  onToggleLike: (productId: string) => void;
}

export function ProductModal({
  product,
  open,
  onOpenChange,
  totalLikes,
  isLiked,
  onToggleLike,
}: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = `Hola, me interesa el producto "${product.name}" (${product.category}). ¿Me pueden dar más información?`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/10 bg-[#111111] text-white sm:max-w-2xl">
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-[#3B82F6]">{product.category}</Badge>
            {product.realPhoto && (
              <Badge className="bg-[#FFA500] text-black">Catálogo real</Badge>
            )}
            <button
              type="button"
              onClick={() => onToggleLike(product.id)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-xs transition-colors hover:bg-white/5",
                isLiked && "border-red-400/40 text-red-400"
              )}
            >
              <Heart className={cn("h-3 w-3", isLiked && "fill-current")} />
              {totalLikes} me gusta
            </button>
          </div>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="text-zinc-400">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <ProductImage
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-[#25D366]">{product.price}</p>
          <div className="flex flex-wrap gap-2">
            {product.construexUrl && (
              <Button
                asChild
                variant="outline"
                className="border-[#FF6B00]/40 text-[#FF6B00] hover:bg-[#FF6B00]/10"
              >
                <a
                  href={product.construexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en Construex
                </a>
              </Button>
            )}
            {product.facebookPostUrl && (
              <Button
                asChild
                variant="outline"
                className="border-[#1877F2]/40 text-[#1877F2] hover:bg-[#1877F2]/10"
              >
                <a
                  href={product.facebookPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en Facebook
                </a>
              </Button>
            )}
            {product.modelUrl && (
              <Button
                asChild
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5"
              >
                <Link href="/ar">Ver en AR</Link>
              </Button>
            )}
            <Button
              asChild
              className="bg-[#25D366] text-white hover:bg-[#20bd5a]"
            >
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

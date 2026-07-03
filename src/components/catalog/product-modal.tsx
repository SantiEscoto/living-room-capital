"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/constants";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({
  product,
  open,
  onOpenChange,
}: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = `Hola, me interesa el producto "${product.name}" (${product.category}). ¿Me pueden dar más información?`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/10 bg-[#111111] text-white">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#3B82F6]">{product.category}</Badge>
          </div>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="text-zinc-400">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-[#25D366]">{product.price}</p>
          <div className="flex gap-2">
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}

const FALLBACK =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80";

export function ProductImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
  fill = true,
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const isLocal = imgSrc.startsWith("/");

  if (!fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        referrerPolicy="no-referrer"
        onError={() => setImgSrc(FALLBACK)}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={cn("object-cover", className)}
      sizes={sizes}
      priority={priority}
      unoptimized={!isLocal && imgSrc.includes("fbcdn.net")}
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}

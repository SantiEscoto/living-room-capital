"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryFilter } from "@/components/catalog/category-filter";
import { ProductCard } from "@/components/catalog/product-card";
import { ProductModal } from "@/components/catalog/product-modal";
import { useProductLikes } from "@/hooks/use-product-likes";
import { PRODUCTS, type Category, type Product } from "@/lib/constants";

export function CatalogGrid() {
  const [category, setCategory] = useState<Category>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleLike, getUserLikes, likes } = useProductLikes();

  const sorted = useMemo(() => {
    const list =
      category === "Todos"
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === category);

    return list.sort((a, b) => {
      const likesA = (a.seedLikes ?? 0) + (likes[a.id] ?? 0);
      const likesB = (b.seedLikes ?? 0) + (likes[b.id] ?? 0);
      return likesB - likesA;
    });
  }, [category, likes]);

  const getTotal = (product: Product) =>
    (product.seedLikes ?? 0) + (likes[product.id] ?? 0);

  const handleSelect = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <CategoryFilter active={category} onChange={setCategory} />

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {sorted.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              rank={index}
              totalLikes={getTotal(product)}
              isLiked={getUserLikes(product.id) > 0}
              onSelect={handleSelect}
              onToggleLike={toggleLike}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {sorted.length === 0 && (
        <p className="mt-12 text-center text-zinc-500">
          No hay productos en esta categoría.
        </p>
      )}

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
        totalLikes={selectedProduct ? getTotal(selectedProduct) : 0}
        isLiked={
          selectedProduct ? getUserLikes(selectedProduct.id) > 0 : false
        }
        onToggleLike={toggleLike}
      />
    </>
  );
}

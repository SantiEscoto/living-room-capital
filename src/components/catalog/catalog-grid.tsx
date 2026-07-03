"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryFilter } from "@/components/catalog/category-filter";
import { ProductCard } from "@/components/catalog/product-card";
import { ProductModal } from "@/components/catalog/product-modal";
import { PRODUCTS, type Category, type Product } from "@/lib/constants";

export function CatalogGrid() {
  const [category, setCategory] = useState<Category>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(
    () =>
      category === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category),
    [category]
  );

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
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleSelect}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-zinc-500">
          No hay productos en esta categoría.
        </p>
      )}

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}

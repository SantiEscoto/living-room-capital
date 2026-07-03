"use client";

import { motion } from "framer-motion";
import { CATEGORIES, type Category } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <motion.button
          key={cat}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === cat
              ? "bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20"
              : "border border-white/10 bg-[#111111] text-zinc-400 hover:border-[#3B82F6]/30 hover:text-white"
          )}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}

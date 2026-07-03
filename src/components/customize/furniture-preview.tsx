"use client";

import { motion } from "framer-motion";

interface FurniturePreviewProps {
  type: string;
  width: number;
  depth: number;
  height: number;
  color: string;
  material: string;
  fabric: string;
}

export function FurniturePreview({
  type,
  width,
  depth,
  height,
  color,
  material,
  fabric,
}: FurniturePreviewProps) {
  const scale = Math.min(280 / Math.max(width, depth, 1), 1);

  return (
    <div className="rounded-xl border border-white/10 bg-[#111111] p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">Vista previa</h3>

      <div className="relative flex h-72 items-end justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1a1a2e] to-[#0A0A0A]">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />

        <motion.div
          key={`${type}-${color}-${width}-${depth}-${height}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
          style={{
            width: width * scale * 0.5,
            height: height * scale * 0.4,
          }}
        >
          {/* Back */}
          <div
            className="absolute inset-x-0 top-0 rounded-t-lg"
            style={{
              height: "60%",
              backgroundColor: color,
              opacity: 0.85,
              boxShadow: "inset 0 -2px 10px rgba(0,0,0,0.3)",
            }}
          />
          {/* Seat */}
          <div
            className="absolute inset-x-0 bottom-0 rounded-b-md"
            style={{
              height: "45%",
              backgroundColor: color,
              filter: "brightness(0.9)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
          />
          {/* Arms */}
          <div
            className="absolute left-0 top-[20%] rounded-l-md"
            style={{
              width: "12%",
              height: "55%",
              backgroundColor: color,
              filter: "brightness(0.85)",
            }}
          />
          <div
            className="absolute right-0 top-[20%] rounded-r-md"
            style={{
              width: "12%",
              height: "55%",
              backgroundColor: color,
              filter: "brightness(0.85)",
            }}
          />
          {/* Legs hint */}
          <div className="absolute -bottom-2 left-[15%] h-3 w-2 rounded-sm bg-[#333]" />
          <div className="absolute -bottom-2 right-[15%] h-3 w-2 rounded-sm bg-[#333]" />
        </motion.div>

        <p className="absolute bottom-3 text-xs text-zinc-600">
          Vista ilustrativa · No representa el producto final
        </p>
      </div>

      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between border-b border-white/5 pb-2">
          <dt className="text-zinc-500">Tipo</dt>
          <dd className="font-medium text-white">{type}</dd>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <dt className="text-zinc-500">Dimensiones</dt>
          <dd className="font-medium text-white">
            {width} × {depth} × {height} cm
          </dd>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <dt className="text-zinc-500">Material</dt>
          <dd className="font-medium text-white">{material}</dd>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-2">
          <dt className="text-zinc-500">Tela</dt>
          <dd className="font-medium text-white">{fabric}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-zinc-500">Color</dt>
          <dd className="flex items-center gap-2 font-medium text-white">
            <span
              className="inline-block h-4 w-4 rounded-full border border-white/20"
              style={{ backgroundColor: color }}
            />
          </dd>
        </div>
      </dl>
    </div>
  );
}

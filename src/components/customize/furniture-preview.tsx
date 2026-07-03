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

function darken(hex: string, amount = 0.15) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((n >> 16) & 255) * (1 - amount));
  const g = Math.max(0, ((n >> 8) & 255) * (1 - amount));
  const b = Math.max(0, (n & 255) * (1 - amount));
  return `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
}

function FurnitureShape({
  type,
  color,
  scale,
}: {
  type: string;
  color: string;
  scale: number;
}) {
  const dark = darken(color);
  const light = color;

  const base = {
    transform: `scale(${scale})`,
    transformOrigin: "center bottom",
  };

  switch (type) {
    case "Sillón":
      return (
        <div className="relative h-36 w-28" style={base}>
          <div className="absolute inset-x-1 top-0 h-[55%] rounded-t-xl" style={{ backgroundColor: light }} />
          <div className="absolute inset-x-0 bottom-3 h-[42%] rounded-lg shadow-xl" style={{ backgroundColor: dark }} />
          <div className="absolute left-0 top-[18%] h-[50%] w-4 rounded-l-lg" style={{ backgroundColor: dark }} />
          <div className="absolute right-0 top-[18%] h-[50%] w-4 rounded-r-lg" style={{ backgroundColor: dark }} />
          <div className="absolute -bottom-1 left-3 h-3 w-2 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 right-3 h-3 w-2 rounded-sm bg-zinc-700" />
        </div>
      );

    case "Futón":
      return (
        <div className="relative h-24 w-44" style={base}>
          <div className="absolute inset-x-0 bottom-4 h-14 rounded-lg shadow-xl" style={{ backgroundColor: light }} />
          <div className="absolute left-0 top-6 h-10 w-8 origin-bottom-left -rotate-[25deg] rounded-tl-lg rounded-tr-md" style={{ backgroundColor: dark }} />
          <div className="absolute -bottom-1 left-4 h-2 w-3 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 right-4 h-2 w-3 rounded-sm bg-zinc-700" />
        </div>
      );

    case "Reclinable":
      return (
        <div className="relative h-36 w-32" style={base}>
          <div
            className="absolute inset-x-2 top-0 h-[50%] origin-bottom rounded-t-xl"
            style={{ backgroundColor: light, transform: "rotate(-12deg)" }}
          />
          <div className="absolute inset-x-0 bottom-3 h-[38%] rounded-lg shadow-xl" style={{ backgroundColor: dark }} />
          <div className="absolute left-0 top-[30%] h-[45%] w-5 rounded-l-lg" style={{ backgroundColor: dark }} />
          <div className="absolute -bottom-1 left-4 h-2 w-4 rounded-full bg-zinc-600" />
          <div className="absolute -bottom-1 right-4 h-2 w-4 rounded-full bg-zinc-600" />
          <div className="absolute right-1 top-[55%] h-1 w-6 rounded bg-zinc-500" />
        </div>
      );

    case "Sofá Cama":
      return (
        <div className="relative h-32 w-48" style={base}>
          <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-xl" style={{ backgroundColor: light }} />
          <div className="absolute left-0 top-[10%] w-[55%] h-[55%] rounded-lg shadow-xl" style={{ backgroundColor: dark }} />
          <div className="absolute right-0 bottom-2 h-10 w-[48%] rounded-md border border-white/10" style={{ backgroundColor: light, filter: "brightness(0.95)" }} />
          <div className="absolute -bottom-1 left-4 h-2 w-3 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 right-6 h-2 w-3 rounded-sm bg-zinc-700" />
        </div>
      );

    case "Mueble Ocasional":
      return (
        <div className="relative h-20 w-24" style={base}>
          <div className="absolute inset-x-2 bottom-4 h-10 rounded-lg shadow-lg" style={{ backgroundColor: light }} />
          <div className="absolute inset-x-4 bottom-0 h-12 rounded-md" style={{ backgroundColor: dark, opacity: 0.9 }} />
          <div className="absolute -bottom-1 left-3 h-3 w-2 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 right-3 h-3 w-2 rounded-sm bg-zinc-700" />
        </div>
      );

    case "Sala":
    default:
      return (
        <div className="relative h-40 w-52" style={base}>
          {/* Sección principal */}
          <div className="absolute left-0 top-4 h-24 w-36 rounded-lg shadow-xl" style={{ backgroundColor: light }}>
            <div className="absolute inset-x-2 top-0 h-[45%] rounded-t-md" style={{ backgroundColor: dark, opacity: 0.3 }} />
          </div>
          {/* Esquinera */}
          <div className="absolute right-0 bottom-6 h-20 w-20 rounded-lg shadow-xl" style={{ backgroundColor: dark }} />
          {/* Respaldo esquinero */}
          <div className="absolute right-14 top-0 h-16 w-8 rounded-t-lg" style={{ backgroundColor: light, filter: "brightness(0.9)" }} />
          <div className="absolute -bottom-1 left-4 h-2 w-3 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 left-20 h-2 w-3 rounded-sm bg-zinc-700" />
          <div className="absolute -bottom-1 right-6 h-2 w-3 rounded-sm bg-zinc-700" />
        </div>
      );
  }
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
  const maxDim = Math.max(width, depth, height, 1);
  const scale = Math.min(1.6, Math.max(0.9, 220 / maxDim));

  return (
    <div className="rounded-xl border border-white/10 bg-[#111111] p-6">
      <h3 className="mb-4 text-lg font-semibold text-white">Vista previa</h3>

      <div className="relative flex h-[22rem] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1a1a2e] to-[#0A0A0A]">
        <div className="absolute inset-x-0 bottom-8 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-1/2 h-px w-3/4 -translate-x-1/2 bg-white/5" />

        <motion.div
          key={`${type}-${color}-${width}-${depth}-${height}`}
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative z-10 flex items-end justify-center pb-10"
        >
          <FurnitureShape type={type} color={color} scale={scale} />
        </motion.div>

        <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-zinc-600">
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

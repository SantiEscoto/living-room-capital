"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  COLORS,
  FABRICS,
  FURNITURE_TYPES,
  MATERIALS,
  getWhatsAppUrl,
} from "@/lib/constants";
import { FurniturePreview } from "./furniture-preview";

export function CustomizeForm() {
  const [furnitureType, setFurnitureType] = useState<string>(FURNITURE_TYPES[0]);
  const [width, setWidth] = useState("200");
  const [depth, setDepth] = useState("90");
  const [height, setHeight] = useState("85");
  const [material, setMaterial] = useState<string>(MATERIALS[0]);
  const [fabric, setFabric] = useState<string>(FABRICS[0]);
  const [color, setColor] = useState<string>(COLORS[1].hex);

  const selectedColorName =
    COLORS.find((c) => c.hex === color)?.name ?? "Personalizado";

  const quoteMessage = `Hola Living Room Capital, me gustaría cotizar un mueble personalizado:

• Tipo: ${furnitureType}
• Dimensiones: ${width} x ${depth} x ${height} cm
• Material: ${material}
• Tela: ${fabric}
• Color: ${selectedColorName}

¿Me pueden enviar una cotización?`;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="type">Tipo de mueble</Label>
          <Select value={furnitureType} onValueChange={setFurnitureType}>
            <SelectTrigger
              id="type"
              className="border-white/10 bg-[#111111] text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#111111]">
              {FURNITURE_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Ancho (cm)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="border-white/10 bg-[#111111] text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="depth">Profundidad (cm)</Label>
            <Input
              id="depth"
              type="number"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
              className="border-white/10 bg-[#111111] text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Alto (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border-white/10 bg-[#111111] text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="material">Material</Label>
          <Select value={material} onValueChange={setMaterial}>
            <SelectTrigger
              id="material"
              className="border-white/10 bg-[#111111] text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#111111]">
              {MATERIALS.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fabric">Tela</Label>
          <Select value={fabric} onValueChange={setFabric}>
            <SelectTrigger
              id="fabric"
              className="border-white/10 bg-[#111111] text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#111111]">
              {FABRICS.map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Color</Label>
          <div className="flex flex-wrap gap-3">
            {COLORS.map((c) => (
              <button
                key={c.hex}
                type="button"
                onClick={() => setColor(c.hex)}
                className={`h-10 w-10 rounded-full border-2 transition-transform hover:scale-110 ${
                  color === c.hex
                    ? "border-[#3B82F6] ring-2 ring-[#3B82F6]/50"
                    : "border-white/20"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={c.name}
              />
            ))}
          </div>
          <p className="text-sm text-zinc-500">Seleccionado: {selectedColorName}</p>
        </div>

        <Button
          asChild
          size="lg"
          className="w-full bg-green-500 text-white hover:bg-green-400 font-semibold"
        >
          <a
            href={getWhatsAppUrl(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar cotización por WhatsApp
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <FurniturePreview
          type={furnitureType}
          width={Number(width)}
          depth={Number(depth)}
          height={Number(height)}
          color={color}
          material={material}
          fabric={fabric}
        />
      </motion.div>
    </div>
  );
}

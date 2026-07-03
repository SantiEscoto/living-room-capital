import type { Metadata } from "next";
import { CustomizeForm } from "@/components/customize/customize-form";

export const metadata: Metadata = {
  title: "Personalizar Mueble | Living Room Capital — A Medida",
  description:
    "Configura tu mueble a medida: tipo, dimensiones, color, material y tela. Cotización directa por WhatsApp. Fábrica propia en Tlalpan, CDMX.",
};

export default function PersonalizarPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Personaliza tu mueble
        </h1>
        <p className="mt-3 text-zinc-400">
          Diseña el mueble perfecto para tu espacio. Somos fábrica propia —
          fabricamos exactamente lo que necesitas.
        </p>
      </div>
      <CustomizeForm />
    </div>
  );
}

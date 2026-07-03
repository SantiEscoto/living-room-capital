import type { Metadata } from "next";
import { Smartphone, Scan, ShoppingBag, Move3d } from "lucide-react";
import { ARViewerSection } from "@/components/ar/model-viewer";

export const metadata: Metadata = {
  title: "Realidad Aumentada | Living Room Capital",
  description:
    "Visualiza muebles en tu hogar con Realidad Aumentada antes de comprar. Living Room Capital, Tlalpan CDMX.",
};

const steps = [
  {
    icon: Scan,
    title: "Escanea tu espacio",
    description:
      "Apunta la cámara de tu celular hacia el piso de tu sala o recámara.",
  },
  {
    icon: Move3d,
    title: "Coloca el mueble",
    description:
      "Arrastra, rota y ajusta el modelo 3D hasta encontrar la posición perfecta.",
  },
  {
    icon: ShoppingBag,
    title: "Compra con confianza",
    description:
      "Una vez que te convenza, cotiza por WhatsApp y recibe tu mueble de fábrica.",
  },
];

export default function ARPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Realidad Aumentada
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
          Escanea tu espacio, coloca el mueble y compra con confianza. Visualiza
          cómo se verá en tu hogar antes de decidir.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <ARViewerSection />

        <div className="space-y-8">
          <div className="rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-[#3B82F6]" />
              <h2 className="text-lg font-semibold text-white">
                ¿Cómo usar la AR?
              </h2>
            </div>
            <ol className="space-y-4 text-sm text-zinc-300">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                  1
                </span>
                <span>
                  Abre esta página en tu celular (Android o iPhone con Safari).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                  2
                </span>
                <span>
                  Toca el ícono de AR en el visor 3D (caja con flechas) para
                  activar la cámara.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                  3
                </span>
                <span>
                  Mueve tu teléfono lentamente para detectar el piso y coloca el
                  mueble.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-xs font-bold text-white">
                  4
                </span>
                <span>
                  Usa un dedo para mover y dos dedos para rotar o escalar el
                  modelo.
                </span>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">El proceso</h2>
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-lg border border-white/5 bg-[#111111] p-4"
              >
                <step.icon className="h-6 w-6 shrink-0 text-[#3B82F6]" />
                <div>
                  <h3 className="font-medium text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-600">
            * Modelos 3D de demostración con muebles reales en escala. Los modelos
            finales de tus productos se integrarán próximamente.
          </p>
        </div>
      </div>
    </div>
  );
}

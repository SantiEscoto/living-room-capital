import type { Metadata } from "next";
import { CatalogGrid } from "@/components/catalog/catalog-grid";

export const metadata: Metadata = {
  title: "Catálogo | Living Room Capital — Muebles Tlalpan CDMX",
  description:
    "Explora nuestro catálogo de salas, sillones, futones, reclinables y sofás cama. Fábrica propia en Mercado CREA, Tlalpan con precios directos.",
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Catálogo</h1>
        <p className="mt-3 text-zinc-400">
          Muebles de fábrica propia en Tlalpan. Filtra por categoría y
          solicita cotización por WhatsApp.
        </p>
      </div>
      <CatalogGrid />
    </div>
  );
}

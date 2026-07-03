import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageWrapper } from "@/components/layout/page-wrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Living Room Capital | Muebles en Tlalpan, CDMX — Fábrica Propia",
  description:
    "Living Room Capital: salas, sillones, futones, reclinables y sofás cama de fábrica propia en Mercado CREA, Tlalpan. Calidad | Estilo | Vanguardia. Precios directos, diseño a medida y visualización AR.",
  keywords: [
    "muebles Tlalpan",
    "muebles CDMX",
    "salas Tlalpan",
    "sillones CDMX",
    "Mercado CREA muebles",
    "Living Room Capital",
    "muebles a medida CDMX",
    "fábrica de muebles Tlalpan",
  ],
  openGraph: {
    title: "Living Room Capital | Muebles en Tlalpan, CDMX",
    description:
      "Fábrica propia de muebles en Mercado CREA. Salas, sillones, futones y más con precios directos.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] font-sans antialiased text-white">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}

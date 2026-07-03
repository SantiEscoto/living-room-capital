import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto | Living Room Capital — Mercado CREA, Tlalpan",
  description:
    "Visítanos en Local 102, Mercado Vasco de Quiroga, Tlalpan. Lun-Dom 10:00 AM - 6:00 PM. WhatsApp, teléfono y email.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Contacto</h1>
        <p className="mt-3 text-zinc-400">
          Estamos en Mercado CREA, Tlalpan. Escríbenos o visítanos en persona.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <ContactForm />

          <div className="mt-8 space-y-4 rounded-xl border border-white/5 bg-[#111111] p-6">
            <h2 className="font-semibold text-white">Información</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.email}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Clock className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe
              src={BUSINESS.mapEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Living Room Capital en Mercado CREA, Tlalpan"
              className="grayscale-[30%] contrast-[1.1]"
            />
          </div>
          <a
            href={BUSINESS.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#3B82F6] hover:underline"
          >
            <MapPin className="h-4 w-4" />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

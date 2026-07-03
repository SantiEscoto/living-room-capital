import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] text-sm font-bold text-white">
                LR
              </div>
              <div>
                <p className="font-semibold text-white">{BUSINESS.name}</p>
                <p className="text-xs text-zinc-500">{BUSINESS.slogan}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Fábrica propia de muebles en Mercado CREA, Tlalpan. Precios
              directos, calidad garantizada y diseño a tu medida.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-[#1877F2] hover:text-[#1877F2]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-[10px] font-bold text-white">
                  f
                </span>
                Facebook
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-[#3B82F6] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
              <li className="flex items-start gap-2 sm:col-span-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <Clock className="h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/5" />

        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
          reservados. Muebles Tlalpan · Muebles CDMX · Mercado CREA
        </p>
      </div>
    </footer>
  );
}

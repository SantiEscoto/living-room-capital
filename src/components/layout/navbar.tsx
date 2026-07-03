"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5215585370697";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] text-sm font-bold text-white shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            LR
          </motion.div>
          <div className="hidden sm:block">
            <span className="text-sm font-semibold tracking-tight text-white">
              {BUSINESS.name}
            </span>
            <p className="text-[10px] text-zinc-500">{BUSINESS.slogan}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:origin-center after:scale-x-0 after:bg-[#3B82F6] after:transition-transform hover:text-[#3B82F6] hover:after:scale-x-100",
                pathname === link.href
                  ? "font-medium text-[#3B82F6] after:scale-x-100"
                  : "text-zinc-400"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-[#25D366] font-semibold text-white shadow-md shadow-[#25D366]/25 hover:bg-[#20bd5a]"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] border-white/10 bg-[#0A0A0A]"
          >
            <div className="mt-8 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base transition-colors",
                    pathname === link.href
                      ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                      : "text-zinc-300 hover:bg-white/5 hover:text-[#3B82F6]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

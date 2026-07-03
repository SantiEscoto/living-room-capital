"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = encodeURIComponent(
      `Nombre: ${form.name}\nTeléfono: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=Contacto desde web&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-green-500/20 bg-green-500/10 p-6 text-center"
        >
          <p className="font-medium text-green-400">
            ¡Gracias! Se abrió tu cliente de correo para enviar el mensaje.
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            También puedes escribirnos directamente por WhatsApp.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-white/10 bg-[#111111] text-white"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-white/10 bg-[#111111] text-white"
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border-white/10 bg-[#111111] text-white"
              placeholder="55 1234 5678"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border-white/10 bg-[#111111] text-white resize-none"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563eb]"
          >
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </Button>
        </form>
      )}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#0A0A0A] px-2 text-zinc-500">o</span>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="w-full bg-green-500 text-white hover:bg-green-400 font-semibold"
      >
        <a
          href={getWhatsAppUrl(
            "Hola Living Room Capital, quiero más información sobre sus muebles."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          WhatsApp directo
        </a>
      </Button>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 flex items-center justify-center gap-2 text-zinc-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#FFA500] text-[#FFA500]"
                />
              ))}
            </span>
            {BUSINESS.googleRating} · {BUSINESS.googleReviews} reseñas en Google
            Maps
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-[#111111]">
                <CardContent className="p-6">
                  <Quote className="mb-3 h-6 w-6 text-[#3B82F6]/50" />
                  <p className="mb-4 text-sm leading-relaxed text-zinc-300">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">
                      {testimonial.author}
                    </p>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, j) => (
                          <Star
                            key={j}
                            className="h-3 w-3 fill-[#FFA500] text-[#FFA500]"
                          />
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

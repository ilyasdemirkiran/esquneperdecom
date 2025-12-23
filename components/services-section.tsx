"use client";

import { motion } from "framer-motion";
import type { HomeService } from "@/types";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface ServicesSectionProps {
  services: HomeService[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const getGridClass = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-200 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-slate-700">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="text-gradient-coral">Premium</span>{" "}
            <span className="text-slate-900">Dekorasyon</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Mekanlarınıza değer katan profesyonel çözümlerimizle tanışın
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-3xl ${getGridClass(index)}`}
            >
              <div className="relative h-full min-h-[300px] glass hover:border-blue-300 hover:shadow-lg transition-all duration-500">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={`https:${service.url}`}
                    alt={service.title || "Service"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-2xl font-heading text-white mb-2 group-hover:text-gradient-coral transition-all">
                      {service.title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-coral rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const serviceAreas = [
  {
    name: "Başakşehir",
    description: "Ana merkez lokasyonumuz",
    featured: true,
  },
  {
    name: "Kayaşehir",
    description: "Hızlı servis bölgesi",
    featured: true,
  },
  {
    name: "Bahçeşehir",
    description: "Aktif hizmet bölgesi",
    featured: true,
  },
  {
    name: "Esenyurt",
    description: "Geniş hizmet ağı",
    featured: false,
  },
  {
    name: "Avcılar",
    description: "Düzenli hizmet",
    featured: false,
  },
  {
    name: "Küçükçekmece",
    description: "Hizmet bölgesi",
    featured: false,
  },
];

export function ServiceAreas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-slate-700">Hizmet Bölgelerimiz</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            <span className="text-slate-900">İstanbul'da</span>{" "}
            <span className="text-gradient-blue">Her Yerdeyiz</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Başakşehir merkezli olarak İstanbul'un birçok bölgesinde profesyonel perde ve dekorasyon hizmetleri sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`glass rounded-xl p-4 text-center hover:border-blue-300 hover:shadow-md transition-all ${area.featured ? "bg-blue-50/50" : ""
                }`}
            >
              <div className={`w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center ${area.featured ? "bg-gradient-blue" : "bg-slate-200"
                }`}>
                {area.featured ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <MapPin className="h-5 w-5 text-slate-600" />
                )}
              </div>
              <h3 className="font-heading text-slate-900 mb-1">{area.name}</h3>
              <p className="text-xs text-slate-600">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-600">
            Diğer bölgeler için{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              bizimle iletişime geçin
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

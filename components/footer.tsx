"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-heading text-gradient-blue">
                ESQUNE
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Premium perde ve dekorasyon çözümleri
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-slate-900 mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-600 transition-colors"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-600 transition-colors"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-600 transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-slate-900 mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <a href="tel:+905343259444" className="hover:text-blue-600 transition-colors">
                  +90 534 325 9 444
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span>Başakşehir, İstanbul</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-slate-900 mb-4">Sosyal Medya</h4>
            <a
              href="https://www.instagram.com/esqune_perde/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:border-blue-300 transition-all group"
            >
              <Instagram className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-slate-700">@esqune_perde</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-600"
        >
          <p>© 2025 ESQUNE Design. Tüm hakları saklıdır.</p>
        </motion.div>
      </div>
    </footer>
  );
}

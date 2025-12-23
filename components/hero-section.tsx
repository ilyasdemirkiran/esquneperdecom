"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  heroImage?: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fallback image if no hero image provided
  const displayImage = heroImage || "https://images.unsplash.com/photo-1585128792160-c4e0d4d5d5d8?w=800&h=1000&fit=crop";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50 pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-700 font-medium">
                Premium Dekorasyon Çözümleri
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-heading leading-tight">
                <span className="text-slate-900">Mekanlarınıza</span>
                <br />
                <span className="text-gradient-blue">Değer Katın</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl">
                Profesyonel perde ve dekorasyon hizmetleriyle yaşam alanlarınızı
                dönüştürüyoruz
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-coral hover:glow-coral text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Hemen Başlayın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                Galeriyi İncele
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div>
                <div className="text-3xl font-heading text-gradient-blue">500+</div>
                <div className="text-sm text-slate-600">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-heading text-gradient-coral">15+</div>
                <div className="text-sm text-slate-600">Yıl Tecrübe</div>
              </div>
              <div>
                <div className="text-3xl font-heading text-gradient-blue">100%</div>
                <div className="text-sm text-slate-600">Memnuniyet</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden glass glow-blue">
              <Image
                src={displayImage.startsWith('//') ? `https:${displayImage}` : displayImage}
                alt="Modern Perde Tasarımları"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-heading text-slate-900">Premium Kalite</div>
                  <div className="text-sm text-slate-600">
                    En iyi malzemeler ve işçilik
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

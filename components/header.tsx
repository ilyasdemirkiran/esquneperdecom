"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass border-b border-slate-200"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center glow-blue">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <span className="text-2xl font-heading text-gradient-blue">
              ESQUNE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 rounded-xl bg-gradient-coral text-white hover:glow-coral transition-all duration-300 font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 glass rounded-2xl mt-2 mb-4"
          >
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 px-4 rounded-xl bg-gradient-coral text-white font-medium"
              >
                İletişim
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

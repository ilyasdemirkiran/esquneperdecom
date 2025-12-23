"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function InstagramBanner() {
  return (
    <motion.a
      href="https://www.instagram.com/esqune_perde/"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="group block w-full"
    >
      <div className="flex items-center justify-center space-x-2 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 py-3 transition-all hover:from-slate-800 hover:via-slate-700 hover:to-slate-800">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Instagram className="h-5 w-5 text-amber-400" />
        </motion.div>
        <p className="text-xs text-gray-200 sm:text-sm">
          Modellerimiz ve Yaptığımız işler için sayfamıza bekleriz
        </p>
      </div>
    </motion.a>
  );
}

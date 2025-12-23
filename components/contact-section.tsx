"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Instagram, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const phoneSchema = z.object({
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .regex(/^[0-9+\s()-]+$/, "Geçerli bir telefon numarası giriniz"),
});

type PhoneFormData = z.infer<typeof phoneSchema>;

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = (data: PhoneFormData) => {
    console.log("Phone number submitted:", data.phone);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-200 rounded-full blur-[120px]" />
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
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="text-slate-900">Bizimle</span>{" "}
            <span className="text-gradient-blue">İletişime Geçin</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Projeleriniz için profesyonel destek almaya hazır mısınız?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-heading text-gradient-coral mb-6">
                İletişim Bilgileri
              </h3>

              {/* Phone */}
              <a
                href="tel:+905343259444"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center shrink-0 group-hover:glow-blue transition-all">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Telefon</div>
                  <div className="text-slate-900 font-medium">+90 534 325 9 444</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-coral flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Adres</div>
                  <div className="text-slate-900">
                    Başakşehir Mah. Süleyman Çelebi Cad Arterium 5.kısım, Istanbul
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/esqune_perde/"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center shrink-0 group-hover:glow-blue transition-all">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Instagram</div>
                  <div className="text-slate-900 font-medium">@esqune_perde</div>
                </div>
              </a>
            </div>

            {/* Call Request Button */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-coral hover:glow-coral transition-all duration-300 text-lg py-6 rounded-xl text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Beni Arayın
                </Button>
              </DialogTrigger>
              <DialogContent className="border-slate-200 bg-white">
                {!isSubmitted ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-slate-900 text-2xl">
                        Sizi Arayalım
                      </DialogTitle>
                      <DialogDescription className="text-slate-600">
                        Telefon numaranızı girin, sizi en geç 1 saat içerisinde arayacağız.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <Input
                          {...register("phone")}
                          placeholder="Telefon numaranız"
                          className="border-slate-300 bg-white text-slate-900"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-blue hover:glow-blue transition-all duration-300 text-white"
                      >
                        Gönder
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center space-y-4 py-8"
                  >
                    <div className="rounded-full bg-gradient-blue p-4">
                      <Check className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-heading text-slate-900">
                        Teşekkürler!
                      </h3>
                      <p className="mt-2 text-slate-600">
                        Sizi en geç 1 saat içerisinde arayacağız.
                      </p>
                    </div>
                  </motion.div>
                )}
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[600px] rounded-3xl overflow-hidden glass"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d298.27991006066804!2d28.787669138063535!3d41.10235043099747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaff01615a245%3A0x708a5e66800519a4!2zRVNRVU5FIFBFUkRFICYgRFVWQVIgS0HEnklESSBCQcWeQUvFnkVIxLBS!5e0!3m2!1str!2str!4v1674147297822!5m2!1str!2str"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Esqune Design Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

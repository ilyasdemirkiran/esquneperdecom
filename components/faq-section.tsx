"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Perde montajı ne kadar sürer?",
    answer: "Standart bir ev için perde montajımız genellikle 2-4 saat arasında tamamlanır. Süre, perde sayısı ve tip modeline göre değişiklik gösterebilir. Zebra perde ve stor perde montajları daha hızlı tamamlanırken, fon perde ve tül perde kombinasyonları biraz daha fazla zaman alabilir."
  },
  {
    question: "Hangi perde modelleri daha ekonomik?",
    answer: "Stor perde ve zebra perde modelleri hem ekonomik hem de modern görünümleriyle tercih edilmektedir. Blackout perde çeşitleri de uygun fiyat seçenekleri sunmaktadır. Tül perde ve fon perde kombinasyonları ise daha klasik ve şık bir görünüm sağlar."
  },
  {
    question: "Duvar kağıdı nasıl temizlenir?",
    answer: "Modern duvar kağıtları genellikle silinebilir özelliktedir. Hafif nemli bir bez ile nazikçe silebilirsiniz. Yoğun lekeler için özel duvar kağıdı temizleyicileri kullanmanızı öneririz. Montaj sonrası size detaylı bakım talimatları veriyoruz."
  },
  {
    question: "Ölçü alma ücretsiz mi?",
    answer: "Evet! Başakşehir, Kayaşehir, Bahçeşehir, Esenyurt ve Avcılar bölgelerinde ücretsiz keşif ve ölçü alma hizmeti sunuyoruz. Uzman ekibimiz evinize gelerek detaylı ölçüm yapar ve size en uygun çözümleri önerir."
  },
  {
    question: "Montaj garantisi var mı?",
    answer: "Tüm perde montajı ve duvar kağıdı uygulama hizmetlerimizde işçilik garantisi veriyoruz. 15+ yıllık tecrübemiz ile kaliteli ve uzun ömürlü montaj garantisi sağlıyoruz. Kullanılan malzemelerin garantisi üretici firma garantisi kapsamındadır."
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer: "Başakşehir merkezli olarak İstanbul'un birçok bölgesine hizmet veriyoruz. Başakşehir, Kayaşehir, Bahçeşehir, Esenyurt, Avcılar, Küçükçekmece ve çevre ilçelerde aktif olarak çalışmaktayız. Diğer bölgeler için lütfen bizimle iletişime geçin."
  },
  {
    question: "Perde yıkama servisi veriyor musunuz?",
    answer: "Evet, profesyonel perde yıkama ve bakım hizmeti sunuyoruz. Perdelerinizi söküp, yıkayıp, ütüleyip tekrar monte ediyoruz. Özellikle fon perde ve tül perde gibi hassas kumaşlar için özel bakım uyguluyoruz."
  },
  {
    question: "Özel tasarım perde yaptırabilir miyim?",
    answer: "Kesinlikle! Özel ölçü ve tasarım perde hizmetimiz mevcuttur. Kumaş seçiminden renk kombinasyonuna kadar size özel çözümler sunuyoruz. Zebra perde, stor perde veya klasik fon perde modellerinde istediğiniz tasarımı gerçekleştirebiliriz."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-slate-700">Sık Sorulan Sorular</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="text-slate-900">Merak</span>{" "}
            <span className="text-gradient-blue">Edilenler</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Perde ve dekorasyon hizmetlerimiz hakkında en çok sorulan sorular
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
              >
                <span className="font-heading text-lg text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-600 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            Başka sorularınız mı var?
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-xl bg-gradient-blue text-white hover:glow-blue transition-all duration-300 font-medium"
          >
            Bizimle İletişime Geçin
          </button>
        </motion.div>
      </div>
    </section>
  );
}

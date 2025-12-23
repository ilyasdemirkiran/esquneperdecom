import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESQUNE Perde & Duvar Kağıdı | Başakşehir İstanbul | Profesyonel Montaj",
  description: "İstanbul Başakşehir'de profesyonel perde montajı, duvar kağıdı uygulama ve dekorasyon hizmetleri. Zebra perde, stor perde, fon perde modelleri. ✓ Ücretsiz Keşif ✓ Garantili İşçilik ✓ 15+ Yıl Tecrübe",
  keywords: [
    "perde",
    "duvar kağıdı",
    "başakşehir",
    "istanbul",
    "zebra perde",
    "stor perde",
    "perde montajı",
    "fon perde",
    "blackout perde",
    "tül perde",
    "duvar çıtalama",
    "dekorasyon",
    "perdeci",
    "kayaşehir",
    "bahçeşehir"
  ],
  authors: [{ name: "ESQUNE Design" }],
  creator: "ESQUNE Design",
  publisher: "ESQUNE Design",
  formatDetection: {
    telephone: true,
  },
  metadataBase: new URL("https://esquneperde.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ESQUNE Perde & Duvar Kağıdı | Başakşehir İstanbul",
    description: "İstanbul'un en kaliteli perde ve dekorasyon hizmetleri. Profesyonel montaj, ücretsiz keşif, garantili işçilik.",
    url: "https://esquneperde.com",
    siteName: "ESQUNE Design",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ESQUNE Perde & Duvar Kağıdı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESQUNE Perde & Duvar Kağıdı",
    description: "İstanbul Başakşehir'de profesyonel perde ve dekorasyon hizmetleri",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console'dan alınacak
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

"use client";

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://esquneperde.com",
    "name": "ESQUNE Perde & Duvar Kağıdı",
    "image": "https://esquneperde.com/og-image.jpg",
    "description": "İstanbul Başakşehir'de profesyonel perde montajı, duvar kağıdı uygulama ve dekorasyon hizmetleri",
    "url": "https://esquneperde.com",
    "telephone": "+905343259444",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Başakşehir Mah. Süleyman Çelebi Cad Arterium 5.kısım",
      "addressLocality": "Başakşehir",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.10235043099747,
      "longitude": 28.787669138063535
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/esqune_perde/"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Başakşehir"
      },
      {
        "@type": "City",
        "name": "Kayaşehir"
      },
      {
        "@type": "City",
        "name": "Bahçeşehir"
      },
      {
        "@type": "City",
        "name": "Esenyurt"
      },
      {
        "@type": "City",
        "name": "Avcılar"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ESQUNE Design",
    "url": "https://esquneperde.com",
    "logo": "https://esquneperde.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-534-325-9444",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.instagram.com/esqune_perde/"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Perde ve Dekorasyon Hizmetleri",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ESQUNE Perde & Duvar Kağıdı"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Perde ve Dekorasyon Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Perde Montajı",
            "description": "Profesyonel perde montaj hizmeti"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Duvar Kağıdı Uygulama",
            "description": "Uzman ekip ile duvar kağıdı uygulama"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zebra Perde",
            "description": "Modern zebra perde modelleri ve montajı"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stor Perde",
            "description": "Stor perde çeşitleri ve kurulumu"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

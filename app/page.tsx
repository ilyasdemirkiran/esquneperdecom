import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ImageGallery } from "@/components/image-gallery";
import { ServicesSection } from "@/components/services-section";
import { FAQSection } from "@/components/faq-section";
import { ServiceAreas } from "@/components/service-areas";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getGalleryImages, getServices, getHeroImage } from "@/lib/contentful";

export default async function Home() {
  const [images, services, heroImage] = await Promise.all([
    getGalleryImages(),
    getServices(),
    getHeroImage(),
  ]);

  // Use heroImage from Contentful, or first gallery image, or fallback to Unsplash
  const displayHeroImage = heroImage || (images[0]?.url ? `https:${images[0].url}` : undefined);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection heroImage={displayHeroImage} />
      <div id="gallery">
        <ImageGallery images={images} />
      </div>
      <div id="services">
        <ServicesSection services={services} />
      </div>
      <ServiceAreas />
      <FAQSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

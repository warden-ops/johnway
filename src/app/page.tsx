import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesSection />
      <ProductsSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

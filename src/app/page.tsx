import { Hero } from "@/components/home/hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { AboutUs } from "@/components/home/about-us";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <CtaSection />
    </>
  );
}

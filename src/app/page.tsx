import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import TechMarquee from "@/components/TechMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-[100px] max-md:px-[10px] max-md:pt-[84px]">
      <HeroSection />
      <TechMarquee />
      <QuoteSection />
      <ServicesAccordion />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

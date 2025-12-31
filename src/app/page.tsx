import BlogSection from "@/components/BlogSection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-10 max-md:px-[10px] max-md:pt-5">
      <HeroSection />
      <ClientLogos />
      <QuoteSection />
      <ProjectsSection />
      <ServicesAccordion />
      <BlogSection />
      <Footer />
    </main>
  );
}

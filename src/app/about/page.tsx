import AboutHero from "@/components/AboutHero";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-0 bg-[#f2f2f4]">
      <AboutHero />
      <StatsSection />
      <MissionSection />
      <TeamSection />
      <ClientLogos /> 
      <Footer />
    </main>
  );
}

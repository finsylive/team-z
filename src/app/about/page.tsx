import type { Metadata } from "next";

import AboutHero from "@/components/AboutHero";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import { breadcrumbLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About TEAMZ: The Studio Behind the Products",
  description:
    "TEAMZ is a product studio that designs, builds, and ships web apps, mobile apps, and AI automation. Meet the team and the products we have shipped.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TEAMZ: The Studio Behind the Products",
    description:
      "Meet TEAMZ, the product studio behind Ments, Exatone, Freso, Cyinov, and Kay Sons.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-0 bg-[#f2f2f4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <AboutHero />
      <StatsSection />
      <MissionSection />
      <TeamSection />
      <ClientLogos />
      <Footer />
    </main>
  );
}

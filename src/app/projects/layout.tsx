import type { Metadata } from "next";

import { breadcrumbLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Work: Web, App & AI Products We've Shipped",
  description:
    "A look at products TEAMZ has designed, built, and shipped, web apps, mobile apps, and AI automation for startups and growing businesses, including Exatone, Freso, Cyinov, and Kay Sons.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Work: Web, App & AI Products We've Shipped",
    description:
      "Real products TEAMZ has built and shipped for startups and growing businesses.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/projects" },
          ]),
        )}
      />
      {children}
    </>
  );
}

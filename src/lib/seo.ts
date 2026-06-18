// Centralized SEO config + structured data (JSON-LD) builders.
// Used for search engines (Google/Bing) and rich results.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://teamz.ments.app";

export const SITE_NAME = "TEAMZ";

export const SITE_TAGLINE = "Web, App & AI Product Studio";

export const SITE_DESCRIPTION =
  "TEAMZ is a product studio that designs, builds, and ships web apps, mobile apps, product design, branding, and AI automation, end to end. We turn ideas into live products for startups and growing businesses.";

export const CONTACT_EMAIL = "teamzments@gmail.com";

// Focused keyword set: high-intent service + outcome terms.
export const SITE_KEYWORDS = [
  "product studio",
  "web development agency",
  "app development company",
  "mobile app development",
  "MVP development",
  "AI automation agency",
  "product design and branding",
  "SaaS development",
  "startup development partner",
  "custom software development",
  "Next.js development",
  "Flutter app development",
  "UI UX design agency",
  "hire a development team",
  "TEAMZ",
];

export const SERVICES = [
  {
    name: "Web Development",
    description:
      "High-performance, SEO-ready websites and web apps built on modern stacks like Next.js and React.",
  },
  {
    name: "App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, built fast with Flutter and React Native.",
  },
  {
    name: "Product Design & Branding",
    description:
      "Product design, UI/UX, and brand identity that make a product look credible and feel effortless to use.",
  },
  {
    name: "AI Automation",
    description:
      "Custom AI workflows and automations that remove repetitive manual work and connect the tools a business already uses.",
  },
];

// Authoritative Q&A: answers common search + AI queries about the studio.
// Doubles as FAQ rich results and as citable content for answer engines.
export const FAQS = [
  {
    question: "What does TEAMZ do?",
    answer:
      "TEAMZ is a product studio that designs, builds, and ships digital products end to end, web apps, mobile apps, product design and branding, and AI automation. One team takes an idea from concept to a live, working product.",
  },
  {
    question: "What services does TEAMZ offer?",
    answer:
      "TEAMZ offers web development, mobile app development, product design and branding, and AI automation. Because the same team handles design, engineering, and AI, there are no handoffs between separate vendors.",
  },
  {
    question: "How much does it cost to build an app or website with TEAMZ?",
    answer:
      "Cost depends on scope. A focused MVP costs less than a multi-feature platform. The biggest cost drivers are the number of features, the platforms you target, and design polish. TEAMZ scopes each project and gives a clear estimate before any work starts.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take roughly 8 to 16 weeks. The timeline depends mostly on how tightly the scope is defined, a clear, focused feature set ships much faster than one that grows during the build.",
  },
  {
    question: "Does TEAMZ work with startups and early-stage founders?",
    answer:
      "Yes. TEAMZ works with startups, founders, and growing businesses, often as their full product team, from first idea and MVP through design, launch, and scaling.",
  },
  {
    question: "What technologies does TEAMZ use?",
    answer:
      "TEAMZ builds with modern, battle-tested tools including Next.js, React, TypeScript, Tailwind CSS, Node.js, and Flutter, plus AI and automation platforms like n8n and Python for custom workflows.",
  },
  {
    question: "Who is behind TEAMZ?",
    answer:
      "TEAMZ is the product and development studio behind Ments (ments.app) and has built products such as Exatone, Freso (Dhaara), Cyinov Consulting, and Kay Sons. It operates as a subsidiary of Ments.",
  },
];

// ---- JSON-LD builders ---------------------------------------------------

export const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "TEAMZ",
  alternateName: "Team-Z",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/teamz-dark-logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  slogan: "Everything your product needs, in one place.",
  parentOrganization: {
    "@type": "Organization",
    name: "Ments",
    url: "https://ments.app",
  },
  sameAs: ["https://ments.app"],
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Product Design",
    "Branding",
    "AI Automation",
    "MVP Development",
    "SaaS",
    "UI/UX Design",
    "Startups",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_EMAIL,
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product studio services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function faqLd(faqs = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

// Combined sitewide graph: Organization + WebSite, linked by @id.
export const siteGraphLd = {
  "@context": "https://schema.org",
  "@graph": [organizationLd, websiteLd],
};

// Helper to render a JSON-LD <script> payload safely.
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}

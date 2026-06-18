import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/lib/data";
import { SITE_URL, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights & Guides for Founders",
  description:
    "Practical, no-hype guides on building and scaling digital products: app costs, MVP timelines, choosing a dev team, AI automation, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights & Guides for Founders | TEAMZ",
    description:
      "Practical, no-hype guides on building and scaling digital products.",
    url: "/blog",
  },
};

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: "TEAMZ Insights",
  description:
    "Practical, no-hype guides on building and scaling digital products.",
  url: `${SITE_URL}/blog`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  blogPost: [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `${SITE_URL}/blog/${p.slug}`,
      image: `${SITE_URL}${p.image}`,
      datePublished: p.date,
      articleSection: p.category,
      author: { "@id": `${SITE_URL}/#organization` },
    })),
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1240px] px-5 pb-24 pt-[140px] max-md:px-4 max-md:pt-[110px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogLd)}
      />
      <div className="mb-14 max-md:mb-10">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
            Insights
          </span>
        </div>
        <h1 className="text-[3.4rem] font-semibold leading-[1.05] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.3rem]">
          Worth a{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            read.
          </span>
        </h1>
        <p className="mt-5 max-w-[560px] text-[1.1rem] leading-[1.6] text-[#666] max-md:text-base">
          Practical guides on building and scaling digital products.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-md:grid-cols-1">
        {[...blogPosts]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#ececec] bg-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.22)]"
          >
            <div className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-[#0a0b0d] p-5">
              {post.imageFit === "contain" ? (
                <>
                  <Image
                    src={post.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="scale-110 object-cover blur-2xl brightness-[0.45]"
                    unoptimized
                  />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  unoptimized
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
              <span className="relative text-[0.95rem] font-bold tracking-[1.5px] text-white/85 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative w-fit rounded-full border border-white/15 bg-black/50 px-3 py-[5px] text-[0.74rem] font-medium text-white backdrop-blur-md">
                {post.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 text-[0.82rem] text-[#999]">
                {post.readTime}
              </div>
              <h2 className="mb-3 text-[1.3rem] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#00A368]">
                {post.title}
              </h2>
              <p className="mb-5 flex-1 leading-[1.55] text-[#666]">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a]">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

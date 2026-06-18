import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import StartProjectButton from "@/components/StartProjectButton";
import { blogPosts } from "@/lib/data";
import { SITE_URL, breadcrumbLd, jsonLdScript } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

// markdown-lite renderer: ## H2, ### H3, - bullets, blank line = paragraph
function Content({ content }: { content: string }) {
  const lines = content.split("\n");
  type Block =
    | { type: "h2" | "h3" | "p"; text: string }
    | { type: "ul"; items: string[] };
  const blocks: Block[] = [];
  let list: string[] | null = null;

  const flush = () => {
    if (list) {
      blocks.push({ type: "ul", items: list });
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "h3", text: line.slice(4) });
    } else if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("- ")) {
      if (!list) list = [];
      list.push(line.slice(2));
    } else {
      flush();
      blocks.push({ type: "p", text: line });
    }
  }
  flush();

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return (
            <h2
              key={i}
              className="mt-6 text-[1.7rem] font-semibold leading-[1.2] tracking-[-0.5px] text-[#1a1a1a] max-md:text-[1.4rem]"
            >
              {b.text}
            </h2>
          );
        if (b.type === "h3")
          return (
            <h3
              key={i}
              className="mt-3 text-[1.2rem] font-semibold tracking-[-0.3px] text-[#1a1a1a]"
            >
              {b.text}
            </h3>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="flex flex-col gap-2.5 pl-1">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#444]">
                  <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#00DD88]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="text-[1.08rem] leading-[1.8] text-[#444]">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const serial = String(
    [...blogPosts]
      .sort((a, b) => b.date.localeCompare(a.date))
      .findIndex((p) => p.slug === slug) + 1,
  ).padStart(2, "0");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.category,
  };

  return (
    <main className="min-h-screen px-5 pb-24 pt-[130px] max-md:px-4 max-md:pt-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        )}
      />

      <article className="mx-auto max-w-[760px]">
        <Link
          href="/blog"
          className="group mb-8 inline-flex items-center gap-2 text-[0.92rem] font-medium text-[#666] transition-colors hover:text-[#1a1a1a]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          All insights
        </Link>

        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
              {serial} &middot; {post.category}
            </span>
          </div>
          <h1 className="mb-5 text-[2.8rem] font-semibold leading-[1.08] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.1rem]">
            {post.title}
          </h1>
          <div className="text-[0.92rem] text-[#888]">{post.readTime}</div>
        </div>

        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-[#0a0b0d]">
          {post.imageFit === "contain" ? (
            <>
              <Image
                src={post.image}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="scale-110 object-cover blur-2xl brightness-[0.45]"
                unoptimized
              />
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-contain"
                priority
                unoptimized
              />
            </>
          ) : (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              className="object-cover"
              priority
              unoptimized
            />
          )}
        </div>

        <div className="mt-2">
          <Content content={post.content} />
        </div>

        {/* Conversion CTA */}
        <div className="mt-16 rounded-[24px] bg-[#0a0b0d] p-10 text-white max-md:p-8">
          <h3 className="text-[1.7rem] font-semibold leading-[1.2] tracking-[-0.5px] max-md:text-[1.4rem]">
            Have something to build?
          </h3>
          <p className="mt-3 max-w-[440px] text-white/65">
            TEAMZ designs, builds, and ships web apps, mobile apps, and AI
            automation, end to end. Let&apos;s talk about your idea.
          </p>
          <StartProjectButton />
        </div>
      </article>
    </main>
  );
}

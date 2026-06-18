"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      id="mini-blogs"
      className="w-full max-w-[1240px] pb-20 mx-auto px-4 scroll-mt-24"
    >
      <div className="mb-10 flex items-end justify-between gap-6 max-md:mb-8">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
              Insights
            </span>
          </div>
          <h2 className="text-[2.9rem] font-semibold leading-[1.1] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.1rem]">
            Worth a{" "}
            <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
              read.
            </span>
          </h2>
          <p className="mt-4 max-w-[460px] text-[1.05rem] leading-[1.6] text-[#666] max-md:text-base">
            Practical guides on building and scaling digital products.
          </p>
        </div>

        <Link
          href="/blog"
          className="group inline-flex shrink-0 items-center gap-2 font-semibold text-[#1a1a1a] transition-colors hover:text-[#00A368] max-md:text-[0.95rem]"
        >
          View all
          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="-mx-4 flex gap-7 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex w-[360px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-[#ececec] bg-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.22)] max-md:w-[82vw]"
          >
            <div className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-[#0a0b0d] p-5">
              {post.imageFit === "contain" ? (
                <>
                  <Image
                    src={post.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(max-width: 768px) 82vw, 360px"
                    className="scale-110 object-cover blur-2xl brightness-[0.45]"
                    unoptimized
                  />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 82vw, 360px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 360px"
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
              <h3 className="mb-3 text-[1.3rem] font-semibold leading-[1.3] tracking-[-0.3px] text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#00A368]">
                {post.title}
              </h3>
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
    </section>
  );
}

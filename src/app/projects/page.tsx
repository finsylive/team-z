"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1240px] px-5 pb-24 pt-[140px] max-md:px-[14px] max-md:pt-[110px]">
      {/* ===== Header ===== */}
      <div className="mb-14 max-md:mb-10">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
            Our Work
          </span>
        </div>
        <h1 className="text-[3.4rem] font-semibold leading-[1.05] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.3rem]">
          Work we&apos;ve{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            shipped.
          </span>
        </h1>
        <p className="mt-5 max-w-[540px] text-[1.1rem] leading-[1.6] text-[#666] max-md:text-base">
          A closer look at the products we&apos;ve designed, built, and launched.
        </p>
      </div>

      {/* ===== Grid ===== */}
      <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col overflow-hidden rounded-[24px] bg-[#0a0b0d] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-left transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[55%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00DD88]/14 blur-[90px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-[0.78rem] font-medium text-white/55">
                        Preview coming soon
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8 max-md:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#00DD88]/30 bg-[#00DD88]/10 px-3 py-[5px] text-[0.74rem] font-medium text-[#00DD88]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-[1.6rem] font-semibold tracking-[-0.5px] text-white max-md:text-[1.35rem]">
                  {project.title}
                </h3>
                <p className="leading-[1.55] text-white/60">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}

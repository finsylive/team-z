"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: import("framer-motion").MotionValue<number>;
}) {
  // Earlier cards shrink more as the ones above stack over them.
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  // The last card needs no trailing scroll runway, otherwise it leaves a big
  // empty gap before the next section.
  const isLast = index === total - 1;

  return (
    <div
      className={`sticky top-[110px] flex items-start justify-center ${
        isLast ? "h-auto" : "h-[125vh]"
      }`}
      style={isLast ? { paddingBottom: index * 26 } : undefined}
    >
      <motion.div
        style={{ scale, top: index * 26 }}
        className="relative aspect-[16/10] w-full max-w-[1100px] overflow-hidden rounded-[28px] bg-[#0a0b0d] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] max-md:aspect-[3/4]"
      >
        {/* Full-bleed scene (device on the left, dark space on the right) */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover object-left"
            priority={index === 0}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute left-[26%] top-1/2 h-[60%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00DD88]/14 blur-[120px]" />
            <div className="absolute left-[8%] top-1/2 -translate-y-1/2 max-md:left-8 max-md:top-10 max-md:translate-y-0">
              <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-[0.8rem] font-medium text-white/55">
                Preview coming soon
              </span>
            </div>
          </div>
        )}

        {/* Readability scrim — darkens the right (desktop) / bottom (mobile) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0b0d] via-[#0a0b0d]/35 to-transparent max-md:bg-gradient-to-t max-md:from-[#0a0b0d] max-md:via-[#0a0b0d]/55 max-md:to-transparent" />

        {/* Text in the negative space */}
        <div className="absolute inset-0 flex items-center justify-end max-md:items-end max-md:justify-start">
          <div className="w-[44%] pr-[6%] text-white max-md:w-full max-md:p-8">
            <h3 className="mb-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-1.5px] text-white max-md:text-[2rem]">
              {project.title}
            </h3>

            <p className="mb-7 max-w-[420px] text-[1.05rem] leading-[1.6] text-white/65 max-md:mb-5 max-md:text-base">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2 max-md:mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#00DD88]/30 bg-[#00DD88]/10 px-3.5 py-1.5 text-[0.78rem] font-medium text-[#00DD88]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.92rem] font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-[#00DD88]"
            >
              View case study
              <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      className="w-full max-w-[1240px] pb-20 mx-auto px-4 scroll-mt-24"
    >
      <div className="mb-12 flex items-end justify-between gap-6 max-md:mb-8 max-md:flex-col max-md:items-start">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
              Our Work
            </span>
          </div>
          <h2 className="text-[2.9rem] font-semibold leading-[1.1] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.1rem]">
            Products we&apos;ve{" "}
            <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
              shipped.
            </span>
          </h2>
        </div>
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-2 font-semibold text-[#1a1a1a] transition-colors hover:text-[#00A368] max-md:text-[0.95rem]"
        >
          View projects
          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div ref={container} className="relative">
        {projects.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

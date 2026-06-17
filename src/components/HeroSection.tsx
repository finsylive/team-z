"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GetStartedDialog from "./GetStartedDialog";

const G = "#00DD88";

export default function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        id="home"
        className="w-full max-w-[1240px] min-h-[620px] rounded-[40px] relative text-white flex overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.4)] mb-5 mx-auto scroll-mt-28 bg-[#0a0b0d] max-md:rounded-[28px] max-md:min-h-[640px]"
      >
        {/* ===== Photo half-bleed — dissolves into the dark hero ===== */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <Image
            src="/images/hero/team-photo.png"
            alt="The TEAMZ team collaborating in the studio"
            fill
            sizes="(max-width: 1024px) 100vw, 760px"
            className="object-cover object-center brightness-[0.8] contrast-[1.05] saturate-[0.95]"
            priority
            unoptimized
          />
          {/* Soft green wash to match the brand */}
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{ backgroundColor: G, opacity: 0.22 }}
          />
          {/* Desktop: fade the left edge into the hero background */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, #0a0b0d 6%, rgba(10,11,13,0.6) 30%, rgba(10,11,13,0.08) 68%, transparent 100%)",
            }}
          />
          {/* Mobile: darken the whole photo so text stays readable */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, #0a0b0d 12%, rgba(10,11,13,0.55) 55%, rgba(10,11,13,0.35))",
            }}
          />
          {/* Blend with the hero's top/bottom edges */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0b0d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0b0d] to-transparent" />
        </div>

        {/* Green ambient glow behind the copy */}
        <div className="pointer-events-none absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] w-[520px] rounded-full bg-[#00DD88]/18 blur-[120px]" />

        {/* ===== Content ===== */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-12 py-16 max-lg:py-20 max-md:px-6 max-md:py-16 flex items-center">
          <div className="flex max-w-[560px] flex-col items-start text-left max-lg:mx-auto max-lg:items-center max-lg:text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[#00DD88] shadow-[0_0_10px_1px_rgba(0,221,136,0.7)]" />
              <span className="text-[1.5rem] font-bold lowercase tracking-[-0.01em]">
                <span className="text-white">team-</span>
                <span className="text-[#00DD88]">z</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-[3.6rem] font-semibold leading-[1.04] mb-6 tracking-[-2px] lg:text-[3.5rem] max-md:text-[2.5rem]"
            >
              We build digital products that{" "}
              <span className="text-[#00DD88]">scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-[1.1rem] leading-[1.6] max-w-[480px] mb-9 font-light max-md:text-base"
            >
              Turning ambitious ideas into products that grow users, drive
              revenue, and scale with demand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 items-center max-md:flex-col max-md:w-full max-md:max-w-[320px]"
            >
              <button
                onClick={() => setIsDialogOpen(true)}
                className="group inline-flex items-center gap-2 bg-[#00DD88] text-[#0a0a0a] px-9 py-[18px] rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_12px_34px_-8px_rgba(0,221,136,0.6)] hover:-translate-y-0.5 max-md:w-full max-md:justify-center"
              >
                Get Started
                <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/[0.06] text-white border border-white/25 px-9 py-[18px] rounded-full font-medium text-base transition-all duration-300 hover:bg-white/[0.12] hover:border-white/50 max-md:w-full max-md:justify-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Get Started Dialog */}
        <GetStartedDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </>
  );
}

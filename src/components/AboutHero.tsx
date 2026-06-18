"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-[160px] max-md:px-4 max-md:pb-10 max-md:pt-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
            About TEAMZ
          </span>
        </div>

        <h1 className="max-w-[920px] text-[4rem] font-semibold leading-[1.04] tracking-[-2px] text-[#1a1a1a] max-md:text-[2.5rem]">
          The team behind the{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            products.
          </span>
        </h1>

        <p className="mt-6 max-w-[640px] text-[1.15rem] leading-[1.6] text-[#555] max-md:text-base">
          TEAMZ is a product studio that designs, builds, and ships web apps,
          mobile apps, and AI automation, end to end. We are the studio behind
          Ments, and the team founders trust to take an idea from concept to a
          live product.
        </p>
      </motion.div>
    </section>
  );
}

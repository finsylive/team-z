"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-[1000px] text-center py-10 pb-16 mx-auto px-4"
    >
      <h2 className="text-[3.6rem] leading-[1.15] font-semibold tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.3rem]">
        Design. Engineering. AI.
        <br />
        <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#1a1a1a]/70">
          Everything under{" "}
        </span>
        <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
          one roof.
        </span>
      </h2>
    </motion.div>
  );
}

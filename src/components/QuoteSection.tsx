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
      className="max-w-[950px] text-left py-5 pb-20 mx-auto px-4"
    >
      <p className="text-[2.2rem] leading-[1.4] text-[#1a1a1a] font-normal tracking-[-0.5px] max-md:text-[1.5rem] max-md:text-center">
        &ldquo;In a world of infinite digital noise, we build the signal. We fuse rigorous engineering with thoughtful design to create products that don't just function&mdash;they matter.&rdquo;
      </p>
    </motion.div>
  );
}

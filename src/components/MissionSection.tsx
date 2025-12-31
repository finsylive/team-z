"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mb-20 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[3rem] font-semibold leading-[1.1] mb-6 tracking-[-1px]"
        >
          Driven by passion, <br/>
          defined by <span className="text-[#666]">excellence</span>.
        </motion.h2>
      </div>
      <div className="flex-1">
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg text-[#555] leading-relaxed mb-6"
        >
          At Teamz, we believe that great products are built at the intersection of technology and human experience.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[#555] leading-relaxed"
        >
          Our mission is simple: to empower businesses with digital tools that not only solve today's problems but anticipate tomorrow's opportunities. We don't just build software; we build the future.
        </motion.p>
      </div>
    </section>
  );
}

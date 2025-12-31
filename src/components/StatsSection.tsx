"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Team Members", value: "4" },
];

export default function StatsSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[30px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="text-[3rem] font-bold text-[#1a1a1a] mb-2">{stat.value}</div>
            <div className="text-[#666] font-medium uppercase tracking-wider text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

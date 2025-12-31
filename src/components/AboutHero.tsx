"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden rounded-b-[50px] mb-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-[900px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[4rem] md:text-[5.5rem] font-bold leading-[1] tracking-tight mb-8"
        >
          WE ARE <span className="text-[#a8f348]">TEAMZ</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
        >
          Redefining the digital landscape through innovation, strategy, and impeccable design.
        </motion.p>
      </div>
    </section>
  );
}

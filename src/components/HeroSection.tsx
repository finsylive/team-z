"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-full max-w-[1200px] h-[700px] rounded-[40px] relative text-white flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] mb-5 mx-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="flex-1 flex flex-col justify-center items-center text-center px-5 -mt-10 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[4.5rem] font-semibold leading-[1.1] mb-6 tracking-[-1.5px] max-w-[900px] md:text-[3.5rem] max-md:text-[2.5rem]"
        >
           CRAFTING NEXT-GEN DIGITAL EXPERIENCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#ccc] text-[1.15rem] leading-[1.6] max-w-[600px] mb-12 font-light"
        >
          We combine innovative design with technical excellence to scale your digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-5 max-md:flex-col max-md:w-full max-md:max-w-[300px]"
        >
          <Link
            href="mailto:teamzments@gmail.com"
            className="bg-[#a8f348] text-[#1a1a1a] px-[42px] py-[18px] rounded-[50px] font-semibold text-base transition-opacity duration-300 hover:opacity-90 max-md:w-full max-md:text-center"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="bg-transparent text-white border border-white/40 px-[42px] py-[18px] rounded-[50px] font-normal text-base transition-all duration-300 hover:bg-white/10 hover:border-white max-md:w-full max-md:text-center"
          >
            How it work
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

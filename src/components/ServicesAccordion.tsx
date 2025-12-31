"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "App Development",
    description:
      "We build high-performance native and cross-platform mobile applications that provide seamless user experiences across all devices.",
  },
  {
    number: "02",
    title: "Product Design and Branding",
    description:
      "From wireframes to high-fidelity prototypes, we design user-centric products that are both beautiful and functional.",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Our engineering team builds robust, scalable web applications using the latest technologies to ensure performance and security.",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "We drive traffic and conversions through targeted SEO, social media campaigns, and data-driven marketing strategies.",
  },
];

export default function ServicesAccordion() {
  return (
    <section id="services" className="w-full max-w-[1200px] pb-20 grid grid-cols-[0.8fr_1.2fr] gap-[50px] mx-auto px-4 max-lg:grid-cols-1 max-lg:gap-[30px]">
      <div className="pt-5">
        <div className="uppercase tracking-[2px] text-[0.9rem] text-[#666] mb-5 font-semibold">
          Our Services
        </div>
        <h2 className="text-[3rem] leading-[1.1] font-semibold mb-[30px] tracking-[-1px] max-md:text-[2rem]">
          We help you to build your business.
        </h2>
        <p className="text-[#666] leading-[1.6] mb-[30px]">
          We combine creative design with technical expertise to deliver
          solutions that drive growth and efficiency.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#a8f348] text-[#1a1a1a] px-[42px] py-[18px] rounded-[50px] font-semibold text-base transition-opacity duration-300 hover:opacity-90"
        >
          View All Services
        </Link>
      </div>

      <div className="flex flex-col gap-[15px]">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[20px] overflow-hidden border border-transparent transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-[#eee] group"
          >
            <div className="p-[25px_30px] flex justify-between items-center cursor-pointer w-full max-md:p-5">
              <div className="flex items-center gap-5">
                <span className="text-[1.2rem] text-[#ccc] font-medium transition-colors duration-300 group-hover:text-[#a8f348]">
                  {service.number}
                </span>
                <span className="text-[1.3rem] font-semibold text-[#1a1a1a]">
                  {service.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex justify-center items-center transition-all duration-300 group-hover:bg-[#a8f348] group-hover:rotate-45">
                <Plus className="w-5 h-5" />
              </div>
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-out px-[30px] text-[#666] leading-[1.6] group-hover:max-h-[200px] group-hover:pb-[30px]">
              {service.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

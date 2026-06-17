"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import GetStartedDialog from "./GetStartedDialog";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, scalable web applications and websites that deliver high performance, strong SEO, and a smooth experience for every visitor.",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "High-performance native and cross-platform mobile applications that deliver seamless user experiences across every device.",
  },
  {
    number: "03",
    title: "Product Design & Branding",
    description:
      "User-centric product design and brand identity that turn ideas into clear, intuitive, and memorable digital experiences.",
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Custom AI workflows and integrations that take over the repetitive, manual work across your operations.",
  },
];

export default function ServicesAccordion() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="w-full max-w-[1240px] pb-20 grid grid-cols-[0.85fr_1.15fr] gap-[60px] mx-auto px-4 max-lg:grid-cols-1 max-lg:gap-[40px] scroll-mt-24"
    >
      {/* ===== Left: intro ===== */}
      <div className="lg:sticky lg:top-32 self-start">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
          <span className="uppercase tracking-[2px] text-[0.8rem] text-[#00A368] font-semibold">
            Our Services
          </span>
        </div>
        <h2 className="text-[2.9rem] leading-[1.1] font-semibold tracking-[-1.5px] text-[#1a1a1a] mb-6 max-md:text-[2.1rem]">
          Everything your product needs,{" "}
          <span className="whitespace-nowrap font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            in one place.
          </span>
        </h2>
        <p className="text-[#666] text-[1.05rem] leading-[1.65] mb-8 max-w-[400px]">
          Skip hiring separate designers, developers, and AI specialists. We
          handle it all, from raw idea to live product.
        </p>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="group inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-[26px] py-[13px] rounded-full font-semibold text-[0.95rem] transition-all duration-300 hover:bg-[#00A368] hover:-translate-y-0.5"
        >
          Start a Project
          <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* ===== Right: accordion ===== */}
      <div
        className="flex flex-col gap-[14px] lg:pt-6"
        onMouseLeave={() => setOpenIndex(null)}
      >
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={service.number}
              onMouseEnter={() => setOpenIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group rounded-[22px] bg-white border transition-all duration-300 ${
                isOpen
                  ? "border-[#00DD88] shadow-[0_20px_46px_-22px_rgba(0,221,136,0.5)]"
                  : "border-[#eaeaea] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-[3px] hover:border-[#d4d4d4] hover:shadow-[0_18px_38px_-20px_rgba(0,0,0,0.2)]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-8 pt-[22px] pb-[16px] text-left max-md:px-6 max-md:py-5"
              >
                <div className="flex items-baseline gap-7 max-md:gap-4">
                  <span
                    className={`text-[0.85rem] font-semibold tabular-nums tracking-[1.5px] transition-colors duration-300 ${
                      isOpen
                        ? "text-[#00A368]"
                        : "text-[#c4c4c4] group-hover:text-[#999]"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`text-[1.45rem] font-semibold tracking-[-0.5px] transition-colors duration-300 max-md:text-[1.15rem] ${
                      isOpen ? "text-[#1a1a1a]" : "text-[#1a1a1a] group-hover:text-[#00A368]"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-transparent bg-[#00DD88] text-[#0a0a0a]"
                      : "border-[#e5e5e5] bg-white text-[#1a1a1a] group-hover:border-[#1a1a1a]"
                  }`}
                >
                  <Plus className="h-[18px] w-[18px]" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mx-8 border-t border-[#f0f0f0] pb-6 pt-[14px] pl-[58px] max-md:mx-6 max-md:pl-0">
                      <p className="text-[#555] text-[1.02rem] leading-[1.55] max-w-[560px]">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <GetStartedDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
}

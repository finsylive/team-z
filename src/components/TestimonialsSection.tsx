"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar?: string; // optional real photo in /public/images/testimonials
  rating?: number;
};

// TODO: paste the exact, verbatim client testimonials into `quote`,
// and update name / role / company / initials (+ optional avatar) per client.
const testimonials: Testimonial[] = [
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Exatone",
    initials: "EX",
    rating: 5,
  },
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Freso (Dhaara)",
    initials: "FR",
    rating: 5,
  },
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Ments",
    initials: "MT",
    rating: 5,
  },
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Cyinov Consulting",
    initials: "CY",
    rating: 5,
  },
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Kaysons Logistics",
    initials: "KL",
    rating: 5,
  },
  {
    quote: "",
    name: "Client name",
    role: "Role",
    company: "Academia Portfolio",
    initials: "AP",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="w-screen scroll-mt-24 bg-gradient-to-b from-[#f4f5f3] via-[#fafbfc] to-[#f4f5f3] py-20 max-md:py-14"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4">
        {/* Header + arrows */}
        <div className="mb-10 flex items-end justify-between gap-6 max-md:mb-8">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
              <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
                Testimonials
              </span>
            </div>
            <h2 className="text-[2.9rem] font-semibold leading-[1.1] tracking-[-1.5px] text-[#1a1a1a] max-md:text-[2.1rem]">
              Trusted by our{" "}
              <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
                clients.
              </span>
            </h2>
          </div>

          <div className="flex shrink-0 gap-2.5 max-md:hidden">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dcdcdc] bg-white text-[#1a1a1a] transition-all duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dcdcdc] bg-white text-[#1a1a1a] transition-all duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={rowRef}
          className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, index) => (
            <div
              key={`${t.company}-${index}`}
              className="flex w-[380px] shrink-0 flex-col rounded-[24px] border border-[#ececec] bg-white p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.18)] max-md:w-[82vw] max-md:p-7"
            >
              <Quote className="mb-4 h-7 w-7 text-[#00DD88]" fill="#00DD88" />

              {t.rating ? (
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-[18px] w-[18px] fill-[#00DD88] text-[#00DD88]"
                    />
                  ))}
                </div>
              ) : null}

              <p className="min-h-[96px] flex-1 text-[1.08rem] leading-[1.6] text-[#333]">
                {t.quote}
              </p>

              <div className="mt-8 flex items-center gap-[14px] border-t border-[#f0f0f0] pt-6">
                {t.avatar ? (
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </span>
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00DD88]/15 text-[0.95rem] font-bold text-[#00A368]">
                    {t.initials}
                  </span>
                )}
                <div>
                  <p className="font-semibold leading-tight text-[#1a1a1a]">
                    {t.name}
                  </p>
                  <p className="text-[0.9rem] text-[#888]">
                    {t.role}
                    {t.role && t.company ? " · " : ""}
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

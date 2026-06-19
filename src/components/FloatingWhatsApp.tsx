"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/seo";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TEAMZ on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.65)] transition-transform duration-200 hover:scale-110 active:scale-95 max-md:bottom-5 max-md:right-5 max-md:h-12 max-md:w-12"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 animate-ping" />
      <FaWhatsapp className="h-7 w-7 max-md:h-6 max-md:w-6" />
    </a>
  );
}

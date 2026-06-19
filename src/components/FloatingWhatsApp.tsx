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
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 active:scale-95 max-md:bottom-5 max-md:right-5 max-md:h-12 max-md:w-12"
    >
      <FaWhatsapp className="h-7 w-7 max-md:h-6 max-md:w-6" />
    </a>
  );
}

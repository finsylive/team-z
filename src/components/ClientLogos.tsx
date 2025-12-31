"use client";

import { Activity, Boxes, Network, Truck } from "lucide-react";

const clients = [
  { name: "Ments", icon: Network },
  { name: "Exatone", icon: Activity },
  { name: "Fresho", icon: Truck },
  { name: "Dhaara", icon: Boxes, isItalic: true },
];

export default function ClientLogos() {
  return (
    <div className="w-full max-w-[1100px] py-[60px] flex justify-between items-center opacity-50 flex-wrap gap-[30px] max-md:justify-center mx-auto">
      {clients.map((client) => (
        <div
          key={client.name}
          className={`flex items-center gap-[10px] font-bold text-2xl text-[#888] grayscale cursor-default transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:text-[#555] ${
            client.isItalic ? "font-serif italic" : ""
          }`}
        >
          {client.icon && <client.icon className="w-6 h-6" />}
          {client.name}
        </div>
      ))}
    </div>
  );
}

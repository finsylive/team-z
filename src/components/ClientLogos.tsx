"use client";

import { Activity, Boxes, Network, Truck } from "lucide-react";

const clients = [
  { name: "Ments", icon: Network },
  { name: "Exatone", icon: Activity },
  { name: "Freso", icon: Truck },
  { name: "Dhaara", icon: Boxes, isItalic: true },
];

// One "half" repeats the brands enough times to overflow any screen width, so
// the marquee never runs out and shows an empty gap. Rendered twice so the
// -50% translate loops perfectly seamlessly.
const half = Array.from({ length: 4 }, () => clients).flat();
const track = [...half, ...half];

export default function ClientLogos() {
  return (
    <div className="w-full max-w-[1240px] py-14 mx-auto px-4">
      <p className="text-center text-[0.8rem] uppercase tracking-[2px] text-[#999] mb-9">
        Products &amp; brands we&apos;ve built
      </p>

      <div className="relative overflow-hidden marquee-mask">
        <div className="flex w-max items-center animate-marquee">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className={`mr-16 flex items-center gap-3 text-2xl font-bold text-[#b4b4b4] whitespace-nowrap transition-colors duration-300 hover:text-[#1a1a1a] ${
                client.isItalic ? "font-serif italic" : ""
              }`}
            >
              <client.icon className="w-6 h-6" strokeWidth={2.2} />
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

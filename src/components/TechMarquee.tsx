"use client";

import {
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const stack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#1a1a1a" },
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Flutter", icon: SiFlutter, color: "#0468D7" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFA000" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
];

// Duplicated so the -50% translate loops seamlessly
const track = [...stack, ...stack];

export default function TechMarquee() {
  return (
    <section className="w-full max-w-[1240px] pt-8 pb-10 mx-auto px-4">
      <p className="text-center text-[0.78rem] uppercase tracking-[2px] text-[#999] mb-6">
        Built with a modern, battle-tested stack
      </p>

      <div className="relative overflow-hidden marquee-mask">
        <div className="flex w-max items-center gap-12 animate-marquee">
          {track.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap text-[#444] transition-opacity duration-300 hover:opacity-70"
            >
              <tech.icon
                className="h-7 w-7 shrink-0"
                style={{ color: tech.color }}
              />
              <span className="text-[1.15rem] font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

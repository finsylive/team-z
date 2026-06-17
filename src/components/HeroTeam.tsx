import Image from "next/image";

const G = "#00DD88";
const doodle = {
  fill: "none",
  stroke: G,
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function HeroTeam() {
  return (
    <div className="relative w-full">
      {/* Green-tinted, darkened photo — feathered so it melts into the hero */}
      <div
        className="relative"
        style={{
          maskImage:
            "radial-gradient(115% 115% at 50% 45%, #000 52%, transparent 86%)",
          WebkitMaskImage:
            "radial-gradient(115% 115% at 50% 45%, #000 52%, transparent 86%)",
        }}
      >
        <Image
          src="/images/hero/team-photo.webp"
          alt="The TEAMZ team collaborating in the studio"
          width={736}
          height={736}
          sizes="(max-width: 1024px) 90vw, 520px"
          className="h-full w-full object-cover brightness-[0.82] contrast-[1.04] saturate-[0.92]"
          priority
          unoptimized
        />
        {/* Soft green wash */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ backgroundColor: G, opacity: 0.28 }}
        />
        {/* Green ambient from the top corner */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(100% 80% at 72% 12%, rgba(0,221,136,0.22), transparent 55%)",
          }}
        />
        {/* Strong vignette so the photo edges fade to near-black and melt into the hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(115% 115% at 50% 42%, transparent 40%, rgba(10,11,13,0.85) 78%, rgba(10,11,13,1) 95%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0b0d] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-[#0a0b0d] to-transparent" />
      </div>

      {/* ===== Floating green doodles ===== */}
      {/* Rocket — top left */}
      <svg viewBox="0 0 60 60" className="absolute -top-9 left-3 h-16 w-16 max-md:h-12 max-md:w-12" {...doodle}>
        <path d="M30 8 C42 16 44 38 36 52 L24 52 C16 38 18 16 30 8 Z" />
        <circle cx="30" cy="29" r="6" />
        <path d="M24 46 L11 58 L21 54" />
        <path d="M36 46 L49 58 L39 54" />
      </svg>

      {/* Lightbulb — top right */}
      <svg viewBox="0 0 60 60" className="absolute -top-8 right-10 h-14 w-14 max-md:h-11 max-md:w-11" {...doodle}>
        <circle cx="30" cy="26" r="17" />
        <path d="M21 46 L39 46 M23 53 L37 53" />
        <path d="M30 2 L30 8 M7 11 L2 6 M53 11 L58 6" />
      </svg>

      {/* Growth arrow — right edge */}
      <svg viewBox="0 0 70 50" className="absolute top-[14%] -right-6 h-12 w-16 max-md:hidden" {...doodle}>
        <polyline points="6,42 26,18 41,30 64,6" />
        <path d="M50 6 L64 6 L64 20" />
      </svg>

      {/* Sparkle — left mid */}
      <svg viewBox="0 0 48 48" className="absolute top-[42%] -left-7 h-12 w-12 max-md:h-9 max-md:w-9">
        <path d="M24 4 C26 18 30 22 44 24 C30 26 26 30 24 44 C22 30 18 26 4 24 C18 22 22 18 24 4 Z" fill={G} />
      </svg>

      {/* Code brackets — bottom left */}
      <svg viewBox="0 0 64 40" className="absolute -bottom-7 left-8 h-12 w-16 max-md:h-9 max-md:w-12" {...doodle}>
        <path d="M22 6 L8 20 L22 34" />
        <path d="M42 6 L56 20 L42 34" />
      </svg>
    </div>
  );
}

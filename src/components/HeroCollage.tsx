type Props = { className?: string };

const G = "#00DD88";

export default function HeroCollage({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="A team collaborating around a table with glowing green product dashboards."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="tz-glow2" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor={G} stopOpacity="0.28" />
          <stop offset="60%" stopColor={G} stopOpacity="0.06" />
          <stop offset="100%" stopColor={G} stopOpacity="0" />
        </radialGradient>
        <filter id="tz-neon" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow */}
      <ellipse cx="300" cy="300" rx="240" ry="220" fill="url(#tz-glow2)" />

      {/* ===== Neon dashboards ===== */}
      <g filter="url(#tz-neon)" fill="none" stroke={G} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        {/* big left panel */}
        <rect x="70" y="208" width="150" height="112" rx="10" fill="rgba(0,221,136,0.07)" />
        <ellipse cx="138" cy="262" rx="26" ry="21" fill={G} />
        <path d="M96 252 l-9 10 9 10" />
        <path d="M198 252 l9 10 -9 10" />
        {/* small list panel */}
        <rect x="232" y="210" width="36" height="48" rx="6" />
        <path d="M240 222 h20 M240 230 h20 M240 238 h14" strokeWidth="2" />
        {/* 3 cards below */}
        <rect x="70" y="330" width="42" height="36" rx="6" />
        <path d="M82 348 l5 5 8 -10" />
        <rect x="120" y="330" width="42" height="36" rx="6" />
        <circle cx="141" cy="344" r="6" />
        <path d="M132 360 q9 -10 18 0" />
        <rect x="170" y="330" width="42" height="36" rx="6" />
        <circle cx="191" cy="344" r="6" />
        <path d="M182 360 q9 -10 18 0" />
        {/* right panels */}
        <g transform="skewY(-10)">
          <rect x="430" y="250" width="74" height="52" rx="8" fill="rgba(0,221,136,0.07)" />
          <ellipse cx="467" cy="276" rx="14" ry="11" fill={G} />
          <rect x="516" y="276" width="74" height="52" rx="8" fill="rgba(0,221,136,0.07)" />
          <ellipse cx="553" cy="302" rx="14" ry="11" fill={G} />
          <rect x="500" y="360" width="74" height="52" rx="8" fill="rgba(0,221,136,0.07)" />
          <ellipse cx="537" cy="386" rx="14" ry="11" fill={G} />
        </g>
      </g>

      {/* ===== Standing lead (center-back) ===== */}
      <g>
        {/* hair back */}
        <path d="M268 168 Q272 120 300 118 Q328 120 332 168 L334 214 Q318 206 300 206 Q282 206 266 214 Z" fill="#241c18" />
        {/* head */}
        <circle cx="300" cy="166" r="22" fill="#e7c4a1" />
        {/* hair top */}
        <path d="M278 158 Q282 138 300 137 Q318 138 322 158 Q312 150 300 150 Q288 150 278 158 Z" fill="#2c221c" />
        {/* torso */}
        <path d="M270 230 Q270 204 300 200 Q330 204 330 230 L332 300 Q316 308 300 308 Q284 308 268 300 Z" fill="#161616" />
        {/* green waist + collar */}
        <path d="M271 296 Q300 306 329 296 L330 304 Q300 314 270 304 Z" fill={G} />
        <path d="M290 202 q10 7 20 0 l-2 6 q-8 5 -16 0 Z" fill={G} />
        {/* arms open */}
        <path d="M272 236 Q236 232 222 250 Q230 258 244 252 Q258 246 274 256 Z" fill="#161616" />
        <path d="M328 236 Q364 232 378 250 Q370 258 356 252 Q342 246 326 256 Z" fill="#161616" />
        <circle cx="220" cy="251" r="8" fill="#e7c4a1" />
        <circle cx="380" cy="251" r="8" fill="#e7c4a1" />
      </g>

      {/* ===== Table ===== */}
      <ellipse cx="300" cy="470" rx="130" ry="16" fill="rgba(0,0,0,0.45)" />
      <rect x="293" y="418" width="14" height="52" rx="5" fill="#cfcfcf" />
      <path d="M168 396 Q168 418 300 418 Q432 418 432 396 L432 406 Q432 430 300 430 Q168 430 168 406 Z" fill="#cdcdcd" />
      <ellipse cx="300" cy="396" rx="132" ry="36" fill="#f1f1f1" />

      {/* devices */}
      <g>
        {/* laptop */}
        <path d="M250 396 L312 396 L317 412 L245 412 Z" fill="#0d0d0d" />
        <path d="M255 372 L307 372 L312 396 L250 396 Z" fill="#0d0d0d" />
        <path d="M260 376 L302 376 L306 392 L256 392 Z" fill={G} />
        {/* phone */}
        <rect x="330" y="372" width="16" height="26" rx="3" fill="#0d0d0d" transform="rotate(18 338 385)" />
        <rect x="333" y="375" width="10" height="20" rx="2" fill={G} transform="rotate(18 338 385)" />
        {/* tablet (held right) */}
        <rect x="356" y="404" width="30" height="22" rx="3" fill="#0d0d0d" transform="rotate(-16 371 415)" />
        <rect x="359" y="407" width="24" height="16" rx="2" fill={G} transform="rotate(-16 371 415)" />
      </g>

      {/* ===== Seated left (woman, back) ===== */}
      <g>
        {/* stool */}
        <rect x="196" y="486" width="8" height="70" fill="#d0d0d0" />
        <ellipse cx="200" cy="556" rx="22" ry="7" fill="#e2e2e2" />
        <ellipse cx="200" cy="486" rx="30" ry="11" fill={G} />
        <ellipse cx="200" cy="481" rx="30" ry="11" fill="#ededed" />
        {/* body */}
        <circle cx="206" cy="356" r="18" fill="#e7c4a1" />
        <path d="M200 344 Q196 320 206 318 Q214 322 214 342 Z" fill="#241c18" />
        <path d="M178 470 Q176 392 206 384 Q236 392 234 442 L234 470 Q210 482 178 470 Z" fill="#161616" />
        <path d="M178 452 q28 12 56 0 l0 9 q-28 12 -56 0 Z" fill={G} opacity="0.9" />
        {/* arms to laptop */}
        <path d="M216 398 Q256 404 268 420 L262 430 Q236 416 214 420 Z" fill="#161616" />
        {/* leg + heel */}
        <path d="M214 470 Q236 510 226 552" stroke="#e7c4a1" strokeWidth="13" fill="none" strokeLinecap="round" />
        <path d="M222 552 l16 6 -2 8 -18 -4 Z" fill={G} />
      </g>

      {/* ===== Seated right (man, back) ===== */}
      <g>
        <rect x="396" y="486" width="8" height="70" fill="#d0d0d0" />
        <ellipse cx="400" cy="556" rx="22" ry="7" fill="#e2e2e2" />
        <ellipse cx="400" cy="486" rx="30" ry="11" fill={G} />
        <ellipse cx="400" cy="481" rx="30" ry="11" fill="#ededed" />
        {/* body */}
        <path d="M388 152 Z" />
        <circle cx="396" cy="356" r="18" fill="#e7c4a1" />
        <path d="M380 348 Q380 332 396 332 Q412 332 412 348 Q404 342 396 342 Q388 342 380 348 Z" fill="#241c18" />
        <path d="M366 470 Q364 392 396 384 Q428 392 426 442 L426 470 Q402 482 366 470 Z" fill="#161616" />
        <path d="M366 452 q30 12 60 0 l0 9 q-30 12 -60 0 Z" fill={G} opacity="0.9" />
        {/* arm holding tablet */}
        <path d="M380 404 Q352 412 372 424 L378 416 Q388 410 388 408 Z" fill="#161616" />
        {/* legs */}
        <path d="M388 470 Q380 514 392 552" stroke="#161616" strokeWidth="15" fill="none" strokeLinecap="round" />
      </g>

      {/* accent dots */}
      <circle cx="120" cy="170" r="3.5" fill={G} />
      <circle cx="470" cy="170" r="3" fill={G} />
    </svg>
  );
}

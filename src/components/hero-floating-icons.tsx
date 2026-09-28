import { Component, Layers, PenTool } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type OrbitIcon = {
  id: string;
  label: string;
  /** math degrees: 0 = right, 90 = top, 180 = left */
  angle: number;
  /** % of cluster size — ring radius */
  ring: number;
  size?: "sm" | "md";
  duration: string;
  node: ReactNode;
};

function IconShell({
  children,
  className = "bg-white",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`grid size-full place-items-center rounded-full border border-black/[0.06] shadow-[0_8px_22px_-12px_rgba(15,23,42,0.18),0_2px_6px_-2px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {children}
    </span>
  );
}

const HtmlIcon = () => (
  <IconShell className="bg-[#E44D26]">
    <span className="font-mono text-[8px] font-black leading-none tracking-tight text-white sm:text-[9px]">
      HTML
    </span>
  </IconShell>
);

const CssIcon = () => (
  <IconShell className="bg-[#264DE4]">
    <span className="font-mono text-[8px] font-black leading-none tracking-tight text-white sm:text-[9px]">
      CSS
    </span>
  </IconShell>
);

const JsIcon = () => (
  <IconShell className="bg-[#F7DF1E]">
    <span className="font-mono text-[10px] font-black leading-none tracking-tight text-[#323330] sm:text-[11px]">
      JS
    </span>
  </IconShell>
);

const ReactIcon = () => (
  <IconShell className="bg-[#0B1220]">
    <svg viewBox="0 0 24 24" className="size-[62%] fill-[#61DAFB]" aria-hidden>
      <circle cx="12" cy="12" r="2.1" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.35">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  </IconShell>
);

const NextIcon = () => (
  <IconShell className="bg-[#0A0A0A]">
    <svg viewBox="0 0 24 24" className="size-[58%] fill-white" aria-hidden>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.2 14.8h-1.7l-5.1-7.2v7.2H7.8V7.2h1.8l5 7.1V7.2h1.6z" />
    </svg>
  </IconShell>
);

const UiUxIcon = () => (
  <IconShell className="bg-[linear-gradient(135deg,#2F6BFD_0%,#6DAFFE_100%)]">
    <Layers className="size-[48%] text-white" strokeWidth={2.2} />
  </IconShell>
);

const ComponentIcon = () => (
  <IconShell>
    <Component className="size-[48%] text-[#2F6BFD]" strokeWidth={2.1} />
  </IconShell>
);

const PrototypingIcon = () => (
  <IconShell className="bg-[#EDF6FF]">
    <PenTool className="size-[46%] text-[#2F6BFD]" strokeWidth={2.1} />
  </IconShell>
);

/** Match SVG ring radii so icons sit on the drawn circles */
const RING = { outer: 36, mid: 26, inner: 16 } as const;
const OUTER_DURATION = "42s";
const MID_DURATION = "56s";
const INNER_DURATION = "70s";

const LEFT_ICONS: OrbitIcon[] = [
  { id: "html", label: "HTML", angle: 30, ring: RING.outer, size: "md", duration: OUTER_DURATION, node: <HtmlIcon /> },
  { id: "react", label: "React", angle: 150, ring: RING.outer, size: "md", duration: OUTER_DURATION, node: <ReactIcon /> },
  { id: "next", label: "Next.js", angle: 270, ring: RING.outer, size: "sm", duration: OUTER_DURATION, node: <NextIcon /> },
  { id: "css", label: "CSS", angle: 90, ring: RING.mid, size: "sm", duration: MID_DURATION, node: <CssIcon /> },
  { id: "uiux", label: "UI UX", angle: 210, ring: RING.mid, size: "md", duration: MID_DURATION, node: <UiUxIcon /> },
  { id: "js", label: "JavaScript", angle: 330, ring: RING.mid, size: "sm", duration: MID_DURATION, node: <JsIcon /> },
  { id: "component", label: "Component", angle: 60, ring: RING.inner, size: "sm", duration: INNER_DURATION, node: <ComponentIcon /> },
  { id: "proto", label: "Prototyping", angle: 240, ring: RING.inner, size: "sm", duration: INNER_DURATION, node: <PrototypingIcon /> },
];

const SIZE_CLASS = {
  sm: "size-9 sm:size-10 lg:size-11",
  md: "size-10 sm:size-11 lg:size-12",
} as const;

const HUB_Y = 52;
const CX = 50;

function ringDirection(ring: number): "cw" | "ccw" {
  if (ring >= RING.outer) return "cw";
  if (ring >= RING.mid) return "ccw";
  return "cw";
}

/** Short radial tick marks around a ring (dial-style) */
function RingTicks({
  radius,
  count,
  length = 1.4,
  className = "text-ink/25",
}: {
  radius: number;
  count: number;
  length?: number;
  className?: string;
}) {
  const ticks = Array.from({ length: count }, (_, i) => {
    const deg = (i * 360) / count;
    const rad = (deg * Math.PI) / 180;
    // math angle: 0 = right, convert so 0 starts at top-ish for even look — keep standard
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x1 = CX + (radius - length) * cos;
    const y1 = HUB_Y - (radius - length) * sin;
    const x2 = CX + (radius + length * 0.35) * cos;
    const y2 = HUB_Y - (radius + length * 0.35) * sin;
    return { x1, y1, x2, y2, key: `${radius}-${i}` };
  });

  return (
    <g className={className}>
      {ticks.map((t) => (
        <line
          key={t.key}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="currentColor"
          strokeWidth="0.28"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

function OrbitRings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
    >
      <circle
        cx={CX}
        cy={HUB_Y}
        r={RING.inner}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        className="text-ink/10"
      />
      <circle
        cx={CX}
        cy={HUB_Y}
        r={RING.mid}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        className="text-ink/12"
      />
      <circle
        cx={CX}
        cy={HUB_Y}
        r={RING.outer}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        className="text-ink/14"
      />

      {/* Dial ticks instead of dots */}
      <g className="hero-orbit-ring-spin-cw">
        <RingTicks radius={RING.outer} count={12} length={1.6} className="text-ink/22" />
      </g>
      <g className="hero-orbit-ring-spin-ccw">
        <RingTicks radius={RING.mid} count={8} length={1.2} className="text-ink/18" />
      </g>
    </svg>
  );
}

function OrbitCluster({
  icons,
  label,
}: {
  icons: OrbitIcon[];
  label: string;
}) {
  return (
    <div
      className="relative size-[420px] -translate-x-[35%] sm:size-[520px] lg:size-[600px]"
      style={{
        maskImage: "linear-gradient(to bottom, black 74%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 74%, transparent 100%)",
      }}
    >
      <OrbitRings />

      <div
        className="absolute left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2"
        style={{ top: `${HUB_Y}%` }}
      >
        <span
          title="Figma"
          className="grid size-14 place-items-center rounded-full border border-black/[0.06] bg-white shadow-[0_8px_24px_-10px_rgba(15,23,42,0.18)] sm:size-16 lg:size-[4.25rem]"
        >
          <span className="sr-only">Figma</span>
          {/* Classic 5-shape Figma mark — taller viewBox so it stays recognizable */}
          <svg viewBox="0 0 12 18" className="h-[62%] w-auto" aria-hidden>
            <path fill="#F24E1E" d="M0 3a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" />
            <path fill="#FF7262" d="M6 0h3a3 3 0 1 1 0 6H6z" />
            <path fill="#A259FF" d="M0 9a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" />
            <circle fill="#1ABCFE" cx="9" cy="9" r="3" />
            <path fill="#0ACF83" d="M0 15a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0z" />
          </svg>
        </span>
      </div>

      <ul className="absolute inset-0 z-[2] list-none" aria-label={label}>
        {icons.map((icon) => {
          const dir = ringDirection(icon.ring);
          const armClass = dir === "cw" ? "hero-orbit-arm-cw" : "hero-orbit-arm-ccw";
          const faceClass = dir === "cw" ? "hero-orbit-face-ccw" : "hero-orbit-face-cw";

          return (
            <li
              key={icon.id}
              title={icon.label}
              className={`absolute left-1/2 ${armClass}`}
              style={
                {
                  top: `${HUB_Y}%`,
                  width: `${icon.ring}%`,
                  transformOrigin: "left center",
                  "--orbit-start": `${-icon.angle}deg`,
                  animationDuration: icon.duration,
                } as CSSProperties
              }
            >
              <span
                className={`hero-orbit-counter absolute right-0 top-1/2 ${SIZE_CLASS[icon.size ?? "md"]} ${faceClass}`}
                style={
                  {
                    "--orbit-start": `${-icon.angle}deg`,
                    animationDuration: icon.duration,
                  } as CSSProperties
                }
              >
                <span className="pointer-events-auto block size-full">
                  <span className="sr-only">{icon.label}</span>
                  {icon.node}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function HeroFloatingIcons() {
  return (
    <div className="pointer-events-none absolute left-0 top-2 z-[1] hidden overflow-hidden md:block lg:top-3">
      <OrbitCluster icons={LEFT_ICONS} label="Design and engineering skills" />
    </div>
  );
}

import { Component, Layers, PenTool, Sparkles } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type OrbitIcon = {
  id: string;
  label: string;
  /** math degrees: 0 = right, 90 = top, 180 = left */
  angle: number;
  /** % of cluster size */
  ring: number;
  size?: "sm" | "md";
  /** full orbit duration */
  duration: string;
  delay: string;
  /** spin direction */
  dir: "cw" | "ccw";
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
      className={`grid size-full place-items-center rounded-full border border-black/[0.06] shadow-[0_10px_28px_-10px_rgba(47,107,253,0.35),0_2px_8px_-2px_rgba(15,23,42,0.1)] ${className}`}
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

const FigmaIcon = () => (
  <IconShell>
    <svg viewBox="0 0 24 24" className="size-[58%]" aria-hidden>
      <path fill="#F24E1E" d="M8.5 2.5h3.5v4.75H8.5a2.375 2.375 0 1 1 0-4.75z" />
      <path fill="#FF7262" d="M12 2.5h3.5a2.375 2.375 0 1 1 0 4.75H12V2.5z" />
      <path fill="#A259FF" d="M8.5 9.625H12v4.75H8.5a2.375 2.375 0 1 1 0-4.75z" />
      <path fill="#1ABCFE" d="M12 9.625h3.5a2.375 2.375 0 1 1 0 4.75H12v-4.75z" />
      <path fill="#0ACF83" d="M8.5 16.75H12V21.5H8.5a2.375 2.375 0 1 1 0-4.75z" />
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

const LEFT_ICONS: OrbitIcon[] = [
  { id: "html", label: "HTML", angle: 130, ring: 42, size: "md", duration: "52s", delay: "0s", dir: "cw", node: <HtmlIcon /> },
  { id: "css", label: "CSS", angle: 75, ring: 42, size: "sm", duration: "68s", delay: "-12s", dir: "ccw", node: <CssIcon /> },
  { id: "figma", label: "Figma", angle: 105, ring: 31, size: "md", duration: "44s", delay: "-6s", dir: "cw", node: <FigmaIcon /> },
  { id: "js", label: "JavaScript", angle: 45, ring: 31, size: "sm", duration: "76s", delay: "-20s", dir: "ccw", node: <JsIcon /> },
  { id: "component", label: "Component", angle: 160, ring: 31, size: "sm", duration: "58s", delay: "-9s", dir: "cw", node: <ComponentIcon /> },
];

const RIGHT_ICONS: OrbitIcon[] = [
  { id: "react", label: "React", angle: 50, ring: 42, size: "md", duration: "48s", delay: "-4s", dir: "ccw", node: <ReactIcon /> },
  { id: "next", label: "Next.js", angle: 105, ring: 42, size: "sm", duration: "72s", delay: "-18s", dir: "cw", node: <NextIcon /> },
  { id: "uiux", label: "UI UX", angle: 80, ring: 31, size: "md", duration: "56s", delay: "-10s", dir: "ccw", node: <UiUxIcon /> },
  { id: "proto", label: "Prototyping", angle: 25, ring: 31, size: "sm", duration: "64s", delay: "-15s", dir: "cw", node: <PrototypingIcon /> },
];

const SIZE_CLASS = {
  sm: "size-10 sm:size-11 lg:size-12",
  md: "size-11 sm:size-12 lg:size-[3.25rem]",
} as const;

const HUB_Y = 72;

function OrbitCluster({
  icons,
  label,
  align,
}: {
  icons: OrbitIcon[];
  label: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`relative size-[360px] sm:size-[440px] lg:size-[520px] ${
        align === "left" ? "-ml-24 sm:-ml-32 lg:-ml-40" : "-mr-24 sm:-mr-32 lg:-mr-40"
      }`}
      style={{
        maskImage: "linear-gradient(to bottom, black 68%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 68%, transparent 100%)",
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-[color-mix(in_oklab,var(--line)_90%,#2F6BFD)]"
      >
        <circle cx="50" cy={HUB_Y} r="18" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.55" />
        <circle cx="50" cy={HUB_Y} r="28" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
        <circle cx="50" cy={HUB_Y} r="38" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.38" />
      </svg>

      <div
        className="absolute left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
        style={{ top: `${HUB_Y}%` }}
      >
        <span className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#2F6BFD_0%,#6DAFFE_100%)] shadow-[var(--glow-brand)] sm:size-12 lg:size-14">
          <Sparkles className="size-5 text-white sm:size-6" strokeWidth={2} />
        </span>
      </div>

      <ul className="absolute inset-0 list-none" aria-label={label}>
        {icons.map((icon) => (
          <li
            key={icon.id}
            title={icon.label}
            className={`absolute left-1/2 ${
              icon.dir === "cw" ? "hero-orbit-arm-cw" : "hero-orbit-arm-ccw"
            }`}
            style={
              {
                top: `${HUB_Y}%`,
                width: `${icon.ring}%`,
                transformOrigin: "left center",
                "--orbit-start": `${-icon.angle}deg`,
                animationDuration: icon.duration,
                animationDelay: icon.delay,
              } as CSSProperties
            }
          >
            <span
              className={`hero-orbit-counter absolute right-0 top-1/2 ${SIZE_CLASS[icon.size ?? "md"]} ${
                icon.dir === "cw" ? "hero-orbit-face-ccw" : "hero-orbit-face-cw"
              }`}
              style={{
                animationDuration: icon.duration,
                animationDelay: icon.delay,
              }}
            >
              <span className="pointer-events-auto block size-full">
                <span className="sr-only">{icon.label}</span>
                {icon.node}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HeroFloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] mx-auto hidden w-full max-w-[1200px] justify-between overflow-visible px-0 md:flex">
      <OrbitCluster icons={LEFT_ICONS} label="Core web skills" align="left" />
      <OrbitCluster icons={RIGHT_ICONS} label="Product design skills" align="right" />
    </div>
  );
}

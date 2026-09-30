import { Component, PenTool } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type SideIcon = {
  id: string;
  label: string;
  side: "left" | "right";
  /** % from top of hero field */
  top: string;
  /** inset from that side — stay in the outer gutter, never over copy */
  inset: string;
  size?: "sm" | "md";
  duration: string;
  delay: string;
  drift: "a" | "b" | "c";
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
      className={`grid size-full place-items-center rounded-full border border-black/[0.06] shadow-[0_10px_28px_-12px_rgba(15,23,42,0.22),0_2px_8px_-2px_rgba(15,23,42,0.1)] transition-transform duration-300 hover:scale-110 ${className}`}
    >
      {children}
    </span>
  );
}

const HtmlIcon = () => (
  <IconShell className="bg-[#E44D26]">
    <span className="font-mono text-[14px] font-black leading-none tracking-tight text-white sm:text-[14px]">
      HTML
    </span>
  </IconShell>
);

const CssIcon = () => (
  <IconShell className="bg-[#264DE4]">
    <span className="font-mono text-[14px] font-black leading-none tracking-tight text-white sm:text-[14px]">
      CSS
    </span>
  </IconShell>
);

const JsIcon = () => (
  <IconShell className="bg-[#F7DF1E]">
    <span className="font-mono text-[14px] font-black leading-none tracking-tight text-[#323330] sm:text-[14px]">
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

const FigmaIcon = () => (
  <IconShell>
    <svg viewBox="0 0 12 18" className="h-[58%] w-auto" aria-hidden>
      <path fill="#F24E1E" d="M0 3a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" />
      <path fill="#FF7262" d="M6 0h3a3 3 0 1 1 0 6H6z" />
      <path fill="#A259FF" d="M0 9a3 3 0 0 1 3-3h3v6H3a3 3 0 0 1-3-3z" />
      <circle fill="#1ABCFE" cx="9" cy="9" r="3" />
      <path fill="#0ACF83" d="M0 15a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0z" />
    </svg>
  </IconShell>
);

const ComponentIcon = () => (
  <IconShell>
    <Component className="size-[48%] text-navy" strokeWidth={2.1} />
  </IconShell>
);

const PrototypingIcon = () => (
  <IconShell className="bg-soft">
    <PenTool className="size-[46%] text-navy" strokeWidth={2.1} />
  </IconShell>
);

const SIZE_CLASS = {
  sm: "size-9 sm:size-10",
  md: "size-10 sm:size-11",
} as const;

const DRIFT_CLASS = {
  a: "hero-icon-drift",
  b: "hero-icon-drift-alt",
  c: "hero-icon-drift-soft",
} as const;

/**
 * Side gutters only — never the center content column (name / CTAs / portrait).
 * Soft vertical cascade on left + right feels circular without crossing the copy.
 */
const ICONS: SideIcon[] = [
  // Left gutter
  {
    id: "html",
    label: "HTML",
    side: "left",
    top: "10%",
    inset: "4%",
    size: "md",
    duration: "7s",
    delay: "0s",
    drift: "a",
    node: <HtmlIcon />,
  },
  {
    id: "css",
    label: "CSS",
    side: "left",
    top: "28%",
    inset: "11%",
    size: "sm",
    duration: "8.2s",
    delay: "0.5s",
    drift: "b",
    node: <CssIcon />,
  },
  {
    id: "js",
    label: "JavaScript",
    side: "left",
    top: "48%",
    inset: "5%",
    size: "md",
    duration: "7.6s",
    delay: "1.1s",
    drift: "c",
    node: <JsIcon />,
  },
  {
    id: "react",
    label: "React",
    side: "left",
    top: "70%",
    inset: "12%",
    size: "sm",
    duration: "8.8s",
    delay: "0.25s",
    drift: "a",
    node: <ReactIcon />,
  },
  // Right gutter
  {
    id: "figma",
    label: "Figma",
    side: "right",
    top: "12%",
    inset: "5%",
    size: "md",
    duration: "7.4s",
    delay: "0.35s",
    drift: "b",
    node: <FigmaIcon />,
  },
  {
    id: "component",
    label: "Component",
    side: "right",
    top: "34%",
    inset: "12%",
    size: "sm",
    duration: "8.4s",
    delay: "0.9s",
    drift: "c",
    node: <ComponentIcon />,
  },
  {
    id: "proto",
    label: "Prototyping",
    side: "right",
    top: "58%",
    inset: "4%",
    size: "md",
    duration: "7.8s",
    delay: "1.4s",
    drift: "a",
    node: <PrototypingIcon />,
  },
];

export function HeroFloatingIcons() {
  return (
    <ul
      aria-label="Design and engineering skills"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-16 z-[1] hidden list-none opacity-[0.78] md:block"
    >
      {ICONS.map((icon) => (
        <li
          key={icon.id}
          title={icon.label}
          className={`absolute ${SIZE_CLASS[icon.size ?? "md"]}`}
          style={
            {
              top: icon.top,
              ...(icon.side === "left"
                ? { left: icon.inset }
                : { right: icon.inset }),
            } as CSSProperties
          }
        >
          <span
            className={`pointer-events-auto block size-full ${DRIFT_CLASS[icon.drift]}`}
            style={
              {
                animationDuration: icon.duration,
                animationDelay: icon.delay,
              } as CSSProperties
            }
          >
            <span className="sr-only">{icon.label}</span>
            {icon.node}
          </span>
        </li>
      ))}
    </ul>
  );
}

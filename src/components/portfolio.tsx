import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactMethods, projects, services, processSteps, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const pageWrap = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });
  useEffect(() => setOpen(false), [pathname, hash]);
  const nav = [
    { label: "Work", to: "/" as const },
    { label: "About", to: "/about" as const },
    { label: "Services", to: "/services" as const },
    { label: "Insights", to: "/insights" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 shadow-[0_1px_0_color-mix(in_oklab,var(--primary)_12%,transparent)] backdrop-blur-xl">
      <div className={`${pageWrap} grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4`}>
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Ahmed Ali — Home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink font-mono text-[14px] font-bold text-white shadow-[var(--glow-brand)] transition-transform group-hover:scale-105">
            AA
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-[14px] font-semibold leading-none text-ink">
              Ahmed Ali
            </span>
            <span className="mt-1 hidden font-mono text-[14px] uppercase tracking-[0.12em] text-ink-soft sm:block">
              UI/UX Engineer
            </span>
          </span>
        </Link>
        <nav className="hidden h-full items-center gap-1 md:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const isWork = item.label === "Work";
            const isContact = item.label === "Contact";
            const workActive =
              hash === "selected-work" ||
              hash === "#selected-work" ||
              pathname.startsWith("/work/");
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(isWork ? { hash: "selected-work" as const } : {})}
                {...(isWork || isContact
                  ? {}
                  : {
                      activeProps: {
                        className: "bg-soft text-navy shadow-sm",
                      },
                    })}
                className={cn(
                  "relative flex h-9 items-center rounded-full px-3.5 font-mono text-[14px] uppercase tracking-[0.08em] transition-all",
                  isContact
                    ? "bg-ink font-semibold text-white shadow-[var(--glow-brand)] hover:bg-ink-hover"
                    : "text-ink-soft hover:bg-soft hover:text-navy",
                  isWork && workActive && "bg-soft text-navy shadow-sm",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="bg-ink text-white hover:bg-ink-hover hover:text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          className={`${pageWrap} border-t border-line bg-paper py-3 md:hidden`}
          aria-label="Mobile navigation"
        >
          {nav.map((item, index) => {
            const isWork = item.label === "Work";
            const workActive =
              hash === "selected-work" ||
              hash === "#selected-work" ||
              pathname.startsWith("/work/");
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(isWork ? { hash: "selected-work" as const } : {})}
                {...(isWork ? {} : { activeProps: { className: "text-navy" } })}
                className={cn(
                  "grid grid-cols-[2rem_1fr_auto] items-center border-b border-line py-3.5 font-mono text-sm uppercase last:border-0",
                  isWork && workActive && "text-navy",
                )}
              >
                <span className="text-[14px] text-ink-soft">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-footer text-white">
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-[linear-gradient(90deg,var(--primary)_0%,var(--primary-light)_45%,var(--coral)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--coral)_22%,transparent),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)] blur-2xl"
      />
      <div className={`${pageWrap} relative py-12 sm:py-14`}>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <p className="font-sans text-[15px] font-semibold text-white">Ahmed Ali</p>
            <p className="mt-1.5 font-mono text-[14px] uppercase tracking-[0.16em] text-white/55">
              UI/UX Engineer · Product Designer
              <span className="hidden sm:inline"> — Karachi, Pakistan</span>
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[14px] uppercase tracking-[0.14em] text-white/55 sm:justify-start">
            <Link to="/" hash="selected-work" className="transition-colors hover:text-white">
              Work
            </Link>
            <Link to="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link to="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link to="/insights" className="transition-colors hover:text-white">
              Insights
            </Link>
            <Link
              to="/contact"
              className="w-full text-center text-coral transition-colors hover:text-coral/80 sm:w-auto sm:text-left"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[14px] text-white/40 sm:flex-row sm:items-center">
          <p>© 2026 Ahmed Ali. All rights reserved.</p>
          <p className="hidden sm:block">Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,color-mix(in_oklab,var(--amber)_8%,transparent),transparent_55%)]"
      />
      <div className={`${pageWrap} relative py-16 sm:py-24`}>
        <p className="eyebrow">
          {index} / {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[18ch] font-serif text-4xl leading-[1.04] tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-[62ch] text-base leading-7 text-ink-soft">{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="border-b border-line pb-6">
      <p className="eyebrow">{index}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 block h-1 w-12 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-light))]"
      />
      {text && <p className="mt-3 max-w-[52ch] text-sm leading-6 text-ink-soft">{text}</p>}
    </div>
  );
}

function BeforeAfterPair({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (!project.beforeSrc || !project.afterSrc) return null;
  const frames = [
    ["Before", project.beforeSrc, project.beforeAlt ?? "Before"],
    ["After", project.afterSrc, project.afterAlt ?? "After"],
  ] as const;

  return (
    <div
      className={cn(
        "grid h-full grid-cols-2 bg-paper-2",
        compact ? "gap-2.5 p-2.5 sm:gap-3 sm:p-3" : "gap-4 p-4 sm:gap-5 sm:p-5",
      )}
    >
      {frames.map(([label, src, alt]) => (
        <figure key={label} className={cn("flex min-w-0 flex-col", compact && "h-full")}>
          <figcaption
            className={cn(
              "mb-2 font-mono uppercase tracking-[0.14em]",
              compact ? "text-[14px]" : "text-[14px]",
              label === "After" ? "text-coral" : "text-ink-soft",
            )}
          >
            {label}
          </figcaption>
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-paper shadow-sm",
              compact && "min-h-0 flex-1",
              label === "After" ? "border-coral/45" : "border-line",
            )}
          >
            <img
              src={src}
              alt={alt}
              width={800}
              height={1600}
              loading="lazy"
              className={
                compact
                  ? "absolute inset-0 h-full w-full object-cover object-top"
                  : "block h-auto w-full"
              }
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const comparison = Boolean(project.beforeSrc && project.afterSrc);
  const src = large ? project.imageSrc : (project.screensSrc ?? projectCoverSrc(project));
  const alt = large ? project.imageAlt : (project.screensAlt ?? project.imageAlt);
  const canLightbox = !(comparison && large);

  return (
    <>
      <div className="project-visual relative overflow-hidden rounded-2xl border border-visual-line bg-paper">
        {comparison && large ? (
          <BeforeAfterPair project={project} />
        ) : (
          <>
            {canLightbox ? (
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="group/visual relative block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                aria-label={`View full ${project.name} image`}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "h-auto w-full transition-transform duration-500 group-hover/visual:scale-[1.01]",
                    large && "aspect-[16/9] object-cover object-top",
                  )}
                  style={{ imageRendering: "auto" }}
                />
              </button>
            ) : (
              <img
                src={src}
                alt={alt}
                width={1600}
                height={large ? 900 : 1200}
                loading="lazy"
                className="block h-auto w-full"
              />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/65 via-ink/25 to-transparent px-4 pb-3 pt-12 font-mono text-[14px] uppercase tracking-[0.14em] text-paper sm:px-6">
              <span>{project.name}</span>
              <span>
                {project.number} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </>
        )}
      </div>

      {canLightbox && (
        <ImageLightbox
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          src={src}
          alt={alt}
          title={project.name}
        />
      )}
    </>
  );
}

function ArchiveArrow() {
  return (
    <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-ink bg-ink text-white transition-colors group-hover:bg-ink-hover">
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

function ProjectCover({ project, featured = false }: { project: Project; featured?: boolean }) {
  const comparison = Boolean(project.beforeSrc && project.afterSrc);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-paper-2 shadow-[var(--shadow-soft)]",
        comparison
          ? featured
            ? "aspect-[5/4]"
            : "aspect-square"
          : featured
            ? "aspect-[16/10]"
            : "aspect-[4/3]",
      )}
    >
      {comparison ? (
        <BeforeAfterPair project={project} compact />
      ) : (
        <img
          src={projectCoverSrc(project)}
          alt={projectCoverAlt(project)}
          width={1600}
          height={featured ? 1000 : 1200}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
    </div>
  );
}

function ProjectCopy({ project, featured = false }: { project: Project; featured?: boolean }) {
  const tags = splitTokens(project.category);
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[14px] uppercase tracking-[0.16em] text-navy">
            Project {project.number}
          </p>
          <h3
            className={cn(
              "mt-2 font-display leading-[1.04] text-ink",
              featured ? "text-4xl sm:text-5xl lg:max-w-[10ch] lg:text-[3.25rem]" : "text-[1.75rem] sm:text-[1.9rem]",
            )}
          >
            {project.name}
          </h3>
        </div>
        <ArchiveArrow />
      </div>
      <p className="mt-4 max-w-[54ch] text-sm leading-6 text-ink-soft">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-paper-2 px-2.5 py-1 font-mono text-[14px] uppercase tracking-[0.12em] text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 font-mono text-[14px] uppercase tracking-[0.14em] text-ink-soft">
        Role — <span className="text-ink">{project.role}</span>
      </p>
    </>
  );
}

function FeaturedProject({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  return (
    <article>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group grid items-center gap-8 py-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber sm:py-16 lg:grid-cols-12 lg:gap-12"
      >
        <div className={cn("lg:col-span-7", reversed && "lg:col-start-6")}>
          <ProjectCover project={project} featured />
        </div>
        <div className={cn("lg:col-span-5", reversed && "lg:col-start-1 lg:row-start-1")}>
          <ProjectCopy project={project} featured />
        </div>
      </Link>
    </article>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group block py-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber sm:py-16"
      >
        <ProjectCover project={project} />
        <div className="mt-5">
          <ProjectCopy project={project} />
        </div>
      </Link>
    </article>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const items = projects.slice(0, limit);
  const rows: Array<{ type: "featured"; project: Project; reversed: boolean } | { type: "pair"; projects: Project[] }> =
    [];

  for (let i = 0, featuredIndex = 0; i < items.length; ) {
    const featured = items[i];
    if (!featured) break;
    rows.push({ type: "featured", project: featured, reversed: featuredIndex % 2 === 1 });
    featuredIndex += 1;
    i += 1;
    const pair = items.slice(i, i + 2);
    if (pair.length) {
      rows.push({ type: "pair", projects: pair });
      i += pair.length;
    }
  }

  return (
    <div className="divide-y divide-line">
      {rows.map((row) =>
        row.type === "featured" ? (
          <FeaturedProject key={row.project.slug} project={row.project} reversed={row.reversed} />
        ) : (
          <div
            key={row.projects.map((project) => project.slug).join("-")}
            className={cn(
              "grid divide-y divide-line md:grid-cols-2 md:divide-y-0",
              row.projects.length > 1 && "md:divide-x md:divide-line",
            )}
          >
            {row.projects.map((project, index) => (
              <div
                key={project.slug}
                className={cn(index === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12")}
              >
                <CompactProject project={project} />
              </div>
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function splitTokens(value: string) {
  return value.split("·").map((token) => token.trim()).filter(Boolean);
}

function projectCoverSrc(project: Project) {
  return project.coverSrc ?? project.imageSrc;
}

function projectCoverAlt(project: Project) {
  return project.coverAlt ?? project.imageAlt;
}

export function SelectedWorkSection() {
  const items = projects;
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const NAV_OFFSET = 72;
  const activeProject = items[active] ?? items[0];

  const selectProject = (index: number) => {
    if (index === active) return;
    const stage = stageRef.current;
    if (stage && window.matchMedia("(min-width: 1024px)").matches) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
      const stageTop = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, stageTop - NAV_OFFSET), behavior });
    }
    setActive(index);
  };

  return (
    <section id="selected-work" className="scroll-mt-16 overflow-x-clip bg-soft">
      <div className={`${pageWrap} pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20`}>
        <div className="mb-8 max-w-2xl sm:mb-14">
          <p className="eyebrow">01 / Index</p>
          <h2 className="mt-3 font-display text-[2.5rem] font-bold leading-[0.94] tracking-[-0.03em] text-ink sm:mt-4 sm:text-6xl lg:text-[4rem]">
            Selected Work
          </h2>
          <p className="mt-4 max-w-[48ch] text-sm leading-6 text-ink-soft sm:text-[15px] sm:leading-7">
            A selection of interfaces, product experiences, and redesign work I&apos;ve
            contributed to.
          </p>
        </div>

        {/* Mobile: image + card stack, tap opens case study */}
        <div className="flex flex-col gap-8 lg:hidden">
          {items.map((project, index) => {
            const category = splitTokens(project.category)[0];
            return (
              <Link
                key={project.slug}
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group block min-w-0 overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_12px_40px_-24px_rgba(15,23,42,0.18)] transition active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2 sm:aspect-[5/4]">
                  <img
                    src={projectCoverSrc(project)}
                    alt={projectCoverAlt(project)}
                    width={1600}
                    height={1600}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full max-w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                        {project.name}
                      </p>
                      <p className="mt-1 font-mono text-[14px] uppercase tracking-[0.14em] text-navy">
                        {category}
                      </p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:bg-ink-hover">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="ml-auto inline-flex items-center gap-1 font-mono text-[14px] uppercase tracking-[0.14em] text-coral">
                      Case study
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop: accordion + sticky preview */}
        <div
          ref={stageRef}
          className="hidden min-w-0 items-start gap-12 lg:grid lg:grid-cols-12 xl:gap-16"
        >
          <div className="min-w-0 lg:col-span-5 xl:col-span-4">
            <ul className="relative flex flex-col">
              <span
                aria-hidden="true"
                className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-line via-line to-transparent"
              />

              {items.map((project, index) => {
                const isActive = index === active;
                const category = splitTokens(project.category)[0];
                return (
                  <li key={project.slug} className="relative">
                    <div
                      className={cn(
                        "relative transition-all duration-300",
                        isActive &&
                          "rounded-2xl border border-line bg-paper shadow-[0_10px_36px_-20px_rgba(15,23,42,0.2)]",
                      )}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-[linear-gradient(180deg,var(--primary),var(--primary-light))]"
                        />
                      )}

                      <button
                        type="button"
                        onClick={() => selectProject(index)}
                        aria-expanded={isActive}
                        aria-controls={`work-panel-${project.slug}`}
                        className={cn(
                          "group/item flex w-full items-start gap-5 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-navy/40 focus-visible:ring-offset-2",
                          isActive
                            ? "px-6 pb-2 pt-6"
                            : "rounded-xl px-3 py-5 hover:bg-paper/80",
                        )}
                      >
                        <span
                          className={cn(
                            "relative z-[1] mt-0.5 grid size-10 shrink-0 place-items-center rounded-full font-mono text-[14px] font-bold tracking-wider transition-all duration-300",
                            isActive
                              ? "scale-105 bg-ink text-white shadow-[var(--glow-brand)]"
                              : "border border-line bg-soft text-ink-soft group-hover/item:border-navy/30 group-hover/item:text-navy",
                          )}
                        >
                          {project.number}
                        </span>

                        <span className="min-w-0 flex-1 pt-0.5">
                          <span
                            className={cn(
                              "block font-display leading-snug tracking-[-0.025em] transition-colors duration-300",
                              isActive
                                ? "text-[1.35rem] font-bold text-ink"
                                : "text-xl font-semibold text-ink/55 group-hover/item:text-ink",
                            )}
                          >
                            {project.name}
                          </span>
                          {!isActive && (
                            <span className="mt-1.5 block font-mono text-[14px] uppercase tracking-[0.16em] text-ink-soft/80 transition-colors group-hover/item:text-navy/70">
                              {category}
                            </span>
                          )}
                        </span>

                        <span
                          className={cn(
                            "mt-1 grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                            isActive
                              ? "bg-soft text-navy"
                              : "text-ink/25 group-hover/item:translate-x-0.5 group-hover/item:bg-paper group-hover/item:text-navy",
                          )}
                        >
                          <ArrowUpRight
                            className={cn(
                              "size-3.5 transition-transform duration-300",
                              isActive && "rotate-45",
                            )}
                          />
                        </span>
                      </button>

                      {isActive && (
                        <div
                          id={`work-panel-${project.slug}`}
                          className="animate-[heroFade_320ms_ease-out_both] px-6 pb-6 pl-[3.75rem]"
                        >
                          <p className="max-w-[42ch] text-sm leading-6 text-ink-soft">
                            {project.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-soft px-2.5 py-1 font-mono text-[14px] uppercase tracking-[0.12em] text-navy">
                              {category}
                            </span>
                            <Link
                              to="/work/$slug"
                              params={{ slug: project.slug }}
                              className="ml-auto inline-flex items-center gap-1 font-mono text-[14px] uppercase tracking-[0.14em] text-coral transition-colors hover:text-coral/80"
                            >
                              Case study
                              <ArrowUpRight className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            ref={previewRef}
            className="min-w-0 lg:sticky lg:top-[4.5rem] lg:col-span-7 lg:self-start xl:col-span-8"
          >
            {activeProject && (
              <Link
                to="/work/$slug"
                params={{ slug: activeProject.slug }}
                className="group relative block overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_12px_40px_-24px_rgba(15,23,42,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-paper">
                  {items.map((project, index) => (
                    <img
                      key={project.slug}
                      src={projectCoverSrc(project)}
                      alt={projectCoverAlt(project)}
                      width={1600}
                      height={1600}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-out",
                        index === active ? "z-[1] opacity-100" : "z-0 opacity-0",
                      )}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between bg-gradient-to-t from-ink/60 via-ink/15 to-transparent px-7 pb-6 pt-16">
                    <div className="min-w-0 pr-2">
                      <p className="font-mono text-[14px] uppercase tracking-[0.16em] text-white/70">
                        Project {activeProject.number} / {String(items.length).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-display text-xl font-semibold text-white">
                        {activeProject.name}
                      </p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink bg-ink text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-ink-hover">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(([name, text], index) => (
        <article key={name} className="surface-card p-5 sm:p-6">
          <p className="font-mono text-[14px] font-semibold text-navy">
            S/{String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-sans text-base font-semibold text-ink">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-6">
      {processSteps.map(([name, text], index) => (
        <article
          key={name}
          className="bg-paper p-5 transition-colors hover:bg-soft"
        >
          <p className="inline-flex size-9 items-center justify-center rounded-full bg-ink font-mono text-[14px] font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-sans text-sm font-semibold text-ink">{name}</h3>
          <p className="mt-2 text-sm leading-5 text-ink-soft">{text}</p>
        </article>
      ))}
    </div>
  );
}

export function DesignSystemSpecimen() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className={`${pageWrap} py-20`}>
        <p className="eyebrow">02 / System thinking</p>
        <h2 className="mt-5 max-w-[36ch] font-serif text-3xl leading-tight">
          Good interfaces become easier to scale when the rules behind them are clear.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <div className="specimen md:col-span-4">
            <p className="spec-label">Typography scale</p>
            <p className="mt-5 font-serif text-5xl font-bold">Aa</p>
            <p className="mt-3 font-sans text-sm font-semibold">Plus Jakarta Sans</p>
            <p className="font-body text-base">Inter</p>
            <p className="font-mono text-[14px] font-semibold uppercase tracking-[0.14em]">Labels / UI mono</p>
          </div>
          <div className="specimen md:col-span-3">
            <p className="spec-label">Color tokens</p>
            <div className="mt-5 flex gap-2">
              <span className="swatch bg-paper border border-line" />
              <span className="swatch bg-ink" />
              <span className="swatch bg-navy" />
              <span className="swatch bg-coral" />
            </div>
            <p className="mt-4 font-mono text-[14px] text-ink-soft">paper / ink / blue / coral</p>
          </div>
          <div className="specimen md:col-span-5">
            <p className="spec-label">Product components</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">
                Secondary
              </Button>
              <span className="rounded-full bg-coral px-3 py-1 font-mono text-[14px] font-semibold text-white">
                Accent
              </span>
            </div>
            <Input className="mt-4 rounded-full" placeholder="Search records" />
            <div className="mt-4 grid grid-cols-[1fr_auto] border-y border-line py-2 text-sm">
              <span>Responsive table row</span>
              <span className="text-ink-soft">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactIcons = {
  Email: Mail,
  Phone: Phone,
  LinkedIn: Linkedin,
  Location: MapPin,
} as const;

export function ContactMethods({
  tone = "paper",
  size = "strip",
}: {
  tone?: "paper" | "ink";
  size?: "strip" | "cards";
}) {
  const onInk = tone === "ink";
  const cards = size === "cards";

  return (
    <ul
      className={cn(
        "grid gap-px overflow-hidden",
        cards ? "rounded-2xl bg-line shadow-[var(--shadow-soft)] sm:grid-cols-2" : "rounded-2xl shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-4",
        onInk ? "bg-paper/15" : "bg-line",
      )}
    >
      {contactMethods.map((item) => {
        const Icon = contactIcons[item.label];
        const className = cn(
          "group flex h-full transition-colors",
          cards ? "flex-col gap-8 p-6 sm:p-7" : "items-center gap-3 p-4 sm:p-5",
          onInk ? "bg-footer hover:bg-ink-hover" : "bg-paper-2 hover:bg-paper",
        );
        const body = (
          <>
            <span
              className={cn(
                "grid shrink-0 place-items-center rounded-full border",
                cards ? "size-10" : "size-8",
                onInk
                  ? "border-paper/20 bg-white/10 text-paper"
                  : "border-ink bg-ink text-white",
              )}
            >
              <Icon className={cards ? "size-4" : "size-3.5"} />
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={cn(
                  "block font-mono text-[14px] uppercase tracking-[0.14em]",
                  onInk ? "text-paper/45" : "text-ink-soft",
                )}
              >
                {item.label}
              </span>
              <span
                className={cn(
                  "mt-1 block font-sans font-semibold",
                  cards ? "text-lg sm:text-xl" : "truncate text-sm",
                  onInk ? "text-paper" : "text-ink",
                  "href" in item && (onInk ? "group-hover:text-primary-light" : "group-hover:text-primary"),
                )}
              >
                {item.value}
              </span>
            </span>
          </>
        );

        return (
          <li key={item.label}>
            {"href" in item ? (
              <a
                href={item.href}
                className={className}
                {...("external" in item && item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {body}
              </a>
            ) : (
              <div className={className}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Availability() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-soft px-4 py-2 font-mono text-[14px] font-semibold uppercase tracking-[0.14em] text-navy shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_10%,transparent),var(--shadow-soft)]">
      <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-coral opacity-40" />
        <span className="relative m-auto size-2 rounded-full bg-coral ring-2 ring-white" />
      </span>
      Available for selected work
    </span>
  );
}

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
  ] as const;

  const isNavActive = (label: (typeof nav)[number]["label"]) => {
    if (label === "Work") {
      return (
        pathname === "/" ||
        pathname.startsWith("/work/") ||
        hash === "selected-work" ||
        hash === "#selected-work"
      );
    }
    if (label === "About") return pathname.startsWith("/about");
    if (label === "Services") return pathname.startsWith("/services");
    if (label === "Insights") return pathname.startsWith("/insights");
    if (label === "Contact") return pathname.startsWith("/contact");
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className={`${pageWrap} grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4`}>
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Ahmed Ali — Home"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-md bg-ink font-mono text-[13px] font-bold text-white transition-colors group-hover:bg-blue">
            AA
          </span>
          <span className="min-w-0">
            <span className="block truncate font-sans text-[14px] font-semibold leading-none text-ink">
              Ahmed Ali
            </span>
            <span className="mt-1 hidden font-sans text-[12px] font-medium uppercase tracking-[0.06em] text-ink-soft sm:block">
              UI/UX Engineer
            </span>
          </span>
        </Link>
        <nav className="hidden h-full items-center gap-0.5 md:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const isWork = item.label === "Work";
            const isContact = item.label === "Contact";
            const active = isNavActive(item.label);
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(isWork ? { hash: "selected-work" as const } : {})}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex h-9 items-center rounded-md px-3.5 font-sans text-[14px] font-medium tracking-normal transition-colors duration-200",
                  isContact
                    ? active
                      ? "bg-blue font-semibold text-white"
                      : "bg-ink font-semibold text-white hover:bg-blue"
                    : active
                      ? "font-semibold text-blue"
                      : "text-ink-soft hover:text-blue",
                  active &&
                    !isContact &&
                    "after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:rounded-full after:bg-blue",
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
          className="bg-ink text-white hover:bg-blue hover:text-white md:hidden"
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
            const active = isNavActive(item.label);
            return (
              <Link
                key={item.label}
                to={item.to}
                {...(isWork ? { hash: "selected-work" as const } : {})}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "grid grid-cols-[2rem_1fr_auto] items-center border-b border-line py-3.5 font-sans text-sm font-medium last:border-0",
                  active ? "text-blue" : "text-ink",
                )}
              >
                <span className={cn("text-[14px]", active ? "text-blue" : "text-ink-soft")}>
                  0{index + 1}
                </span>
                <span className={cn(active && "font-semibold")}>{item.label}</span>
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
      <div aria-hidden="true" className="h-px w-full bg-white/10" />
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
              className="w-full text-center text-blue-hover transition-colors hover:text-white sm:w-auto sm:text-left"
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,color-mix(in_oklab,var(--blue)_6%,transparent),transparent_55%)]"
      />
      <div className={`${pageWrap} relative py-16 sm:py-24`}>
        <p className="eyebrow">
          {index} / {eyebrow}
        </p>
        <h1 className="mt-5 max-w-[18ch] font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        <div className="mt-6 max-w-[62ch] text-base leading-[1.65] text-ink-soft sm:text-[17px]">{children}</div>
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
      <h2 className="section-title mt-3 text-[1.875rem] text-ink sm:text-[2.5rem] lg:text-[3rem]">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 block h-0.5 w-10 rounded-sm bg-ink"
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
              label === "After" ? "text-blue" : "text-ink-soft",
            )}
          >
            {label}
          </figcaption>
          <div
            className={cn(
              "relative overflow-hidden rounded-xl border bg-paper",
              compact && "min-h-0 flex-1",
              label === "After" ? "border-blue-border" : "border-line",
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
                className="group/visual relative block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
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
    <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-md border border-ink bg-ink text-white transition-colors group-hover:bg-blue">
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

function ProjectCover({ project, featured = false }: { project: Project; featured?: boolean }) {
  const comparison = Boolean(project.beforeSrc && project.afterSrc);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-paper-2",
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
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-blue">
            Project {project.number}
          </p>
          <h3
            className={cn(
              "project-title mt-2 text-ink",
              featured ? "text-4xl sm:text-5xl lg:max-w-[10ch] lg:text-[3.25rem]" : "text-[1.75rem] sm:text-[1.9rem]",
            )}
          >
            {project.name}
          </h3>
        </div>
        <ArchiveArrow />
      </div>
      <p className="mt-4 max-w-[54ch] text-base leading-[1.65] text-ink-soft">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="tag-blue"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 font-sans text-[13px] font-medium uppercase tracking-[0.05em] text-[#737373]">
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
        className="group grid items-center gap-8 py-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:py-16 lg:grid-cols-12 lg:gap-12"
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
        className="group block py-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:py-16"
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
          <h2 className="section-title mt-3 text-[2.25rem] text-ink sm:mt-4 sm:text-[3rem] lg:text-[3.25rem]">
            Selected Work
          </h2>
          <p className="mt-4 max-w-[48ch] text-base leading-[1.65] text-ink-soft sm:text-[17px]">
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
                className="group block min-w-0 overflow-hidden rounded-xl border border-line bg-paper transition duration-250 hover:border-line-dark hover:shadow-[var(--shadow-lift)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2 sm:aspect-[5/4]">
                  <img
                    src={projectCoverSrc(project)}
                    alt={projectCoverAlt(project)}
                    width={1600}
                    height={1600}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full max-w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="project-title text-xl text-ink transition-colors group-hover:text-blue sm:text-[1.375rem]">
                        {project.name}
                      </p>
                      <p className="tag-blue mt-2 inline-flex">{category}</p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-ink text-white transition-colors group-hover:bg-blue">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="ml-auto inline-flex items-center gap-1 font-mono text-[14px] uppercase tracking-[0.14em] text-blue">
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
            <ul className="flex flex-col gap-1">
              {items.map((project, index) => {
                const isActive = index === active;
                const category = splitTokens(project.category)[0];
                return (
                  <li key={project.slug}>
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-xl transition-all duration-300",
                        isActive
                          ? "bg-paper shadow-[var(--shadow-lift)] ring-1 ring-line"
                          : "hover:bg-paper/70",
                      )}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,color-mix(in_oklab,var(--blue)_8%,transparent),transparent_55%)]"
                        />
                      )}

                      <button
                        type="button"
                        onClick={() => selectProject(index)}
                        aria-expanded={isActive}
                        aria-controls={`work-panel-${project.slug}`}
                        className={cn(
                          "group/item relative flex w-full items-start gap-4 text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue/30 focus-visible:ring-offset-2",
                          isActive ? "px-5 pb-2 pt-5" : "rounded-xl px-3 py-4",
                        )}
                      >
                        <span className="relative mt-0.5 flex shrink-0 flex-col items-center">
                          <span
                            className={cn(
                              "grid size-10 place-items-center rounded-lg font-sans text-[13px] font-bold tracking-wide transition-all duration-300",
                              isActive
                                ? "bg-ink text-white"
                                : "bg-soft text-ink-soft group-hover/item:bg-blue-light group-hover/item:text-blue",
                            )}
                          >
                            {project.number}
                          </span>
                        </span>

                        <span className="min-w-0 flex-1 pt-1">
                          <span
                            className={cn(
                              "project-title block transition-colors duration-200",
                              isActive
                                ? "text-[1.35rem] text-ink"
                                : "text-xl font-semibold text-ink/50 group-hover/item:text-ink",
                            )}
                          >
                            {project.name}
                          </span>
                          {!isActive && (
                            <span className="mt-1.5 block font-sans text-[13px] font-medium uppercase tracking-[0.05em] text-ink-soft/70 transition-colors group-hover/item:text-blue">
                              {category}
                            </span>
                          )}
                        </span>

                        <span
                          className={cn(
                            "mt-1 grid size-8 shrink-0 place-items-center rounded-md transition-all duration-300",
                            isActive
                              ? "translate-x-0.5 -translate-y-0.5 bg-blue text-white"
                              : "text-ink/20 group-hover/item:bg-paper group-hover/item:text-blue",
                          )}
                        >
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      </button>

                      {isActive && (
                        <div
                          id={`work-panel-${project.slug}`}
                          className="animate-[heroFade_320ms_ease-out_both] relative px-5 pb-5 pl-[4.25rem]"
                        >
                          <p className="max-w-[42ch] text-sm leading-6 text-ink-soft">
                            {project.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="tag-blue">{category}</span>
                            <Link
                              to="/work/$slug"
                              params={{ slug: project.slug }}
                              className="ml-auto inline-flex items-center gap-1 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-blue transition-colors hover:text-blue-hover"
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
                className="group relative block overflow-hidden rounded-xl border border-line bg-paper transition duration-250 hover:border-line-dark hover:shadow-[var(--shadow-lift)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
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
                        "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ease-out",
                        index === active ? "z-[1] opacity-100" : "z-0 opacity-0",
                      )}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between bg-gradient-to-t from-ink/70 via-ink/20 to-transparent px-7 pb-6 pt-16">
                    <div className="min-w-0 pr-2">
                      <p className="font-mono text-[14px] uppercase tracking-[0.16em] text-white/70">
                        Project {activeProject.number} / {String(items.length).padStart(2, "0")}
                      </p>
                      <p className="mt-1 project-title text-xl text-white">
                        {activeProject.name}
                      </p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-ink text-white transition-colors duration-250 group-hover:bg-blue">
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
          <p className="font-mono text-[14px] font-semibold text-blue">
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
    <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
      {processSteps.map(([name, text], index) => (
        <article
          key={name}
          className="bg-paper p-5 transition-colors hover:bg-soft"
        >
          <p className="inline-flex size-8 items-center justify-center rounded-md bg-ink font-mono text-[14px] font-bold text-white">
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
        <h2 className="section-title mt-5 max-w-[36ch] text-[1.875rem] sm:text-[2.5rem]">
          Good interfaces become easier to scale when the rules behind them are clear.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <div className="specimen md:col-span-4">
            <p className="spec-label">Typography scale</p>
            <p className="mt-5 font-display text-5xl font-extrabold tracking-[-0.04em]">Aa</p>
            <p className="mt-3 font-display text-sm font-semibold">Manrope — Display</p>
            <p className="font-body text-base">Inter — Body / UI</p>
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em]">Labels / metadata</p>
          </div>
          <div className="specimen md:col-span-3">
            <p className="spec-label">Color tokens</p>
            <div className="mt-5 flex gap-2">
              <span className="swatch bg-paper border border-line" />
              <span className="swatch bg-ink" />
              <span className="swatch bg-soft border border-line" />
              <span className="swatch bg-blue" />
            </div>
            <p className="mt-4 font-mono text-[14px] text-ink-soft">paper / black / soft / blue</p>
          </div>
          <div className="specimen md:col-span-5">
            <p className="spec-label">Product components</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">
                Secondary
              </Button>
              <span className="tag-blue">Accent</span>
            </div>
            <Input className="mt-4" placeholder="Search records" />
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
        cards ? "rounded-xl bg-line sm:grid-cols-2" : "rounded-xl sm:grid-cols-2 lg:grid-cols-4",
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
                "grid shrink-0 place-items-center rounded-md border",
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
    <span className="inline-flex items-center gap-2.5 rounded-md border border-blue-border bg-blue-light px-4 py-2 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">
      <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-blue opacity-30" />
        <span className="relative m-auto size-2 rounded-full bg-blue ring-2 ring-white" />
      </span>
      Available for selected work
    </span>
  );
}

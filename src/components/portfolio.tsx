import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
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
                  "relative flex h-9 items-center rounded-full px-3.5 font-sans text-[14px] font-medium tracking-normal transition-colors duration-200",
                  isContact
                    ? active
                      ? "bg-blue-hover font-semibold text-white"
                      : "bg-blue font-semibold text-white hover:bg-blue-hover"
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
  // Key Screens: fixed preview frame; full horizontal flow opens in lightbox.
  const screensPreview = !large && Boolean(project.screensSrc);
  // Wide multi-screen strips: tease cut-off content so click affordance is clear.
  const screensFlowTease =
    screensPreview &&
    (project.slug === "edbanz" ||
      project.slug === "dashboard-data-interfaces" ||
      project.slug === "student-reward-marketplace");
  const screensFlowLabel =
    project.slug === "dashboard-data-interfaces"
      ? "2 layouts"
      : project.slug === "student-reward-marketplace"
        ? "Full flow"
        : "3 screens";
  const screensFlowDots =
    project.slug === "dashboard-data-interfaces"
      ? 2
      : project.slug === "student-reward-marketplace"
        ? 4
        : 3;

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
                className={cn(
                  "group/visual relative block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue",
                  large && "aspect-[16/10] overflow-hidden bg-paper-2",
                  screensPreview && "aspect-[7/5] overflow-hidden bg-paper-2",
                )}
                aria-label={
                  screensPreview
                    ? `View full ${project.name} screen flow`
                    : `View full ${project.name} image`
                }
              >
                {screensFlowTease ? (
                  <>
                    {/* Fill the frame; full multi-screen strip opens in lightbox */}
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-left transition-transform duration-500 group-hover/visual:scale-[1.01]"
                      style={{ imageRendering: "auto" }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-paper via-paper/70 to-transparent"
                    />
                    <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-ink px-2.5 py-1 font-mono text-[12px] uppercase tracking-[0.12em] text-paper">
                      <span className="inline-flex gap-0.5" aria-hidden="true">
                        {Array.from({ length: screensFlowDots }).map((_, i) => (
                          <span
                            key={i}
                            className={cn(
                              "size-1.5 rounded-full",
                              i === 0 ? "bg-blue" : "bg-paper/45",
                            )}
                          />
                        ))}
                      </span>
                      {screensFlowLabel}
                    </span>
                  </>
                ) : (
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "transition-transform duration-500 group-hover/visual:scale-[1.01]",
                      large
                        ? "h-full w-full object-cover object-top"
                        : screensPreview
                          ? "h-full w-full object-cover object-left"
                          : "h-auto w-full",
                    )}
                    style={{ imageRendering: "auto" }}
                  />
                )}
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
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between bg-gradient-to-t from-ink/70 via-ink/25 to-transparent px-4 pb-3 pt-12 font-mono text-[14px] uppercase tracking-[0.14em] text-paper sm:px-6">
              <span>{project.name}</span>
              <span className="inline-flex items-center gap-1">
                {screensPreview ? (
                  <>
                    Full flow
                    <ArrowUpRight className="size-3.5 opacity-90" />
                  </>
                ) : (
                  `${project.number} / ${String(projects.length).padStart(2, "0")}`
                )}
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

function projectCategory(project: Project) {
  return (splitTokens(project.category)[0] ?? "Project").toUpperCase();
}

function FeaturedWorkCard({ project }: { project: Project }) {
  const category = projectCategory(project);

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group grid overflow-hidden rounded-[0.75rem] bg-white p-3 shadow-[0_24px_60px_-32px_rgba(10,10,10,0.45)] transition duration-300 hover:shadow-[0_28px_70px_-28px_rgba(10,10,10,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:p-4 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:p-5"
    >
      <div className="flex flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-7 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-sans text-[13px] font-bold text-white">
            {project.number}
          </span>
          <span aria-hidden="true" className="h-px min-w-6 flex-1 bg-line" />
          <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">
            {category}
          </span>
        </div>

        <h3 className="project-title mt-8 text-[1.85rem] leading-[1.12] text-ink sm:text-[2.15rem]">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-ink-soft sm:text-[15px] sm:leading-7">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="tag-blue">{category}</span>
          <span className="tag-blue">Case study</span>
        </div>

        <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-blue px-5 py-2.5 font-sans text-sm font-semibold text-white transition-colors group-hover:bg-blue-hover">
          View Case Study
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="relative mt-2 min-h-[240px] overflow-hidden rounded-[0.5rem] bg-[#eef1f4] shadow-[0_16px_40px_-18px_rgba(15,23,42,0.45)] sm:min-h-[320px] lg:mt-0 lg:min-h-[460px]">
        <img
          src={projectCoverSrc(project)}
          alt={projectCoverAlt(project)}
          width={1600}
          height={1000}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.015]"
        />
      </div>
    </Link>
  );
}

function WorkIndexCard({ project }: { project: Project }) {
  const category = projectCategory(project);

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full min-h-[280px] flex-col rounded-[0.75rem] bg-white p-6 shadow-[0_12px_32px_-20px_rgba(10,10,10,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(10,10,10,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
    >
      <div className="flex items-center justify-between gap-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9ca3af]">
        <span>{project.number}</span>
        <span className="truncate text-right">{category}</span>
      </div>
      <h3 className="project-title mt-6 text-balance text-[1.15rem] leading-snug text-ink">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink-soft">
        {project.summary ?? project.description}
      </p>
      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="font-sans text-sm font-semibold text-blue">View Project</span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-blue group-hover:bg-blue group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function SelectedWorkSection() {
  const featured =
    projects.find((project) => project.slug === "connected-learning-ecosystem") ?? projects[0];
  const rest = featured ? projects.filter((project) => project.slug !== featured.slug) : [];

  if (!featured) return null;

  return (
    <section id="selected-work" className="scroll-mt-16 bg-background">
      <div className={`${pageWrap} pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">01 / Index</p>
            <h2 className="mt-3 font-display text-[2.75rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.75rem]">
              Selected Work
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-6 text-ink-soft sm:text-[15px] sm:leading-7 lg:pb-2 lg:text-right">
            A selection of interfaces, product experiences, and redesign work I&apos;ve
            contributed to.
          </p>
        </div>
      </div>

      <div className={`${pageWrap} pb-16 sm:pb-20 lg:pb-24`}>
        <FeaturedWorkCard project={featured} />
        {rest.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((project) => (
              <WorkIndexCard key={project.slug} project={project} />
            ))}
          </div>
        )}
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
            <p className="mt-4 font-mono text-[14px] text-ink-soft">paper / ink / muted / primary</p>
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
    <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-border bg-blue-light px-4 py-2 font-sans text-[13px] font-semibold text-blue">
      <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-blue opacity-30" />
        <span className="relative m-auto size-2 rounded-full bg-blue ring-2 ring-white" />
      </span>
      Available for selected work
    </span>
  );
}

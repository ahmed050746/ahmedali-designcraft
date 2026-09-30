import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Availability,
  DesignSystemSpecimen,
  ProcessTimeline,
  SectionHeading,
  SelectedWorkSection,
  ServicesGrid,
  pageWrap,
} from "@/components/portfolio";
import { insights } from "@/lib/portfolio-data";
import { HeroFloatingIcons } from "@/components/hero-floating-icons";
import ahmedHero from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Ali — UI/UX Engineer & Product Designer" },
      {
        name: "description",
        content:
          "Ahmed Ali designs clear, scalable SaaS, LMS, dashboard, and responsive product experiences.",
      },
      { property: "og:title", content: "Ahmed Ali — UI/UX Engineer & Product Designer" },
      {
        property: "og:description",
        content: "A product design portfolio focused on clear, scalable digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-2 w-full max-w-[360px] sm:mt-3 sm:max-w-[480px] lg:max-w-[560px]">
      <div
        aria-hidden="true"
        className="hero-orb pointer-events-none absolute left-[14%] top-[10%] h-[58%] w-[52%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary-light)_32%,transparent),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-orb-delay pointer-events-none absolute bottom-[6%] right-[8%] h-[52%] w-[48%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)] blur-3xl"
      />
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <img
          src={ahmedHero}
          alt="Ahmed Ali, UI/UX Engineer"
          width={1600}
          height={1152}
          fetchPriority="high"
          className="relative mx-auto h-auto w-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--line) 65%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--line) 65%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 38%, black 10%, transparent 66%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 38%, black 10%, transparent 66%)",
          }}
        />
        <HeroFloatingIcons />
        <div
          className={`${pageWrap} relative z-10 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center pb-0 pt-16 text-center`}
        >
          <div className="flex max-w-xl flex-col items-center animate-[heroFade_700ms_ease-out_both]">
            <Availability />
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.94] tracking-[-0.03em] text-ink sm:mt-7 sm:text-7xl">
              Ahmed Ali
            </h1>
            <span
              aria-hidden="true"
              className="mt-4 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-light))]"
            />
            <p className="mt-4 font-mono text-[14px] uppercase tracking-[0.22em] text-ink-soft">
              UI/UX Engineer · Karachi
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/" hash="selected-work">
                  View work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full animate-[heroRise_900ms_ease-out_both]">
            <HeroVisual />
          </div>
        </div>
      </section>

      <SelectedWorkSection />

      <DesignSystemSpecimen />
      <section className="relative overflow-hidden bg-soft">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_70%)] blur-2xl"
        />
        <div className={`${pageWrap} relative py-20 sm:py-24`}>
          <SectionHeading index="03 / Capabilities" title="What I Can Help With" />
          <ServicesGrid />
          <div className="mt-20 sm:mt-24">
            <SectionHeading index="04 / Process" title="From problem to polished interface." />
            <ProcessTimeline />
          </div>
        </div>
      </section>
      <section className="relative border-t border-line bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--coral)_10%,transparent),transparent_70%)] blur-2xl"
        />
        <div className={`${pageWrap} relative py-20 sm:py-24`}>
          <SectionHeading index="05 / Insights" title="Notes from the work." />
          <div className="mt-10 grid gap-5 overflow-hidden md:grid-cols-2">
            {insights.map((item) => (
              <Link
                key={item.slug}
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="surface-card group p-6 sm:p-7"
              >
                <p className="font-mono text-[14px] uppercase tracking-[0.14em] text-ink-soft">
                  {item.category} · {item.time}
                </p>
                <h3 className="mt-3 max-w-[30ch] font-display text-xl font-bold transition-colors group-hover:text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

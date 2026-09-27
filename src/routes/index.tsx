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
        className="pointer-events-none absolute left-1/2 top-[18%] h-[70%] w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--amber)_16%,transparent),transparent_70%)] blur-2xl"
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
      <section className="relative overflow-hidden bg-paper pt-16 text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--line) 90%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--line) 90%, transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 45%, black 18%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 18%, transparent 70%)",
          }}
        />
        <div
          className={`${pageWrap} relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center pb-0 pt-16 text-center`}
        >
          <div className="flex max-w-xl flex-col items-center animate-[heroFade_700ms_ease-out_both]">
            <Availability />
            <h1 className="mt-6 font-display text-5xl font-normal leading-[0.94] tracking-[-0.02em] text-ink sm:mt-7 sm:text-7xl">
              Ahmed Ali
            </h1>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              UI/UX Engineer · Karachi
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/" hash="selected-work">View work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact</Link>
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
      <section className="bg-paper">
        <div className={`${pageWrap} py-20`}>
          <SectionHeading index="03 / Capabilities" title="What I Can Help With" />
          <ServicesGrid />
          <div className="mt-20">
            <SectionHeading index="04 / Process" title="From problem to polished interface." />
            <ProcessTimeline />
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-paper-2">
        <div className={`${pageWrap} py-20`}>
          <SectionHeading index="05 / Insights" title="Notes from the work." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-2">
            {insights.map((item) => (
              <Link
                key={item.slug}
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="group bg-paper p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                  {item.category} · {item.time}
                </p>
                <h3 className="mt-3 max-w-[30ch] font-serif text-xl transition-colors group-hover:text-amber">
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

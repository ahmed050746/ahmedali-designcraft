import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Availability,
  ContactBlock,
  DesignSystemSpecimen,
  ProcessTimeline,
  ProjectGrid,
  SectionHeading,
  ServicesGrid,
  pageWrap,
} from "@/components/portfolio";
import { insights } from "@/lib/portfolio-data";

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
    <div className="relative mx-auto mt-10 w-56 sm:mt-12 sm:w-72">
      <div className="aspect-square overflow-hidden bg-paper-2">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
          alt="Temporary black-and-white editorial portrait for Ahmed Ali"
          width={900}
          height={900}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_18%] grayscale"
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
          className={`${pageWrap} relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-16 text-center`}
        >
          <div className="flex max-w-xl flex-col items-center">
            <Availability />
            <h1 className="mt-5 font-display text-5xl font-normal leading-none sm:text-7xl">
              Ahmed Ali
            </h1>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              UI/UX Engineer · Karachi
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/work">View work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="selected-work" className="bg-paper">
        <div className={`${pageWrap} py-20 sm:py-28`}>
          <SectionHeading
            index="01 / Index"
            title="Selected Work"
            text="A selection of interfaces, product experiences, and redesign work I've contributed to."
          />
          <ProjectGrid limit={4} />
          <Button asChild variant="outline" className="mt-12">
            <Link to="/work">
              View all projects <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

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
      <ContactBlock index="06" />
    </>
  );
}

import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Availability, ContactBlock, DesignSystemSpecimen, ProcessTimeline, ProjectGrid, SectionHeading, ServicesGrid, pageWrap } from "@/components/portfolio";
import { insights } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ahmed Ali — UI/UX Engineer & Product Designer" },
    { name: "description", content: "Ahmed Ali designs clear, scalable SaaS, LMS, dashboard, and responsive product experiences." },
    { property: "og:title", content: "Ahmed Ali — UI/UX Engineer & Product Designer" },
    { property: "og:description", content: "A product design portfolio focused on clear, scalable digital experiences." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

function HeroVisual() {
  return (
    <div className="relative mx-auto w-56 sm:w-64">
      <div className="absolute -inset-3 border border-line/70" aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-2 shadow-[0_24px_60px_-28px_var(--line)]">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
          alt="Temporary black-and-white editorial portrait for Ahmed Ali"
          width={900}
          height={1125}
          fetchPriority="high"
          className="h-full w-full object-cover grayscale"
        />
      </div>
    </div>
  );
}

function HomePage() { return <>
  <section className="bg-paper pt-16 text-ink"><div className={`${pageWrap} flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-12 text-center sm:py-16`}><HeroVisual/><div className="mt-10 flex max-w-2xl flex-col items-center sm:mt-12"><p className="font-body text-[10px] font-medium uppercase tracking-[0.24em] text-ink-soft">UI/UX Engineer · Product Designer</p><h1 className="mt-3 font-display text-5xl font-normal leading-[0.95] sm:text-7xl">Ahmed Ali</h1><p className="mt-5 max-w-[38ch] font-display text-xl italic leading-7 text-ink-soft sm:text-2xl sm:leading-8">Designing clear, scalable digital products where complexity feels considered and simple.</p><div className="mt-7 flex flex-wrap items-center justify-center gap-3"><Button asChild size="lg"><Link to="/work">View selected work</Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Get in touch</Link></Button></div><div className="mt-6"><Availability/></div></div><a href="#selected-work" className="mt-10 inline-flex flex-col items-center gap-3 font-body text-[9px] font-medium uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"><span>Explore portfolio</span><span className="h-8 w-px bg-line" aria-hidden="true" /></a></div></section>
  <section id="selected-work" className="bg-paper"><div className={`${pageWrap} py-20 sm:py-28`}><SectionHeading index="01 / Index" title="Selected Work" text="A selection of interfaces, product experiences, and redesign work I've contributed to."/><ProjectGrid limit={4}/><Button asChild variant="outline" className="mt-12"><Link to="/work">View all projects <ArrowRight/></Link></Button></div></section>
  <DesignSystemSpecimen/>
  <section className="bg-paper"><div className={`${pageWrap} py-20`}><SectionHeading index="03 / Capabilities" title="What I Can Help With"/><ServicesGrid/><div className="mt-20"><SectionHeading index="04 / Process" title="From problem to polished interface."/><ProcessTimeline/></div></div></section>
  <section className="border-t border-line bg-paper-2"><div className={`${pageWrap} py-20`}><SectionHeading index="05 / Insights" title="Notes from the work."/><div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-2">{insights.map(item=><Link key={item.slug} to="/insights/$slug" params={{slug:item.slug}} className="group bg-paper p-6"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">{item.category} · {item.time}</p><h3 className="mt-3 max-w-[30ch] font-serif text-xl transition-colors group-hover:text-amber">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{item.excerpt}</p></Link>)}</div></div></section>
  <ContactBlock index="06"/>
</> }
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

function HeroVisual() { return <div className="aspect-[4/3] overflow-hidden rounded-lg border border-paper/20 bg-paper/10 p-1.5"><img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85" alt="Product designer reviewing a digital interface on a large display" width={1400} height={1050} className="h-full w-full rounded-md object-cover" /></div> }

function HomePage() { return <>
  <section className="bg-amber pt-16 text-primary-foreground"><div className={`${pageWrap} grid gap-12 py-20 lg:grid-cols-12 lg:items-end lg:py-28`}><div className="lg:col-span-7"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">UI/UX Engineer · Product Designer</p><h1 className="mt-6 max-w-[18ch] font-serif text-[2.75rem] leading-[1.03] sm:text-6xl">Designing digital products that make complex things feel simple.</h1><p className="mt-6 max-w-[58ch] text-[15px] leading-7 text-primary-foreground/80">I&apos;m Ahmed Ali, a UI/UX Engineer and Product Designer focused on SaaS platforms, LMS products, dashboards, responsive interfaces, and design systems. I combine product thinking, visual design, and front-end understanding to create practical digital experiences.</p><div className="mt-8 flex flex-wrap items-center gap-3"><Button asChild variant="secondary" size="lg"><Link to="/work">View My Work</Link></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/35 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Let&apos;s Work Together</Link></Button><span className="text-primary-foreground/70"><Availability/></span></div></div><div className="lg:col-span-5"><HeroVisual/><p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-primary-foreground/55">Fig. 01 — Product interface fragment</p></div></div></section>
  <section className="bg-paper"><div className={`${pageWrap} py-20 sm:py-28`}><SectionHeading index="01 / Index" title="Selected Work" text="A selection of interfaces, product experiences, and redesign work I've contributed to."/><ProjectGrid limit={4}/><Button asChild variant="outline" className="mt-12"><Link to="/work">View all projects <ArrowRight/></Link></Button></div></section>
  <DesignSystemSpecimen/>
  <section className="bg-paper"><div className={`${pageWrap} py-20`}><SectionHeading index="03 / Capabilities" title="What I Can Help With"/><ServicesGrid/><div className="mt-20"><SectionHeading index="04 / Process" title="From problem to polished interface."/><ProcessTimeline/></div></div></section>
  <section className="border-t border-line bg-paper-2"><div className={`${pageWrap} py-20`}><SectionHeading index="05 / Insights" title="Notes from the work."/><div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-2">{insights.map(item=><Link key={item.slug} to="/insights/$slug" params={{slug:item.slug}} className="group bg-paper p-6"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">{item.category} · {item.time}</p><h3 className="mt-3 max-w-[30ch] font-serif text-xl transition-colors group-hover:text-amber">{item.title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{item.excerpt}</p></Link>)}</div></div></section>
  <ContactBlock/>
</> }
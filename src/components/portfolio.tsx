import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Check, Circle } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects, services, processSteps, type Project } from "@/lib/portfolio-data";

export const pageWrap = "mx-auto w-full max-w-[1200px] px-5 sm:px-8";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  const nav = [["Work", "/work"], ["About", "/about"], ["Services", "/services"], ["Insights", "/insights"], ["Contact", "/contact"]] as const;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
    <div className={`${pageWrap} grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4`}>
      <Link to="/" className="flex min-w-0 items-baseline gap-3"><span className="truncate font-sans text-[15px] font-medium">Ahmed Ali</span><span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft sm:inline">UI/UX Engineer</span></Link>
      <nav className="hidden items-center gap-7 md:flex">{nav.map(([label, to]) => <Link key={to} to={to} className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink" activeProps={{ className: "text-amber" }}>{label}</Link>)}<Button asChild size="sm"><Link to="/contact">Let&apos;s Talk <ArrowUpRight /></Link></Button></nav>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className={`${pageWrap} border-t border-line py-3 md:hidden`}>{nav.map(([label, to]) => <Link key={to} to={to} className="block border-b border-line py-3 font-mono text-xs uppercase tracking-[0.14em] last:border-0">{label}</Link>)}</nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-paper/15 bg-ink text-paper"><div className={`${pageWrap} py-10`}><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="font-sans text-[15px] font-medium">Ahmed Ali</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">UI/UX Engineer · Product Designer — Karachi, Pakistan</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/65"><Link to="/work">Work</Link><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link></nav></div><p className="mt-8 font-mono text-[10px] text-paper/45">© 2026 Ahmed Ali. All rights reserved.</p></div></footer>;
}

export function PageIntro({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section className="bg-paper pt-16"><div className={`${pageWrap} py-16 sm:py-24`}><p className="eyebrow">{index} / {eyebrow}</p><h1 className="mt-5 max-w-[18ch] font-serif text-4xl leading-[1.04] sm:text-6xl">{title}</h1><div className="mt-6 max-w-[62ch] text-base leading-7 text-ink-soft">{children}</div></div></section>;
}

export function SectionHeading({ index, title, text }: { index: string; title: string; text?: string }) {
  return <div className="border-b border-line pb-6"><p className="eyebrow">{index}</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>{text && <p className="mt-3 max-w-[52ch] text-sm leading-6 text-ink-soft">{text}</p>}</div>;
}

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`project-visual relative overflow-hidden rounded-lg border border-visual-line bg-visual ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
    <img src={project.imageSrc} alt={project.imageAlt} width={1600} height={large ? 900 : 1200} loading="lazy" className="h-full w-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-paper sm:px-6"><span>{project.name}</span><span>{project.number} / 06</span></div>
  </div>;
}

export function ProjectGrid({ limit }: { limit?: number }) {
  return <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-12">{projects.slice(0, limit).map((project, index) => <article key={project.slug} className={`group ${index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}`}><Link to="/work/$slug" params={{ slug: project.slug }}><ProjectVisual project={project}/><div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3"><div className="min-w-0"><h3 className="font-serif text-2xl">{project.name}</h3><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">{project.category}</p></div><ArrowUpRight className="mt-1 size-5 shrink-0 text-amber transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></div><p className="mt-3 max-w-[58ch] text-sm leading-6 text-ink-soft">{project.description}</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em]">Role — {project.role}</p></Link></article>)}</div>;
}

export function ServicesGrid() { return <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{services.map(([name, text], index) => <article key={name} className="border-t border-line pt-4"><p className="font-mono text-[10px] text-amber">S/{String(index + 1).padStart(2,"0")}</p><h3 className="mt-3 font-sans text-base font-medium">{name}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p></article>)}</div> }

export function ProcessTimeline() { return <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2 lg:grid-cols-6">{processSteps.map(([name, text], index) => <article key={name} className="bg-paper p-5"><p className="font-mono text-[11px] text-amber">{String(index + 1).padStart(2,"0")}</p><h3 className="mt-3 font-sans text-sm font-medium">{name}</h3><p className="mt-2 text-xs leading-5 text-ink-soft">{text}</p></article>)}</div> }

export function DesignSystemSpecimen() { return <section className="border-y border-line bg-paper-2"><div className={`${pageWrap} py-20`}><p className="eyebrow">02 / System thinking</p><h2 className="mt-5 max-w-[36ch] font-serif text-3xl leading-tight">Good interfaces become easier to scale when the rules behind them are clear.</h2><div className="mt-10 grid gap-4 md:grid-cols-12"><div className="specimen md:col-span-4"><p className="spec-label">Typography scale</p><p className="mt-5 font-serif text-5xl">Aa</p><p className="mt-3 font-sans text-sm">Space Grotesk</p><p className="font-serif text-xl">Newsreader</p><p className="font-mono text-[10px] uppercase tracking-[0.14em]">IBM Plex Mono</p></div><div className="specimen md:col-span-3"><p className="spec-label">Color tokens</p><div className="mt-5 flex gap-2"><span className="swatch bg-paper"/><span className="swatch bg-ink"/><span className="swatch bg-amber"/><span className="swatch bg-line"/></div><p className="mt-4 font-mono text-[10px] text-ink-soft">paper / ink / signal / line</p></div><div className="specimen md:col-span-5"><p className="spec-label">Product components</p><div className="mt-5 flex flex-wrap items-center gap-2"><Button size="sm">Primary</Button><Button size="sm" variant="outline">Secondary</Button><span className="rounded bg-amber/10 px-2 py-1 font-mono text-[10px] text-amber">Active</span></div><Input className="mt-4" placeholder="Search records"/><div className="mt-4 grid grid-cols-[1fr_auto] border-y border-line py-2 text-xs"><span>Responsive table row</span><span className="text-ink-soft">Ready</span></div></div></div></div></section> }

export function ContactBlock({ includeForm = true }: { includeForm?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent) { event.preventDefault(); setSent(true); }
  return <section className="bg-ink text-paper"><div className={`${pageWrap} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}><div className={includeForm ? "lg:col-span-7" : "lg:col-span-9"}><p className="eyebrow text-amber">06 / Contact</p><h2 className="mt-5 max-w-[18ch] font-serif text-4xl leading-tight sm:text-5xl">Have a product that needs a better interface?</h2><p className="mt-5 max-w-[52ch] text-sm leading-6 text-paper/70">Whether you&apos;re designing a new product, improving an existing interface, or building a scalable design system, I&apos;d be happy to discuss the project.</p><div className="mt-9 grid gap-5 border-t border-paper/15 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] sm:grid-cols-3"><div><dt className="text-paper/45">Email</dt><dd className="mt-1">[ADD EMAIL]</dd></div><div><dt className="text-paper/45">LinkedIn</dt><dd className="mt-1">[ADD LINKEDIN]</dd></div><div><dt className="text-paper/45">Location</dt><dd className="mt-1">Karachi, Pakistan</dd></div></div></div>{includeForm && <form onSubmit={submit} className="rounded-lg border border-paper/15 p-6 lg:col-span-5"><label className="form-label">Name</label><Input required className="form-input" placeholder="Your name"/><label className="form-label mt-5">Email</label><Input required type="email" className="form-input" placeholder="you@company.com"/><label className="form-label mt-5">Project / Message</label><Textarea required className="form-input min-h-28 resize-none" placeholder="Tell me about the product..."/><Button type="submit" className="mt-5 w-full">Send Message</Button>{sent && <p role="status" className="mt-4 flex gap-2 text-xs text-paper/70"><Check className="size-4 text-amber"/>Thanks — the form is ready to connect once Ahmed&apos;s email is added.</p>}</form>}</div></section>;
}

export function Availability() { return <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]"><Circle className="size-2 fill-current"/>Available for selected work</span> }
import { createFileRoute } from "@tanstack/react-router";
import { Availability, SectionHeading, pageWrap } from "@/components/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ahmed Ali — UI/UX Engineer" },
      {
        name: "description",
        content:
          "Ahmed Ali combines product design, design systems, responsive interface design, and front-end understanding.",
      },
      { property: "og:title", content: "About Ahmed Ali — UI/UX Engineer" },
      {
        property: "og:description",
        content: "Product designer working between interface design and implementation.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const skills = {
  Design: [
    "Figma",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Responsive Design",
    "UI/UX Design",
    "Product Design",
    "Information Architecture",
    "Interaction Design",
  ],
  Development: ["HTML", "CSS", "JavaScript", "React", "Responsive Front-end Development"],
  Tools: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Visual Studio Code",
    "GitHub",
    "Cursor",
  ],
};

const principles = [
  ["01", "Focus", "Product interfaces"],
  ["02", "Approach", "Systems thinking"],
  ["03", "Bridge", "Design + front-end"],
] as const;

const practice = [
  "Product interface design",
  "SaaS / LMS design",
  "Design systems",
  "Responsive interfaces",
  "Figma workflows",
  "Front-end collaboration",
  "UI implementation",
] as const;

const profile = [
  ["Role", "UI/UX Engineer"],
  ["Practice", "Product design"],
  ["Based in", "Karachi, Pakistan"],
  ["Currently", "Softbanz"],
] as const;

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_88%_40%,color-mix(in_oklab,var(--blue)_10%,transparent),transparent_60%)]"
        />
        <div className={`${pageWrap} relative py-16 sm:py-20 lg:py-24`}>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">02 / About</p>
              <h1 className="hero-title mt-5 max-w-[14ch] text-[2.25rem] text-ink sm:text-5xl lg:text-[3.25rem]">
                A designer who understands both interfaces and the code behind them.
              </h1>
              <span aria-hidden="true" className="mt-6 block h-0.5 w-12 rounded-sm bg-ink" />
              <p className="mt-6 max-w-[46ch] text-base leading-[1.7] text-ink-soft sm:text-lg">
                I&apos;m Ahmed Ali, a UI/UX Engineer and Product Designer with a strong focus on
                creating practical, scalable, and user-centered digital products.
              </p>
            </div>
            <aside className="lg:col-span-5">
              <div className="surface-card p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink font-sans text-sm font-bold tracking-wide text-white">
                    AA
                  </span>
                  <div className="min-w-0">
                    <p className="font-sans text-lg font-semibold leading-tight text-ink">Ahmed Ali</p>
                    <p className="mt-1 font-sans text-sm text-ink-soft">Product Designer</p>
                  </div>
                </div>
                <div className="mt-5">
                  <Availability />
                </div>
                <dl className="mt-6 border-t border-line">
                  {profile.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-3.5 last:border-b-0"
                    >
                      <dt className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                        {label}
                      </dt>
                      <dd className="text-right font-sans text-sm font-semibold text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-background">
        <div className={`${pageWrap} py-16 sm:py-20 lg:py-24`}>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">How I work</p>
              <div className="mt-5 space-y-5 text-base leading-[1.7] text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  My work sits between design and development. I use Figma to create interfaces,
                  prototypes, responsive systems, and reusable components while my front-end knowledge
                  helps me understand how those designs translate into real products.
                </p>
                <p>
                  I enjoy working on complex products where information architecture, usability,
                  consistency, and responsive behavior matter.
                </p>
              </div>
            </div>
            <dl className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {principles.map(([number, label, value]) => (
                <div key={label} className="surface-card flex items-center gap-4 p-4 sm:p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-sans text-[13px] font-bold text-white">
                    {number}
                  </span>
                  <div className="min-w-0">
                    <dt className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      {label}
                    </dt>
                    <dd className="mt-1 font-sans text-base font-semibold text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <article className="surface-card mt-8 p-6 sm:mt-10 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="tag-blue">Current</span>
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                Product design practice
              </p>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
              UI/UX Engineer — Softbanz
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {practice.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-3 py-1.5 font-sans text-[13px] font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <section className="border-t border-line bg-paper">
        <div className={`${pageWrap} py-16 sm:py-20`}>
          <SectionHeading
            index="03 / Practice"
            title="Skills & tools"
            text="A focused toolkit for structuring, designing, prototyping, and collaborating on real digital products."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items], groupIndex) => (
              <section key={group} className="surface-card flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-sans text-lg font-semibold text-ink">{group}</h3>
                  <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-blue">
                    0{groupIndex + 1}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-soft px-3 py-1.5 font-sans text-[13px] font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
